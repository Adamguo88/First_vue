<template>
  <div class="bottom-bar">
    <div class="check-all">
      <div class="all-btn">
        <check-buttom />
        <span>全選</span>
      </div>
      <div class="all-price">總額：{{ allPrice }}</div>
      <div class="all-product">結帳({{ allProduct }})</div>
    </div>
  </div>
</template>

<script>
import CheckButtom from "@/components/content/checkbuttom/CheckButtom";
export default {
  name: "showbottombar",
  components: {
    CheckButtom,
  },
  computed: {
    allPrice() {
      return this.$store.state.cartList
        .filter((item) => item.checked)
        .reduce((a, b) => {
          return a + b.count * b.price.substr(1);
        }, 0)
        .toFixed(2);
    },
    allProduct() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  display: flex;
  align-items: center;
  border-top: 2px solid #333;
  background-color: #eee;
  width: 100%;
}
.check-all {
  padding-left: 5px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}
.all-btn {
  display: flex;
}
.all-btn > span {
  padding-left: 3px;
}
.all-price {
  padding-left: 10px;
  font-size: 18px;
  color: black;
}
.all-product {
  font-size: 18px;
}
</style>