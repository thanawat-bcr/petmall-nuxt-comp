<template lang="pug">
label.so-checkbox.inline-flex.items-center.gap-x-2
  input.hidden(
    type="checkbox"
    :checked="value"
    @input="$emit('input', !value)"
  )
  .w-5.h-5.bg-white.border-gray-200.border.border-solid.rounded-sm(v-if="!value")
  .w-5.h-5.bg-green-800.border-green-800.border.border-solid.rounded-sm.flex.items-center.justify-center(v-else)
    i.ph-check.text-lg.text-gray-50
  .text-sm.text-gray-500: slot
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const SoCheckbox = defineComponent({
  props: {
    value: {
      type: Boolean,
    },
  },
});

export default SoCheckbox;
</script>

<style lang="scss" scoped>
// .so-checkbox {}
</style>
