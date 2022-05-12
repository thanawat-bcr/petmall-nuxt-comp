<template lang="pug">
.index.flex.flex-col.gap-y-8
  .flex.flex-col.gap-y-2
    h4.text-gray-500 ข้อมูลของฉัน
    .text-md.text-gray-500 จัดการข้อมูลส่วนตัวเพื่อความปลอดภัยของบัญชีของคุณ
  .line.w-full.h-px.bg-gray-200
  .flex.flex-col.gap-y-8
    .grid-profile-row
      .col-span-2.text-gray-500.text-md.text-right รูปโปรไฟล์:
      .col-span-7.flex.items-center.gap-x-4
        .w-14.h-14.rounded-full.bg-gray-200.flex.items-center.justify-center: i.ph-user.text-2xl.text-gray-400
        .flex.flex-col
          .button-lg.underline.text-orange-900.cursor-pointer เลือกภาพ
          .text-xs.text-gray-800 ขนาดรูป : ไม่เกิน 1 MB, รองรับ : .JPEG, .PNG
    .grid-profile-row
      .col-span-2.text-gray-500.text-md.text-right ชื่อผู้ใช้:
      .col-span-7.flex: SoInput(placeholder="Username" size="lg")
    .grid-profile-row
      .col-span-2.text-gray-500.text-md.text-right Email:
      .col-span-7.flex: .text-lg.text-gray-800.en username@mail.com
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const index = defineComponent({
  layout: 'primary',
  mounted() {
    this.$nuxt.$emit('setLayout', { color: true, profile: true, });
  },
  // setup() {},
});

export default index;
</script>

<style lang="scss" scoped>
.index {
  .grid-profile-row {
    @apply grid gap-x-4 items-center;
    grid-template-columns: repeat(9, 80px);
  }
}
</style>
