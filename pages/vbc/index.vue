<template lang="pug">
.index
  
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const index = defineComponent({
  layout: 'primary',
  mounted() {
    this.$nuxt.$emit('setLayout', { banner: 'vbc' });
  },
  // setup() {},
});

export default index;
</script>

<style lang="scss" scoped>
// .index {}
</style>
