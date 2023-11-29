<template>
  <div class="app">
    <van-doc>
      <router-view />
    </van-doc>
  </div>
</template>

<script>
import VanDoc from "./components/index.vue";

export default {
  components: {
    VanDoc,
  },
};
</script>

<style lang="less"></style>
