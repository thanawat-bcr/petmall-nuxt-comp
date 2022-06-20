<template lang="pug">
LayoutPrimary(title="เข้าสู่ระบบ")
  .login.min-h-screen.relative(class="md:pt-8 lg:pt-12")
    .login-bg(class="hidden md:block" style="background-image: url('/registration/bg.png');")
    .container
      .so-grid
        .col-span-6.bg-white.rounded-lg(class="py-4 md:py-12 md:px-24 md:col-start-2 lg:col-start-4")
          .flex.flex-col
            h4.text-h4.text-gray-500 เข้าสู่ระบบ
            .text-sm.text-gray-500 เข้าสู่ระบบของคุณเลยตอนนี้
            SoForm.mt-6(@submit="submit")
              .flex.flex-col.gap-y-2
                .overline-lg.text-gray-500 อีเมล
                SoInput(
                  v-model="user.email"
                  type="email"
                  rules="required|email"
                  placeholder="username@mail.com"
                )
                .overline-lg.text-gray-500 รหัสผ่าน
                SoInput(
                  v-model="user.password"
                  type="password"
                  rules="required"
                  placeholder="******"
                )
                SoButton(block size="lg" type="submit") เข้าสู่ระบบ
                .text-sm.text-gray-500.text-right.cursor-pointer.mt-2(class="hover:underline") ลืมรหัสผ่าน?
            .flex.items-center.my-4
              .line.flex-1.h-px.bg-gray-200
              .text-sm.text-gray-400.px-4 หรือ
              .line.flex-1.h-px.bg-gray-200
            .flex
              SoButton(mode="outline" block size="lg" leading="google") Google
            .flex.mt-4.items-center.justify-center
              .text-sm.text-gray-400 เพิ่งเคยเข้ามาใน Petmall ใช่หรือไม่  
              NuxtLink(to="/register"): .text-sm.text-orange-900.ml-2.cursor-pointer(class="hover:underline") ลงชื่อเข้าใช้ 
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const login = defineComponent({
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
    @apply absolute inset-0 bg-no-repeat bg-cover bg-bottom;
    z-index: -100;
  }
}
</style>
