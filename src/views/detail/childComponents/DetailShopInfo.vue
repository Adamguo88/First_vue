<template>
  <div class="shopinfo">
    <div class="shop-top">
      <img :src="shop.logo" />
      <span class="title">{{ shop.name }}</span>
    </div>
  </div>

  <div class="shop-middle">
    <div class="shop-middle-item shop-middle-left">
      <div class="info-sells">
        <div class="sells-count">
          {{ shop.sells }}
        </div>
        <div class="sells-tex">總銷量</div>
      </div>
      <div class="info-goods">
        <div class="goods-count">
          {{ shop.goodsCount }}
        </div>
        <div class="goods-text">全部寶貝</div>
      </div>
    </div>
    <div class="shop-middle-item shop-middle-right">
      <table>
        <tr v-for="(item, index) in shop.score" :key="index">
          <td>{{ item.name }}</td>
          <td class="score" :class="{ 'score-better': item.isBetter }">
            {{ item.score }}
          </td>
          <td class="better" :class="{ 'better-more': item.isBetter }">
            <span>
              {{ item.isBetter ? "高" : "低" }}
            </span>
          </td>
        </tr>
      </table>
    </div>
  </div>
   <div class="shop-bottom">
      <div class="enter-shop">看更多</div>
    </div>

</template>

<script>
export default {
  name: "detailshopinfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.shopinfo{
  padding: 10px;
}
.shop-top{
  display: flex;
  align-items: center;
}
.shop-top img {
  width: 100px;
  border-radius: 50%;
}
.shop-top > span{
  padding-left: 15px;
  font-size: 20px;
}
 .shop-middle {
   padding: 10px;
 }

.shop-middle{
  display: flex;
  align-items: center;
  justify-content: center;
}
.shop-middle-item{
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.shop-middle-left{
  border-right: 3px solid #d6d6d6 ;
}

.info-sells{
  padding-right: 20px;
}
.sells-count , .goods-count{
  font-size: 28px;
  text-align: center;
}
.sells-tex , .goods-text{
  text-align: center;
  padding-top: 10px;
}
table > tr {
  height: 25px;
}
.score-better{
  color: green;
  padding:5px 10px;
}
 .shop-bottom{
   padding-bottom: 50px;
   display: flex;
   align-items: center;
   justify-content: center;
 }
 .enter-shop{
   width: 150px;
   height: 50px;
   background-color: gray;
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
 }
</style>