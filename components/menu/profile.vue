<template lang="pug">
aside.profile.bg-gray-100.w-full.h-full.flex.flex-col.gap-y-6.p-4
  .flex.gap-2(class="items-center md:flex-col md:items-start lg:flex-row lg:items-center")
    .w-14.h-14.rounded-full.bg-gray-200.flex.items-center.justify-center: i.ph-user.text-2xl.text-gray-400
    .flex.flex-col.gap-y-1
      .font-bold.text-gray-500 {{ USER.displayName || 'Anonymous' }}
  .flex.flex-col.gap-y-4
    NuxtLink(to="/profile")
      .flex.gap-x-2.items-center.cursor-pointer
        i.ph-gear.text-2xl.text-gray-500
        .font-semibold.text-gray-500(class="text-sm md:text-xs lg:text-sm") ตั้งค่าบัญชีของฉัน
    .flex.flex-col.gap-y-4
      .flex.items-center.justify-between(@click="$router.push('/profile')")
        .cursor-pointer.text-gray-500(class="text-sm md:text-xs lg:text-sm") ข้อมูลส่วนตัว
        i.ph-caret-right.text-lg.text-gray-500(class="block md:hidden")
      .flex.items-center.justify-between(@click="$router.push('/profile/address')")
        .cursor-pointer.text-gray-500(class="text-sm md:text-xs lg:text-sm") ที่อยู่
        i.ph-caret-right.text-lg.text-gray-500(class="block md:hidden")
      .flex.items-center.justify-between(@click="$router.push('/profile/password')")
        .cursor-pointer.text-gray-500(class="text-sm md:text-xs lg:text-sm") เปลี่ยนรหัสผ่าน
        i.ph-caret-right.text-lg.text-gray-500(class="block md:hidden")

  .flex.flex-col.gap-y-4 
    .flex.items-center.justify-between
      .flex.gap-x-2.items-center.cursor-pointer(@click="$router.push('/favorite')")
        i.ph-heart.text-2xl.text-gray-500
        .font-semibold.text-gray-500(class="text-sm md:text-xs lg:text-sm") รายการที่ชอบ
      i.ph-caret-right.text-lg.text-gray-500(class="block md:hidden")
    .flex.items-center.justify-between
      .flex.gap-x-2.items-center.cursor-pointer(@click="$router.push('/purchase')")
        i.ph-notepad.text-2xl.text-gray-500
        .font-semibold.text-gray-500(class="text-sm md:text-xs lg:text-sm") การสั่งซื้อของฉัน
      i.ph-caret-right.text-lg.text-gray-500(class="block md:hidden")

</template>

<script lang="ts">
import { computed, defineComponent, useStore } from '@nuxtjs/composition-api';

const ProfileSidenav = defineComponent({
  setup() {
    const store = useStore();

    const USER = computed(() => store.getters.user);

    return {
      USER,
    };
  },
});

export default ProfileSidenav;
</script>

<style lang="scss" scoped>
.profile {
  .nuxt-link {
  @apply text-gray-500;
    &.nuxt-link-active { @apply text-green-800; }
  }
}
</style>
