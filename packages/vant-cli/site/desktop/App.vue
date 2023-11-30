<template>
  <div class="app">
    <van-doc :simulator="simulator">
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
  computed: {
    simulator() {
      return `/mobile.html${location.hash}`;
    },
  },
};
</script>

<style lang="less"></style>
