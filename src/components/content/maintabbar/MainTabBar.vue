<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:item-img>
        <img src="@/assets/img/tabbar/home.png" alt="" />
      </template>
      <template v-slot:item-img-active>
        <img src="@/assets/img/tabbar/home-active.png" alt="" />
      </template>
      <template v-slot:item-text> 首頁 </template>
    </tab-bar-item>

    <tab-bar-item path="/sort">
      <template v-slot:item-img>
        <img src="@/assets/img/tabbar/home.png" alt="" />
      </template>
      <template v-slot:item-img-active>
        <img src="@/assets/img/tabbar/home-active.png" alt="" />
      </template>
      <template v-slot:item-text> 分類 </template>
    </tab-bar-item>

    <tab-bar-item path="/shopping">
      <template v-slot:item-img>
        <img src="@/assets/img/tabbar/home.png" alt="" />
      </template>
      <template v-slot:item-img-active>
        <img src="@/assets/img/tabbar/home-active.png" alt="" />
      </template>
      <template v-slot:item-text> 購物車 </template>
    </tab-bar-item>

    <tab-bar-item path="/personal">
      <template v-slot:item-img>
        <img src="@/assets/img/tabbar/home.png" alt="" />
      </template>
      <template v-slot:item-img-active>
        <img src="@/assets/img/tabbar/home-active.png" alt="" />
      </template>
      <template v-slot:item-text> 我的 </template>
    </tab-bar-item>

  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/Tabbar.vue";
import TabBarItem from "@/components/common/tabbar/TabbarItem.vue";
export default {
  name: "maintabbar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>