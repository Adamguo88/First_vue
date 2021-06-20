<template>
  <div class="goods-list-items" @click="itemClick">
    <img :src="goodsItem.image" alt="" @load="imageLoad" />
    <p>{{ goodsItem.title }}</p>
    <span class="price">$ {{ goodsItem.price }}</span>
    <span class="favorite">{{ goodsItem.favo }}</span>
  </div>
</template>

<script>
import { bus } from "@/components/common/utils";
export default {
  name: "goodslistitem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  methods: {
    imageLoad() {
      bus.emit("imageItemLoad");
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.id);
    },
  },
};
</script>

<style>
.goods-list-items {
  width: 48%;
  padding: 2px 2px 20px 2px;
  text-align: center;
  /* padding-bottom: 20px; */
}
.goods-list-items > img {
  width: 100%;
  border-radius: 5px;
}
.goods-list-items > p {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.price {
  color: var(--color-text);
  margin-right: 20px;
}
</style>