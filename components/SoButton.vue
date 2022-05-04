<template lang="pug">
button.so-button.en(:class="`${buttonColor} ${buttonSize.button}`")
  i(v-if="leading" :class="`ph-${leading} ${buttonSize.icon}`")
  slot(:class="`${buttonSize.text}`")
  i(v-if="trailing" :class="`ph-${trailing} ${buttonSize.icon}`")
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
      type: String,
      default: 'main',
    },
    leading: {
      type: String,
      default: '',
    },
    trailing: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const buttonColor = computed(() => {
      if (props.type === 'main') return 'bg-green-800 text-white';
      if (props.type === 'soft') return 'bg-gray-opacity/12 text-gray-500';
      return 'bg-white text-gray-500';
    });

    const buttonSize = computed(() => {
      if (props.size === 'lg') return {
        button: 'px-8 h-12 gap-x-2',
        text: 'button-lg',
        icon: 'text-xl',
      };
      if (props.size === 'md') return {
        button: 'px-6 h-10 gap-x-2',
        text: 'button-sm',
        icon: 'text-xl',
      };
      return {
        button: 'px-5 h-9 gap-x-1',
        text: 'button-sm',
        icon: 'text-md',
      };
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
  @apply flex items-center justify-center rounded-lg;
}
</style>
