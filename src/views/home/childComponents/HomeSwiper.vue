<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img class="slider-img" :src="item.image" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index.js";
export default {
  name: "homeswiper",
  props: {
    banners: {
      type: Array,
      default() {
        return []
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style>
.slider-img {
  /* height: 166px !important; */
  width: 100%;
}
</style>