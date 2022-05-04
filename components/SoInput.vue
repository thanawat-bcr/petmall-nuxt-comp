<template lang="pug">
label.so-input.w-full(:class="`${inputSize.container} ${inputColor}`")
  ValidationProvider.w-full.flex.items-center(:rules="rules" v-slot="{ errors }")
    i.mr-2(v-if="leading" :class="`ph-${leading}`")
    input.w-full(
      :value="value"
      :placeholder="placeholder"
      @mouseover="hoverHandler(true)"
      @mouseleave="hoverHandler(false)"
      @focus="focusHandler(true)"
      @blur="focusHandler(false)"
      @input="$emit('input', $event.target.value)"
    )
    i.ml-2(v-if="trailing" :class="`ph-${trailing}`")
    //- transition(name="error")
      span.so-input__error__container(v-if="errors.length > 0")
        soIcon.mx-1.w-4.h-4(src='/icons/circle-warning.svg')
        span.subtitle3 {{ errors[0] }}
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
      let inactive = 'text-gray-600 bg-gray-100 border border-solid border-white'
      let hover = 'text-gray-600 border border-solid border-gray-opacity-48'
      let focus = 'text-gray-600 border border-solid border-green-800'
      let error = 'text-alert-600 border border-solid border-green-600'
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
  @apply flex items-center justify-start rounded-lg;
  transition: all 50ms ease-in-out;

  input {
    @apply placeholder-gray-opacity-40;
  }
}
// .so-input {
//   &__text {
//     &__container {
//       @apply flex flex-col h-24;
//     }
//     &__field {
//       @apply my-1 h-10 w-full relative;
//     }
//     &__icon {
//       @apply absolute mx-4 opacity-70;
//       top: 50%;
//       transform: translateY(-50%);
//     }
//     &__input {
//       @apply h-full w-full bg-white rounded-lg outline-none text-black;
//     }
//   }
//   &__error {
//     &__container {
//       transform-origin: center top;
//       @apply text-red-500 inline-flex items-center self-start;
//     }
//   }
//   .error {
//     &-enter-active {
//       animation: error-in .3s;
//     }
//     &-leave-active {
//       animation: error-in .3s reverse;
//     }
//   }
//   @keyframes error-in {
//     0% {
//       transform: scale(0);
//     }
//     50% {
//       transform: scale(1.1);
//     }
//     100% {
//       transform: scale(1);
//     }
//   }
// }
</style>
