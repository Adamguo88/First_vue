<template>
  <div id="home">
    <nav-bar class="nav-home">
      <template #nav-center>
        <div>購物車</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import { getHomeMultidate } from "@/network/home.js";
export default {
  name: "home",
  data() {
    return {
      banner: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
  },
  created() {
    getHomeMultidate().then((res) => {
      // console.log(res);
      // console.log(res.multidate);
      this.banner = res.data.banner;
      this.recommends = res.data.recommend
    });
  },
};
</script>

<style>
.nav-home {
  background-color: var(--color-text);
  color: var(--color-background);
}
</style>