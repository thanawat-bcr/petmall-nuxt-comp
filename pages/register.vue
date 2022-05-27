<template lang="pug">
.register
  .register-bg.pt-20(style="background-image: url('/registration/bg.png');")
    .container
      .grid-container-12
        .col-span-3
        .col-span-6.flex.flex-col.bg-white.rounded-lg.px-24.py-8
          h4.text-gray-500 ลงชื่อเข้าใช้
          .text-sm.text-gray-500 สร้างบัญชี Petmall ของคุณเลยตอนนี้
          SoForm.mt-6(@submit="submit")
            .form--group
              .form--row: .overline-lg.text-gray-500 อีเมล
              .form--row 
                SoInput(
                  v-model="user.email"
                  type="email"
                  rules="required|email"
                  placeholder="username@mail.com"
                )
              .form--row: .overline-lg.text-gray-500 รหัสผ่าน
              .form--row 
                SoInput(
                  v-model="user.password"
                  type="password"
                  rules="required"
                  placeholder="******"
                )
              .form--row: SoButton(block size="lg" type="submit") ถัดไป
          .flex.items-center.my-4
            .line.flex-1.h-px.bg-gray-200
            .text-sm.text-gray-400.px-4 หรือ
            .line.flex-1.h-px.bg-gray-200
          .flex
            SoButton(mode="outline" block size="lg" leading="google") Google
          .flex.mt-4.items-center.justify-center
            .text-sm.text-gray-400 หากคุณมีบัญชีผู้ใช้แล้ว คุณสามารถ 
            NuxtLink(to="/login"): .text-sm.text-orange-900.ml-2.cursor-pointer(class="hover:underline") เข้าสู่ระบบ 

        .col-span-3
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const register = defineComponent({
  layout: 'secondary',
  mounted() {
    this.$nuxt.$emit('setLayout', {
      title: 'ลงชื่อเข้าใช้',
      auth: true,
    });
  },
  setup() {
    const user = reactive({
      email: '',
      password: '',
    });

    const submit = () => {
      console.log(user);
    };

    return {
      user,
      submit,
    };
  },
});

export default register;
</script>

<style lang="scss">
.register {
  &-bg {
    height: 1000px;
    @apply bg-contain bg-bottom;
  }
}
</style>
