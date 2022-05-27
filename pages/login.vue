<template lang="pug">
.login
  .login-bg.pt-20(style="background-image: url('/registration/bg.png');")
    .container
      .grid-container-12
        .col-span-3
        .col-span-6.flex.flex-col.bg-white.rounded-lg.px-24.py-8
          h4.text-gray-500 เข้าสู่ระบบ
          .text-sm.text-gray-500 เข้าสู่ระบบของคุณเลยตอนนี้
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
              .form--row.justify-end.mt-2: .text-sm.text-gray-500.cursor-pointer(class="hover:underline") ลืมรหัสผ่าน?
          .flex.items-center.my-4
            .line.flex-1.h-px.bg-gray-200
            .text-sm.text-gray-400.px-4 หรือ
            .line.flex-1.h-px.bg-gray-200
          .flex
            SoButton(mode="outline" block size="lg" leading="google") Google
          .flex.mt-4.items-center.justify-center
            .text-sm.text-gray-400 เพิ่งเคยเข้ามาใน Petmall ใช่หรือไม่  
            NuxtLink(to="/register"): .text-sm.text-orange-900.ml-2.cursor-pointer(class="hover:underline") ลงชื่อเข้าใช้ 

        .col-span-3
  
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const login = defineComponent({
  layout: 'secondary',
  mounted() {
    this.$nuxt.$emit('setLayout', {
      title: 'เข้าสู่ระบบ',
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

export default login;
</script>

<style lang="scss" scoped>
.login {
  &-bg {
    height: 1000px;
    @apply bg-contain bg-bottom;
  }
}
</style>
