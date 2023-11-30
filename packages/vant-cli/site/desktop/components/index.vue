<template>
  <div>
    <doc-simulator :src="simulator" />
  </div>
</template>

<script>
import DocSimulator from "./Simulator.vue";

export default {
  name: "VanDoc",
  props: {
    simulator: String,
  },
  components: {
    DocSimulator,
  },
};
</script>

<style></style>
