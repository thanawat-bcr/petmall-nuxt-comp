<template lang="pug">
.common-image.w-full.h-full.overflow-hidden.relative(@click="$emit('click')")
  img.w-full.h-full.absolute.inset-0(
    :class="{'object-contain': contain}"
    :src="src"
  )
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const CommonImage = defineComponent({
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: { default: '' },
    contain: {
      type: Boolean,
      default: false,
    },
  },
  // setup() {},
});

export default CommonImage;
</script>

<style lang="scss">
// .common-image {}
</style>
