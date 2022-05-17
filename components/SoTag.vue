<template lang="pug">
.so-tag.h-6.rounded.px-5.bg-orange-900.flex.items-center.justify-center.max-w-min
  .text-xs.text-gray-50.font-bold.text-center: slot Featured
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const SoTag = defineComponent({
  // setup() {},
});

export default SoTag;
</script>

<style lang="scss" scoped>
// .so-tag {}
</style>
