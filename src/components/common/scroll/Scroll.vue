<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
  name: "scroll",
  props: {
    probeType: {
      tyep: Number,
      default: 0,
    },
    pullUpLoad: {
      tyep: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      observeDOM: true,
      mouseWheel: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      // observeDOM: true,
      // observeImage: true,
    });

    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });

    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("loadmore");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      // console.log('------');
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style>
</style>