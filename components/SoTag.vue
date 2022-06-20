<template lang="pug">
.so-tag.h-6.px-4.bg-orange-900.flex.items-center.justify-center.rounded(:class="{'rounded-full': rounded}")
  .text-xs.text-gray-50.font-bold.text-center: slot Featured
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const SoTag = defineComponent({
  props: {
    rounded:{
      default: false,
    },
  },
  // setup() {},
});

export default SoTag;
</script>

<style lang="scss" scoped>
// .so-tag {}
</style>
