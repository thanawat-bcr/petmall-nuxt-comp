<template lang="pug">
.so-toggle.flex.w-12.h-6.rounded-full.px-1.items-center.transition(
  :class="`${value ? 'bg-green-800 justify-end' : 'bg-gray-300 justify-start'}`"
  @click="$emit('input', !value)"
)
  .w-4.h-4.rounded-full.bg-white

</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const SoToggle = defineComponent({
  props: {
    value: {},
  }
  // setup() {},
});

export default SoToggle;
</script>

<style lang="scss" scoped>
// .so-toggle {}
</style>
