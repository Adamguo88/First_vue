<template>
  <div class="detail-swiper">
    <swiper class="my-swiper-item">
      <swiper-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="" class="detailSwiper" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  name: "detailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.detailSwiper{
  width: 100vw;
}
.my-swiper-item {
  height: 400px;
  width: 100vw;
  background-position: center;
  background-size: cover;
}
</style>