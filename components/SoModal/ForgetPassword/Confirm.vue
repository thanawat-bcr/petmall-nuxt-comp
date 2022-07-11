<template lang="pug">
.so-modal-TEMPLATE.fixed.z-40.inset-0(:class="`${active ? 'pointer-events-auto' : 'pointer-events-none'}`")
  transition(name="fade")
    .common-modal.fixed.inset-0.z-40.flex.justify-center.items-center(
      style="background-color: #00000050;"
      @click.self="close"
      v-if="active"
    )
      .container
        .so-grid
          .flex.flex-col.gap-y-6.z-50.relative.bg-white.rounded-lg.py-6.px-6(
            v-if="active"
            class="col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4"
          )

            .flex.flex-col.text-left
              .flex.justify-between
                h4.text-h4.text-gray-500 ตั้งรหัสผ่านใหม่
                i.ph-x.text-xl.text-gray-400.p-2.cursor-pointer(@click="close")

            //- CONTENT
            .flex.flex-col.items-center.gap-y-4
              img.w-40(src="/image/email.png")
              .flex.flex-col
                .text-sm.text-center.text-gray-500 รหัสยืนยันตัวตนจะถูกส่งไปที่ Email
                .text-sm.text-center.text-orange-900 {{ email || USER.email }}
                .text-sm.text-center.text-gray-500 กรุณายืนยัน
              .flex.gap-x-4.mx-auto.w-full(class="w-full md:w-1/2 lg:w-2/5")
                SoButton(block @click="confirm") ตกลง
</template>

<script lang="ts">
import { computed, defineComponent, ref, useStore } from '@nuxtjs/composition-api';

const Request = defineComponent({
  props: {
    title: {},
    detail: {},
    cancel: { type: Boolean, default: false },
  },
  setup(props, ctx) {
    const store = useStore();
    const USER = computed(() => store.getters.user);

    const active = ref(false);
    const email = ref('');

    const open = (_ctx: string) => {
      ctx.emit('open');
      if (_ctx) email.value = _ctx;
      active.value = true;
    };
    const close = () => {
      ctx.emit('close');
      active.value = false;
    };
    const confirm = () => {
      ctx.emit('confirm');
      active.value = false;
    };

    return {
      USER,
      email,

      active,

      open,
      close,
      confirm,
    };
  },
});

export default Request;
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
