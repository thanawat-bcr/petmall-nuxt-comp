<template lang="pug">
aside.profile-sidenav.bg-gray-100.w-full.h-full.p-6.flex.flex-col.gap-y-6
  .flex.items-center.gap-x-2
    .w-14.h-14.rounded-full.bg-gray-200.flex.items-center.justify-center: i.ph-user.text-2xl.text-gray-400
    .flex.flex-col.gap-y-1
      .text-sm.font-bold.text-gray-500.en Tutorism
      .flex.items-end.gap-x-1.cursor-pointer
        i.ph-pencil-simple.text-xl.text-gray-500
        .button-sm.text-gray-500 แก้ไขบัญชีของคุณ
  .flex.flex-col.gap-y-4
    NuxtLink(to="/profile")
      .flex.gap-x-2.items-center.cursor-pointer
        i.ph-gear.text-2xl.text-gray-500
        .button-sm.font-bold.text-gray-500 ตั้งค่าบัญชีของฉัน
    .flex.flex-col.gap-y-4
      NuxtLink(to="/profile").nuxt-link: .text-sm.cursor-pointer ข้อมูลส่วนตัว
      NuxtLink(to="/profile/addresses").nuxt-link: .text-sm.cursor-pointer ที่อยู่
      NuxtLink(to="/profile/password").nuxt-link: .text-sm.cursor-pointer เปลี่ยนรหัสผ่าน

  .flex.flex-col.gap-y-4 
    NuxtLink(to="/").nuxt-link
      .flex.gap-x-2.items-center.cursor-pointer
        i.ph-heart.text-2xl
        .button-sm.font-bold รายการที่ชอบ

  .flex.flex-col.gap-y-4
    NuxtLink(to="/").nuxt-link
      .flex.gap-x-2.items-center.cursor-pointer
        i.ph-notepad.text-2xl
        .button-sm.font-bold การสั่งซื้อของฉัน
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from '@nuxtjs/composition-api';

const ProfileSidenav = defineComponent({
  setup() {
    const menuIndex: Ref<Number> = ref(0);

    const menuIndexHandler = (index: Number) => { menuIndex.value = index; };

    return {
      menuIndex,
      menuIndexHandler,
    }
  },
});

export default ProfileSidenav;
</script>

<style lang="scss" scoped>
.profile-sidenav {
  .nuxt-link {
  @apply text-gray-500;
    &.nuxt-link-exact-active { @apply text-green-800; }
  }
}
</style>
