<template>
  <div id="shopping">
    <nav-bar class="nav-shop">
      <template #nav-center>
        <div>購物車({{ cartListLength }})</div>
      </template>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <shop-list :shoplist="cartList"></shop-list>
    </scroll>
    <show-bottom-bar></show-bottom-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import ShopList from "./childComponents/ShopList";
import ShowBottomBar from './childComponents/ShopBottomBar'

import scroll from "@/components/common/scroll/Scroll";

import { mapGetters } from "vuex";

export default {
  name: "shopping",
  components: {
    NavBar,
    ShopList,
    scroll,
    ShowBottomBar,
  },
  computed: {
    ...mapGetters(["cartListLength", "cartList"]),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
#shopping {
  height: 100vh;
}
.content {
  height: calc(100vh - 137px);
  overflow: hidden;
}
.nav-shop {
  background-color: var(--color-text);
  color: var(--color-background);

  position: relative;
  z-index: 9;
}
</style>