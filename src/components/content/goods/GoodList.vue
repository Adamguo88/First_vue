<template>
  <div class="goods">
    <goods-list-item 
      v-for="(item, index) in goods"
      :key="index"
      :goodsItem="item"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodListItem";
export default {
  name: "goodlist",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}

</style>