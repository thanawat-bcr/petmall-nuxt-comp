<template lang="pug">
button.so-button.en(:class="`${buttonColor} ${buttonSize}`")
  slot
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api';

const SoButton = defineComponent({
  props: {
    size: {
      type: String,
      default: 'md',
    },
    type: {
      default: 'main',
    },
  },
  setup(props) {
    const buttonColor = computed(() => {
      if (props.type === 'main') return 'bg-green-800 text-white';
      if (props.type === 'soft') return 'bg-gray-opacity/12 text-gray-500';
      return 'bg-white text-gray-500';
    });

    const buttonSize = computed(() => {
      if (props.size === 'lg') return 'button-lg px-8 h-12';
      if (props.size === 'md') return 'button-sm px-6 h-10';
      return 'button-sm px-5 h-9';
    })

    return {
      buttonColor,
      buttonSize,
    };
  },
});

export default SoButton;
</script>

<style lang="scss">
.so-button {
  @apply rounded-lg;
}
</style>
