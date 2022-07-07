<template lang="pug">
.so-modal-TEMPLATE.relative.inset-0(:class="`${active ? 'pointer-events-auto' : 'pointer-events-none'}`")
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

            .flex.flex-col.text-left
              .flex.justify-between
                h4.text-h4.text-gray-500 ตั้งรหัสผ่านใหม่
                i.ph-x.text-xl.text-gray-400.p-2.cursor-pointer(@click="close")

            //- CONTENT
            SoForm(@submit="submit")
              .flex.flex-col.gap-y-8
                .flex.flex-col.gap-y-4
                  .overline-lg.text-gray-500 อีเมล
                  SoInput(
                    v-model="email"
                    type="email"
                    rules="required|email"
                    leading="envelope-simple"
                    placeholder="username@mail.com"
                  )
                .flex.gap-x-4.mx-auto.w-full(class="w-full md:w-1/2 lg:w-2/5")
                  SoButton(block @click="confirm" type="submit") ยืนยัน
</template>

<script lang="ts">
import { sendPasswordResetEmail, getAuth } from '@firebase/auth';
import { defineComponent, ref } from '@nuxtjs/composition-api';

const Request = defineComponent({
  props: {
    title: {},
    detail: {},
    cancel: { type: Boolean, default: false },
  },
  setup(props, ctx) {
    const email = ref('');

    const submit = () => {
      active.value = false;
      const auth = getAuth();
      sendPasswordResetEmail(auth, email.value)
        .then(() => {
          ctx.emit('success', email.value);
          email.value = '';
        })
        .catch((error) => {
          ctx.emit('error', error.message);
          email.value = '';
        });
    };

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
      // active.value = false;
    };

    return {
      email,
      submit,

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
