<template lang="pug">
.index
  section
    img.w-full.h-auto(src="/homepage/slide-01.png")
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const index = defineComponent({
  // layout: 'primary',
  layout: 'secondary',
  // setup() {},
});

export default index;
</script>

<style lang="scss">
// .index {}
</style>