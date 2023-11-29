<template>
  <div class="van-doc-container van-doc-row">
    <slot />
  </div>
</template>

<script>
export default {
  name: "VanDocContainer",
};
</script>

<style lang="less">
.van-doc-container {
  box-sizing: border-box;
  overflow: hidden;
}
</style>
