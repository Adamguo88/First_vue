<template>
  <div class="nav-bar">
    <div class="nav-left">
      <slot name="nav-left"></slot>
    </div>
    <div class="nav-center">
      <slot name="nav-center"></slot>
    </div>
    <div class="nav-right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
.nav-bar{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0px 1px 10px rgba(100, 100, 100, 0.3);
}
.nav-left , .nav-right{
  width: 60px;
}
.nav-center{
  flex: 1;
}
</style>