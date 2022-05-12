<template lang="pug">
.index
  h1 Profile
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const index = defineComponent({
  layout: 'primary',
  mounted() {
    this.$nuxt.$emit('setLayout', { color: true, profile: true, });
  },
  // setup() {},
});

export default index;
</script>

<style lang="scss" scoped>
// .index {}
</style>
