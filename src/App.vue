<template>
  <div id="nav">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "./components/content/maintabbar/MainTabBar.vue";
export default {
  name: "testapp",
  components: {
    MainTabBar,
  },
};
</script>
<style>
@import "assets/css/base.css";
</style>
