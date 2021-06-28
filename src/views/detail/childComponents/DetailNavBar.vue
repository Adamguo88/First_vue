<template>
  <div>
    <nav-bar>
      <template #nav-left>
        <div class="back" @click="back">
          <img src="@/assets/img/common/back.svg" alt="" />
        </div>
      </template>
      <template #nav-center>
        <div class="titles">
          <div
            class="title-item"
            v-for="(item, index) in titles"
            :key="index"
            @click="titleClick(index)"
            :class="{ active: index === currentIndex }"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar/NavBar";
export default {
  name: "detailnavbar",
  components: {
    navBar,
  },
  data() {
    return {
      titles: ["商品", "參數", "評論", "推薦"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.titles {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 14px;
}
.active {
  color: var(--color-text);
}
.back img {
  margin-top: 12px;
}
</style>