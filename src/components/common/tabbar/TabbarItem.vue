<template>
  <div class="tab-bar-item" @click="JumpPage">
    <div v-if="!isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  methods: {
    JumpPage() {
      this.$router.replace(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path);
      // return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
      // return this.isActive ? {color:'pink'} : {};
      // console.log(this.isActive);
    },
  },
};
</script>

<style>
.tab-bar-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;

  font-size: 14px;
}
.tab-bar-item img {
  width: 29px;
  height: 29px;
}
</style>