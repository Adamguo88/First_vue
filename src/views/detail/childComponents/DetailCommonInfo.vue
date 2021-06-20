<template>
  <div v-if="Object.keys(commoninfo).length !== 0" class="common-info">
    <div class="info-header">
      <div class="header-title"></div>
      <div class="header-more">
        <div>用戶評價</div>
        <div>更多</div>
      </div>
      <div class="info-user">
        <img :src="commoninfo.user.avatar" alt="">
        <span>{{commoninfo.user.name}}</span>
      </div>
      <div class="info-detail">
        <p>{{commoninfo.content}}</p>
        <div class="info-other">
          <span class="date">{{ commoninfo.created}}</span>
          <span>{{commoninfo.style}}</span>
        </div>
        <div class="info-imgs">
          <img :src="item" v-for="(item,index) in commoninfo.images" :key="index">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailcommoninfo",
  props: {
    commoninfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.common-info{
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
  margin-bottom: 12px;
}
.header-more{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 4px solid #f2f5f8;
}
.info-header{
  /* border-bottom: 1px solid rgba(0,0,0,.1); */
  padding-bottom: 20px;
}

.info-user{
  display: flex;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
}
.info-user img{
  width: 15%;
  border-radius: 50%;
}
.info-other{
  padding:10px 0;
  color: #808080;
}
.info-other > .date{
  padding-right: 10px;
}
.info-imgs{
  margin-top: 10px;
  display: flex;
  align-items: center;

}
.info-imgs img{
  width: 20%;
  padding-right: 5px;
}
</style>