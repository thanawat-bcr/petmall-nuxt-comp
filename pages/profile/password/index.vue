<template lang="pug">
LayoutPrimary.password(color)
  SoModalPreset(ref="successModal" type="success" @close="closeModalHandler")
  SoModalPreset(ref="errorModal" type="error")
  SoModalForgetPasswordConfirm(ref="forgetPasswordConfirmModal")
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
          .flex.flex-col.gap-y-8(class="md:gap-y-10 lg:w-3/4")
            .flex.flex-col.gap-y-2.relative(class="md:flex-row md:items-center")
              .text-md.text-gray-500.font-semibold(class="md:w-48") รหัสผ่านปัจจุบัน:
              SoInput(
                v-model="password.old"
                placeholder="รหัสผ่านปัจจุบัน"
                type="password"
                rules="required"
                class="col-span-4 md:col-span-3 lg:col-span-4"
              )
              .absolute.button-text.text-sm.text-orange-800.text-right(@click="forgetPasswordHandler" class="-bottom-7 right-0") ลืมรหัสผ่าน?
            .flex.flex-col.gap-y-2(class="md:flex-row md:items-center")
              .text-md.text-gray-500.font-semibold(class="md:w-48") รหัสผ่านใหม่:
              SoInput(
                v-model="password.new"
                placeholder="รหัสผ่านใหม่"
                type="password"
                rules="required"
                class="col-span-4 md:col-span-3 lg:col-span-4"
              )
            .flex.flex-col.gap-y-2(class="md:flex-row md:items-center")
              .text-md.text-gray-500.font-semibold(class="md:w-48") ยืนยันรหัสผ่าน:
              SoInput(
                v-model="password.confirm"
                placeholder="ยืนยันรหัสผ่าน"
                type="password"
                rules="required"
                class="col-span-4 md:col-span-3 lg:col-span-4"
              )
            .grid-container(class="grid-cols-4 md:grid-cols-6 lg:grid-cols-9")
              SoButton(type="submit" class="col-span-4 md:col-span-2 md:col-start-3") ตกลง
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, useRouter, useStore } from '@nuxtjs/composition-api';
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";

const password = defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const USER = computed(() => store.getters.user);

    // MODALS
    const successModal = ref('');
    const errorModal = ref('');
    const closeModalHandler = () => window.location.reload();

    const password = reactive({
      old: '',
      new: '',
      confirm: '',
    });

    // CHANGE PASSWORD
    const submit = () => {
      const auth = getAuth();

      if (password.new != password.confirm) {
        (errorModal.value as any).open('รหัสผ่านไม่ตรงกัน');
        return;
      };

      onAuthStateChanged(auth, (user: any) => {
        if (user) {
          const credential = EmailAuthProvider.credential(
            user.email,
            password.old
          );
          reauthenticateWithCredential(user, credential).then(() => {
            // User re-authenticated.
            updatePassword(user, password.new).then(() => {
              // Update successful.
              (successModal.value as any).open('คุณได้เปลี่ยนรหัสผ่านเรียบร้อยแล้ว');
            }).catch((error) => {
              // An error ocurred
              (errorModal.value as any).open(error.message);
            });
          }).catch((error) => {
            (errorModal.value as any).open(error.message);
          });
        } else {
            (errorModal.value as any).open('คุณยังไม่ได้เข้าสู่ระบบ');
        }
      })
    };

    // FORGET PASSWORD
    const forgetPasswordConfirmModal = ref('');
    const forgetPasswordHandler = () => {
      const auth = getAuth();
      sendPasswordResetEmail(auth, USER.value.email)
        .then(() => {
          // Password reset email sent!
            (forgetPasswordConfirmModal.value as any).open()
        })
        .catch((error) => {
          // An error occurred
          (errorModal.value as any).open(error.message);
        });
    }

    return {
      password,
      submit,

      successModal,
      errorModal,
      forgetPasswordConfirmModal,
      forgetPasswordHandler,
      closeModalHandler,
    };
  },
});

export default password;
</script>

<style lang="scss" scoped>
// .password {}
</style>
