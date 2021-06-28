<template>
  <shop-list-item
    v-for="(item, index) in shoplist"
    :key="index"
    :is-check="item"
  />
</template>

<script>
import ShopListItem from "./ShopListItem";

export default {
  name: "shoplist",
  components: {
    ShopListItem,
  },
  props: {
    shoplist: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
</style>