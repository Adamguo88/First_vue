<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabcontrol",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    tabClick(index){
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  text-align-last: center;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item > span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active > span {
  border-bottom: 3px solid var(--color-text);
}
</style>