<template lang="pug">
LayoutPrimary(title="ลงชื่อเข้าใช้")
  .register.min-h-screen.relative(class="md:pt-8 lg:pt-12")
    .register-bg(class="hidden md:block" style="background-image: url('/registration/bg.png');")
    .container
      .so-grid
        .col-span-6.bg-white.rounded-lg(class="py-4 md:py-12 md:px-24 md:col-start-2 lg:col-start-4")
          .flex.flex-col
            h4.text-h4.text-gray-500 ลงชื่อเข้าใช้
            .text-sm.text-gray-500 สร้างบัญชี Petmall ของคุณเลยตอนนี้
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
                SoButton(block size="lg" type="submit") ถัดไป
            .flex.items-center.my-4
              .line.flex-1.h-px.bg-gray-200
              .text-sm.text-gray-400.px-4 หรือ
              .line.flex-1.h-px.bg-gray-200
            .flex
              SoButton(mode="outline" block size="lg" leading="google") Google
            .flex.mt-4.items-center.justify-center
              .text-sm.text-gray-400 หากคุณมีบัญชีผู้ใช้แล้ว คุณสามารถ 
              NuxtLink(to="/login"): .text-sm.text-orange-900.ml-2.cursor-pointer(class="hover:underline") เข้าสู่ระบบ 
</template>

<script lang="ts">
import { defineComponent, reactive, useRouter } from '@nuxtjs/composition-api';
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const register = defineComponent({
  setup() {
    const router = useRouter();
    const user = reactive({
      email: 'tutor34676@gmail.com',
      password: 'tutor1234',
    });
    // SIGNUP
    const submit = () => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then(async (userCredential) => {
          // Signed in 
          const user = userCredential.user;
          const token = await user.getIdToken();
          localStorage.setItem('token', token);
          router.push('/');

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode , errorMessage);
          alert(errorMessage)
        });
    };

    return {
      user,
      submit,
    };
  },
});

export default register;
</script>

<style lang="scss" scoped>
.register {
  &-bg {
    @apply absolute inset-0 bg-no-repeat bg-cover bg-bottom;
    z-index: -100;
  }
}
</style>
