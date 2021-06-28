<template>
  <div class="shop-list" v-if="Object.keys(isCheck).length !== 0">
    <check-buttom @click="checkButtomClick" :is-click="isCheck.checked" />
    <div class="item-img">
      <img :src="isCheck.image" alt="" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ isCheck.title }}</div>
      <div class="item-desc">{{ isCheck.desc }}</div>
      <div class="info-botton">
        <div class="item-price left">{{ isCheck.price }}</div>
        <div>id={{isCheck.iid}}</div>
        <div class="item-count right">x{{ isCheck.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButtom from "@/components/content/checkbuttom/CheckButtom";
export default {
  name: "shoplistitem",
  props: {
    isCheck: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    CheckButtom,
  },
  methods: {
    checkButtomClick() {
      this.isCheck.checked = !this.isCheck.checked;
    },
  },
};
</script>

<style scoped>
.shop-list {
  width: 100%;
  display: flex;
  padding-right: 5px;
  border-bottom: 3px solid #333;
}
.item-img {
  padding: 5px;
}
.item-img img {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  display: block;
}
.item-info {
  font-size: 16px;
  color: #333;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  padding-right: 30px;
}
.item-title,
.item-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 15px;
}
.info-botton {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
}
.item-price {
  color: orangered;
}
</style>