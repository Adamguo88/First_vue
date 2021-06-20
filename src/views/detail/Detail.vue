<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImage"></detail-swiper>
      <detail-base-info :goods="dataGoods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailinfo="detailinfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info :param-info="paramInfo"></detail-param-info>
      <detail-common-info :commoninfo="commonInfo"></detail-common-info>
      <good-list :goods="recommends" />
    </scroll>
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

import GoodList from "@/components/content/goods/GoodList";

import Scroll from "@/components/common/scroll/Scroll";

import { debounce, bus } from "@/components/common/utils";

// import { onUnmounted, onMounted ,onUpdated } from "vue";

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
  },

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
    };
  },
  // setup() {
  //   console.log("創建");
  //   onMounted(() => {
  //     console.log("mounted!");
  //   });
  //   onUpdated(() => {
  //     console.log("updated!");
  //   });
  //   onUnmounted(() => {
  //     console.log("unmounted!");
  //   });
  // },
  created() {
    this.id = this.$route.params.id;

    getDetail(this.id).then((res) => {
      // 1. 輪播圖數據
      const data = res.result;
      // console.log(res);
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
    });

    getRecommends().then((res) => {
      this.recommends = res.list;
    });
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 1);
    bus.on("detailimageItemLoad", () => {
      refresh();
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
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
  height: calc(100vh - 44px);
}
</style>