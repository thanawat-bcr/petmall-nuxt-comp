<template lang="pug">
.common-icon.w-6.h-6(
  @click="$emit('click')"
)
  CommonImage(
    :src="src"
    :alt="alt"
  )
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';

const CommonIcon = defineComponent({
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: { default: '' },
  },
});

export default CommonIcon;
</script>

<style lang="scss">
// .common-icon {}
</style>
