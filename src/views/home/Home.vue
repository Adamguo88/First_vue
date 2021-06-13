<template>
  <div id="home">
    <nav-bar class="nav-home">
      <template #nav-center>
        <div>購物車</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banner"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精選']"
      @tabClick="tabclick"
    ></tab-control>
    <good-list :goods="showGoods"></good-list>
  </div>
</template>

<script>
import HomeSwiper from "./childComponents/HomeSwiper";
import RecommendView from "./childComponents/RecommendView";
import FeatureView from "./childComponents/FeatureView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodList from "@/components/content/goods/GoodList"

import { getHomeMultidate, getHomeGoods } from "@/network/home.js";

export default {
  name: "home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodList
  },
  data() {
    return {
      banner: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      currentType: 'pop', 
    };
  },
  created() {
    // 請求 Swiper數據
    this.getHomeMultidate();

    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods: {
    
    // 事件監聽
    tabclick(index){
      // this.currentType = Object.keys(this.goods)[index]
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
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
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        // console.log(res[type].data);
        // console.log(type);
        this.goods[type].list.push(...res[type].data.list)
        this.goods[type].page += 1
        
      });
    },
  },
};
</script>

<style>
.nav-home {
  background-color: var(--color-text);
  color: var(--color-background);

  position: sticky;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>