<template lang="pug">
.so-modal-preset.relative.inset-0(:class="`${active ? 'pointer-events-auto' : 'pointer-events-none'}`")
  transition(name="fade")
    .common-modal.fixed.inset-0.z-40.flex.justify-center.items-center(
      style="background-color: #00000050;"
      @click.self="close"
      v-if="active"
    )
      .container
        .so-grid
          .flex.flex-col.items-center.z-50.relative.bg-white.rounded-lg.py-4.px-6(
            v-if="active"
            class="col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4"
          )
            lottie-player(
              :src="src"
              background="transparent"
              speed="1"
              style="width: 300px; height: 300px;"
              loop autoplay)

            .flex.flex-col.justify-center.text-center
              h4.text-h4.text-gray-500 {{ title }}
              .text-sm.text-gray-500 {{ detail }}
            SoButton(@click="close" class="w-full md:w-64 lg:w-72").mt-4 ยืนยัน

</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api';

const SoModal = defineComponent({
  setup(props, ctx) {
    const active = ref(false);
    const detail = ref('');

    const src = computed(() => props.type === 'success' ? 'https://assets2.lottiefiles.com/private_files/lf30_21qd1sgk.json' : 'https://assets3.lottiefiles.com/private_files/lf30_sh73zbx1.json')
    const title = computed(() => props.type === 'success' ? 'เสร็จสิ้น' : 'เกิดข้อผิดพลาด');

    const errors = [
      { en: 'Firebase: Password should be at least 6 characters (auth/weak-password).', th: 'รหัสผ่านต้องมีความยาวมากกว่า 6 ตัวอักษร' },
      { en: 'Firebase: Error (auth/email-already-in-use).', th: 'Email นี้ถูกใช้ไปแล้ว กรุณาลองใหม่' },
      { en: 'Firebase: Error (auth/wrong-password).', th: 'รหัสผ่านปัจจุบันไม่ถูกต้อง' },
    ]
    const open = (_ctx: string) => {
      ctx.emit('open');
      detail.value = (errors.find(err => err.en === _ctx) as any)?.th ||  _ctx;
      active.value = true;
    };
    const close = () => {
      ctx.emit('close');
      active.value = false;
    };

    return {
      active,
      title,
      src,
      detail,

      open,
      close,
    };
  },
  props: {
    type: { type: String, required: true },
  },
});

export default SoModal;
</script>

<style lang="scss" scoped>
.so-modal-preset {
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>
