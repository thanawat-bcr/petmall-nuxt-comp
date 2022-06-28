<template lang="pug">
.so-modal.fixed.inset-0(:class="`${active ? 'pointer-events-auto' : 'pointer-events-none'}`")
  transition(name="fade")
    .common-modal.fixed.inset-0.z-20.flex.justify-center.items-center(
      style="background-color: #00000050;"
      @click.self="close"
      v-if="active"
    )
      .flex.flex-col.items-center.z-30.relative.bg-white.rounded-lg.p-4(
        v-if="active"
        style="max-width: 25rem; min-width: 10rem; min-height: 10rem;"
      )
        img(src="/empty/favorite.png")
        .flex.flex-col.justify-center.text-center
          h4.text-h4.text-gray-500 {{ title }}
          .text-sm.text-gray-400 {{ subtitle }}
        SoButton(v-if="secondary" @click="$emit('secondaryHandler')" mode="outline") {{ secondary }}
        SoButton(v-if="primary" @click="$emit('primaryHandler')" ) {{ primary }}
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api';

const SoModal = defineComponent({
  setup(props, ctx) {
    const active = ref(false);
    const context = ref({});

    const open = (_ctx: any) => {
      ctx.emit('open');
      context.value = _ctx;
      active.value = true;
    };
    const close = () => {
      ctx.emit('close');
      active.value = false;
    };
    const cancelAction = () => {
      close();
      ctx.emit('cancel', context.value);
    };
    const confirmAction = () => {
      ctx.emit('confirm', context.value);
    };
    return {
      active,
      open,
      close,
      cancelAction,
      confirmAction,
    };
  },
  props: {
    closable: {
      type: Boolean,
      default: false,
    },
    title: {},
    subtitle: {},
    primary: {},
    secondary: {},
  },
});

export default SoModal;
</script>

<style lang="scss" scoped>
.so-modal {
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>
