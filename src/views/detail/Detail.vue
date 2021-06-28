<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      @titleClick="titleClick"
      ref="nav_bar"
    ></detail-nav-bar>
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <detail-swiper :top-images="topImage"></detail-swiper>
      <detail-base-info :goods="dataGoods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailinfo="detailinfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info
        ref="param"
        :param-info="paramInfo"
      ></detail-param-info>
      <detail-common-info
        :commoninfo="commonInfo"
        ref="comment"
      ></detail-common-info>
      <good-list :goods="recommends" ref="recommend" />
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-top @click="backclick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar.vue";
import DetailSwiper from "./childComponents/DetailSwiper.vue";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailShopInfo from "./childComponents/DetailShopInfo";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
import detailParamInfo from "./childComponents/DetailParamInfo";
import DetailCommonInfo from "./childComponents/DetailCommonInfo";
import DetailBottomBar from "./childComponents/DetailBottomBar";

import GoodList from "@/components/content/goods/GoodList";
import { backTopMixin } from "@/components/common/maxins";

import Scroll from "@/components/common/scroll/Scroll";

import { debounce, bus } from "@/components/common/utils";

import { onUnmounted, onMounted, onUpdated } from "vue";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommends,
} from "@/network/detail.js";

export default {
  name: "detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    detailParamInfo,
    DetailCommonInfo,
    GoodList,
    DetailBottomBar,
  },
  mixins: [backTopMixin],

  data() {
    return {
      id: "",
      topImage: [],
      dataGoods: {},
      shop: {},
      detailinfo: {},
      paramInfo: {},
      commonInfo: {},
      recommends: [],
      positionY: [],
      getThemeTopY: null,
      currentIndex: 0,
    };
  },
  // setup() {
  //   console.log("創建");
  //   onMounted(() => {
  //     console.log("mounted!");
  //   });
  //   onUnmounted(() => {
  //     console.log("unmounted!");
  //   });
  //   onUpdated(() => {
  //     console.log(this);
  //   });
  // },
  created() {
    this.id = this.$route.params.id;

    getDetail(this.id).then((res) => {
      // 1. 輪播圖數據
      // console.log(res);
      const data = res.result;
      this.topImage = data.itemInfo.topImages;

      // 2. 商品訊息
      this.dataGoods = new Goods(res.result.colums, res.result.itemInfo);

      // 3.獲取店鋪數據
      this.shop = new Shop(data.shopInfo);

      // 4.獲得照片訊息
      this.detailinfo = data.detailInfo;

      // 5.獲得參數訊息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 6.評論訊息
      this.commonInfo = data.rate.list[0];

      // nav-bar 獲取高度
      // this.$nextTick(() => {
      //   this.positionY = [];

      //   this.positionY.push(0);
      //   this.positionY.push(this.$refs.param.$el.offsetTop);
      //   this.positionY.push(this.$refs.comment.$el.offsetTop);
      //   this.positionY.push(this.$refs.recommend.$el.offsetTop);

      // console.log(this.positionY);
      // });

      this.getThemeTopY = debounce(() => {
        this.positionY = [];

        this.positionY.push(0);
        this.positionY.push(this.$refs.param.$el.offsetTop);
        this.positionY.push(this.$refs.comment.$el.offsetTop);
        this.positionY.push(this.$refs.recommend.$el.offsetTop);
        this.positionY.push(Number.MAX_VALUE);
      }, 100);
    });

    getRecommends().then((res) => {
      this.recommends = res.list;
    });
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    bus.on("detailimageItemLoad", () => {
      refresh();
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.positionY[index] + 44, 500);
    },
    contentScroll(position) {
      this.isShowBackTop = position.y <= -1000;

      const nowpositionY = -position.y;
      const length = this.positionY.length;
      for (let i = 0; i < length - 1; i++) {
        // if (
        //   this.currentIndex !== i &&
        //   ((i < length - 1 &&
        //     nowpositionY >= this.positionY[i] &&
        //     nowpositionY < this.positionY[i + 1]) ||
        //     (i === length - 1 && nowpositionY >= this.positionY[i]))
        // ) {
        //   this.currentIndex = i;
        //   this.$refs.nav_bar.currentIndex = this.currentIndex
        // }
        if (
          this.currentIndex !== i &&
          nowpositionY >= this.positionY[i] - 44 &&
          nowpositionY < this.positionY[i + 1] - 44
        ) {
          this.currentIndex = i;
          this.$refs.nav_bar.currentIndex = this.currentIndex;
        }
      }
    },
    addToCart(){
      const product = {}
      product.image = this.topImage[0]
      product.title = this.dataGoods.title
      product.desc = this.dataGoods.desc
      product.price = this.dataGoods.lowNowPrice
      product.iid = this.id
      product.count = 0
      product.checked = true;
      // console.log(product);
      // this.$store.commit('addCart',product)

      this.$store.dispatch('addCart', product)

      
    }
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav-bar {
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.content {
  height: calc(100vh - 44px - 58px);
}
</style>