<template>
  <div>
    <iframe ref="iframe" :src="src" frameborder="0" />
  </div>
</template>

<script>
export default {
  name: "VanDocSimulator",
  props: {
    src: String,
  },
};
</script>

<style></style>
