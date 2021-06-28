<template>
  <div class="check-buttom" :class="{ active: isClick }" >
    <img src="../../../assets/img/shop/tick.svg" alt="" />
  </div>
</template>

<script>
// import img from '../../../assets/img/shop/tick.svg'
export default {
  name: "checkbuttom",
  props: {
    isClick: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.check-buttom {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 3px;
}
.check-buttom > img {
  border: 1px solid black;
  border-radius: 50%;
}
.active > img {
  border: 1px solid red;
  background-color: red;
}
</style>