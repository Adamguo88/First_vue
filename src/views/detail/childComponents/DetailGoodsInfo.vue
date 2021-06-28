<template>
  <div v-if="Object.keys(detailinfo).length !== 0" class="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">
        {{ detailinfo.desc }}
      </div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailinfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailinfo.detailImage[0].list"
        :key="index"
        :src="item"
        @load="detailImgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "detailgoodsinfo",
  props: {
    detailinfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0,
    };
  },
  methods: {
    detailImgLoad() {
      // if (++this.counter === this.imagesLength) {
        this.$emit("imageLoad")
      // }
    },
  },
  watcg: {
    detailinfo() {
      this.imagesLength = detailinfo.detailImage[0].list.length;
    },
  },
};
</script>

<style scoped>
.info-list > img {
  width: 100%;
}
</style>