<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.id">
      <a :href="item.link">
        <img class="recommend-img" :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default(){
        return []
      }
    }
  }
};
</script>

<style>
.recommend{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0 20px 0;
  border-bottom: 8px solid #eee;
}
.recommend-item{
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.recommend-img{
  margin-bottom: 5px;
   width: 70px; 
  height: 70px;
}
</style>