<template lang="pug">
LayoutPrimary.password(
  title="เปลี่ยนรหัสผ่าน" color profile
)

  .flex.flex-col.gap-y-8

    .so-grid

      section(class="hidden md:block col-span-4 md:col-span-2 lg:col-span-3")
        HeaderProfileSidenav

      section.flex.flex-col.gap-y-8(class="col-span-4 md:col-span-6 lg:col-span-9")
        //- HEADER
        .flex.justify-between
          .flex.flex-col.gap-y-1
            h4.text-gray-500(class="text-h5 lg:text-h4") เปลี่ยนรหัสผ่าน
            .text-gray-500(class="text-sm lg:text-md") กรุณาอย่าเปิดเผยรหัสผ่านแก่คนอื่นๆ เพื่อความปลอดภัยของบัญชีผู้ใช้คุณเอง
        .line.w-full.h-px.bg-gray-200

        SoForm(@submit="submit")
          .flex.flex-col.gap-y-2
            .text-md.text-gray-500.font-semibold รหัสผ่านปัจจุบัน:
            .flex.gap-x-4
              SoInput(
                v-model="password.old"
                placeholder="รหัสผ่านปัจจุบัน"
                type="password"
                rules="required"
              )
            .text-md.text-gray-500.font-semibold รหัสผ่านใหม่:
            .flex.gap-x-4
              SoInput(
                v-model="password.new"
                placeholder="รหัสผ่านใหม่"
                type="password"
                rules="required"
              )
            .flex.flex-col.gap-y-1.ml-auto(class="w-full md:w-48")
              SoButton(type="submit").px-8 ตกลง
              .button-text.text-sm.text-orange-800.text-right ลืมรหัสผ่าน?
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";

const password = defineComponent({
  setup() {
    const password = reactive({
      old: 'tutor1234',
      new: 'tutor123456',
    });
    // CHANGE PASSWORD
    const submit = () => {
      const auth = getAuth();

      const user: any = auth.currentUser;
      const newPassword = password.new;

      // const credential = 'tutor1234';
      if (user) {
        const credential = EmailAuthProvider.credential(
            user.email,
            password.old
        )
          reauthenticateWithCredential(user, credential).then(() => {
            // User re-authenticated.
            console.log('re-authenticated')
            // updatePassword(user, newPassword).then(() => {
            //   // Update successful.
            //   console.log('password-updated')
            // }).catch((error) => {
            //   alert(error)
            //   // An error ocurred
            //   // ...
            // });
        }).catch((error) => {
          alert(error)
        });
      }

    };

    return {
      password,
      submit,
    };
  },
});

export default password;
</script>

<style lang="scss" scoped>
// .password {}
</style>
