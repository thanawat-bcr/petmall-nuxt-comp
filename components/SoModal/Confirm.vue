<template lang="pug">
.so-modal-TEMPLATE.fixed.inset-0.z-40(:class="`${active ? 'pointer-events-auto' : 'pointer-events-none'}`")
  transition(name="fade")
    .common-modal.fixed.inset-0.z-40.flex.justify-center.items-center(
      style="background-color: #00000050;"
      @click.self="close"
      v-if="active"
    )
      .container
        .so-grid
          .flex.flex-col.gap-y-6.z-50.relative.bg-white.rounded-lg.py-8.px-6(
            v-if="active"
            class="col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4"
          )

            i.ph-x.text-xl.text-gray-400.p-2.cursor-pointer.self-end(@click="close")
            .flex.flex-col.justify-center.text-center
              h4.text-h4.text-gray-500 {{ title }}
              h4.text-h4.text-gray-500 ใช่หรือไม่ ?

            .flex.gap-x-4.mx-auto.mt-4(class="w-full md:w-1/2 lg:w-3/5")
              SoButton(block @click="close" mode="text") ยกเลิก
              SoButton(block @click="confirm") ยืนยัน

</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

const Template = defineComponent({
  props: {
    title: {},
    detail: {},
  },
  setup(props, ctx) {
    const active = ref(false);

    const open = (_ctx: string) => {
      ctx.emit('open');
      active.value = true;
    };
    const close = () => {
      ctx.emit('close');
      active.value = false;
    };
    const confirm = () => {
      ctx.emit('confirm');
    };

    return {
      active,

      open,
      close,
      confirm,
    };
  },
});

export default Template;
</script>

<style lang="scss" scoped>
.so-modal-TEMPLATE {
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>
