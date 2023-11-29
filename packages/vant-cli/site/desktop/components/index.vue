<template>
  <div>
    <doc-container>
      <doc-content>
        <slot />
      </doc-content>
    </doc-container>
  </div>
</template>

<script>
import DocContainer from './Container.vue';
import DocContent from './Content.vue';

export default {
  name: "VanDoc",
  components: {
    DocContainer,
    DocContent
  }
};
</script>

<style></style>
