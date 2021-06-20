<template>
  <div id="home">
    <nav-bar class="nav-home">
      <template #nav-center>
        <div>商場</div>
      </template>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精選']"
      @tabClick="tabclick"
      ref="tabControl1"
      class="hdtab-control"
      v-show="isTabFixed"
    ></tab-control>

    <scroll
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @loadmore="loadMore"
    >
      <home-swiper
        :banners="banner"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精選']"
        @tabClick="tabclick"
        ref="tabControl2"
        v-show="!isShowBackTop"
      ></tab-control>
      <good-list :goods="showGoods"></good-list>
    </scroll>

    <back-top @click="backclick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./childComponents/HomeSwiper";
import RecommendView from "./childComponents/RecommendView";
import FeatureView from "./childComponents/FeatureView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodList from "@/components/content/goods/GoodList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backtop/BackTop";

import { getHomeMultidate, getHomeGoods } from "@/network/home.js";
import { debounce, bus } from "@/components/common/utils";
import { onMounted, onUnmounted } from '@vue/runtime-core';

export default {
  name: "home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banner: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
    };
  },
  created() {
    // 請求 Swiper數據
    this.getHomeMultidate();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 1);
    bus.on("imageItemLoad", () => {
      refresh();
    });
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    // 事件監聽
    tabclick(index) {
      // this.currentType = Object.keys(this.goods)[index]
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backclick() {
      // this.$refs.scroll.scroll.scrollTo(0,0,500)
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // console.log(position.y);
      // this.isShowBackTop = -1000 > position.y
      this.isShowBackTop = position.y <= -1000;

      this.isTabFixed = (-position.y) + 44 > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    // 網路請求
    // 網頁創建時  請求 Swiper數據
    getHomeMultidate() {
      getHomeMultidate().then((res) => {
        // console.log(res);
        this.banner = res.multidate.data.banner.list;
        this.recommends = res.multidate.data.recommend.list;
      });
    },
    // 網頁創建時  請求 pop、new、sell數據
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res[type].data);
        // console.log(type);
        this.goods[type].list.push(...res[type].data.list);
        this.goods[type].page += 1;

        // 完成上拉加載更多
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
.nav-home {
  background-color: var(--color-text);
  color: var(--color-background);

  position: sticky;
  top: 0;
  z-index: 9;
}
.wrapper {
  height: calc(100vh - 97px);
  /* overflow: hidden; */
}
.hdtab-control {
  position: absolute;
  z-index: 9;
  top: 44px;
  left: 0;
  right: 0;
}
</style>