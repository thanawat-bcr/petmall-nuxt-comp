<template lang="pug">
ValidationProvider.relative.w-full(:rules="rules" v-slot="{ errors }")
  label.so-radio.inline-flex.items-center.gap-x-2.cursor-pointer(
    v-for="(op, index) in options"
    :key="op.value"
  )
    input.hidden(
      type="radio"
      :checked="value === op.value"
      :value="value"
      @change="$emit('input', op.value)"
    )
    .w-5.h-5.border-gray-200.border.border-solid.rounded-full(v-if="value !== op.value" 
      :style="`${errors.length > 0 ? 'border-color: #EF4444;' : ''}`")
    .w-5.h-5.border-green-800.border.border-solid.rounded-full.flex.items-center.justify-center(v-else 
      :style="`${errors.length > 0 ? 'border-color: #EF4444;' : ''}`")
      .w-3.h-3.bg-green-800.rounded-full(
        :style="`${errors.length > 0 ? 'background-color: #EF4444;' : ''}`"
      )
    .text-sm.text-gray-500(:style="`${errors.length > 0 ? 'color: #EF4444;' : ''}`") {{ op.name || op.value }}
  .w-full.flex.items-center.absolute(v-if="errors.length > 0" style="bottom: -25px; left: 0;")
    i.mr-1.text-alert-600(:class="'ph-warning'")
    span.text-xs.text-alert-600 {{ errors[0] }}
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const SoRadio = defineComponent({
  props: {
    value: {},
    options: {},
    rules: {},
  },
  // setup() {},
});

export default SoRadio;
</script>

<style lang="scss" scoped>
// .so-radio {}
</style>
