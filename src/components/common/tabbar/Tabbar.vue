<template>
  <div class="nav-bar-wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'tabbar'

}
</script>

<style>
.nav-bar-wrap{
  background-color: #fff;
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

}
</style>