<template lang="pug">
label.so-radio.inline-flex.items-center.gap-x-2.cursor-pointer
  input.hidden(
    type="radio"
    :checked="selected"
    @input="$emit('select', value)"
  )
  .w-5.h-5.border-gray-200.border.border-solid.rounded-full(v-if="!selected")
  .w-5.h-5.border-green-800.border.border-solid.rounded-full.flex.items-center.justify-center(v-else)
    .w-3.h-3.bg-green-800.rounded-full
  .text-sm.text-gray-500: slot
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const SoRadio = defineComponent({
  props: {
    value: {},
    selected: { type: Boolean, required: true },
  },
  // setup() {},
});

export default SoRadio;
</script>

<style lang="scss" scoped>
// .so-radio {}
</style>
