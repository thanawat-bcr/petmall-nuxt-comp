<template lang="pug">
ValidationProvider.w-full.flex.items-center(:rules="rules" v-slot="{ errors }")
  label.so-input.w-full.relative(
    :class="`${inputSize.container} ${inputColor}`"
    :style="`${errors.length > 0 ? 'border-color: #EF4444;' : ''}`"
  )
    i.mr-2(v-if="leading" :class="`ph-${leading}`")
    input.w-full(
      :value="value"
      :placeholder="placeholder"
      :style="`${errors.length > 0 ? 'color: #EF4444;' : ''}`"
      @mouseover="hoverHandler(true)"
      @mouseleave="hoverHandler(false)"
      @focus="focusHandler(true)"
      @blur="focusHandler(false)"
      @input="$emit('input', $event.target.value)"
    )
    i.ml-2(v-if="trailing" :class="`ph-${trailing}`")
    .w-full.flex.items-center.absolute(v-if="errors.length > 0" style="bottom: -22px;")
      i.mr-1.text-alert-600(:class="'ph-warning'")
      span.text-xs.text-alert-600 {{ errors[0] }}
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api';

const SoInput = defineComponent({
  props: {
    value: {},
    placeholder: {},
    size: {
      type: String,
      default: 'lg',
    },
    leading: {
      type: String,
      default: '',
    },
    trailing: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    rules: {},
  },
  setup(props) {
    const showPassword = ref(false);
    const togglePassword = () => { showPassword.value = !showPassword.value; };

    const focusState = ref(false);
    const focusHandler = (state: boolean) => { focusState.value = state; };

    const hoverState = ref(false);
    const hoverHandler = (state: boolean) => { hoverState.value = state; };

    const inputColor = computed(() => {
      let inactive = 'text-gray-600 bg-gray-100 border border-solid'
      let hover = 'text-gray-600 border border-solid border-gray-opacity-48'
      let focus = 'text-gray-600 border border-solid border-green-800'

      if (focusState.value) return focus;
      if (hoverState.value) return hover;
      return inactive;
    });

    const inputSize = computed(() => {
      if (props.size === 'lg') return {
        container: 'px-4 h-12',
        text: 'text-sm',
        icon: 'text-xl',
      };
      if (props.size === 'md') return {
        container: 'px-4 h-10',
        text: 'text-sm',
        icon: 'text-md',
      };
      return {
        container: 'px-3 h-8',
        text: 'text-xs',
        icon: 'text-md',
      };
    })

    return {
      showPassword,
      togglePassword,

      focusState,
      focusHandler,

      hoverState,
      hoverHandler,

      inputColor,
      inputSize,
    };
  },
});

export default SoInput;
</script>

<style lang="scss">
textarea:focus, input:focus{
  outline: none;
}
.so-input {
  @apply flex items-center justify-start rounded-lg mb-8;
  transition: all 50ms ease-in-out;

  input {
    @apply placeholder-gray-opacity-40;
  }
}
</style>
