<template lang="pug">
span
  label.so-radio.inline-flex.items-center.gap-x-2.cursor-pointer(
    v-for="(op, index) in options"
    :key="op.value"
  )
    input.hidden(
      type="radio"
      :checked="value === op.value"
      @change="$emit('input', op.value)"
    )
    .w-5.h-5.border-gray-200.border.border-solid.rounded-full(v-if="value !== op.value")
    .w-5.h-5.border-green-800.border.border-solid.rounded-full.flex.items-center.justify-center(v-else)
      .w-3.h-3.bg-green-800.rounded-full
    .text-sm.text-gray-500 {{ op.name || op.value }}
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const SoRadio = defineComponent({
  props: {
    value: {},
    options: {},
  },
  // setup() {},
});

export default SoRadio;
</script>

<style lang="scss" scoped>
// .so-radio {}
</style>
