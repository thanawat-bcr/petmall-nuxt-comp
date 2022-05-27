<template lang="pug">
.addresses.flex.flex-col.gap-y-8
  .flex.flex-col.gap-y-2
    .flex.justify-between
      h4.text-gray-500 ที่อยู่ของฉัน
      SoButton(size="sm" leading="plus") เพิ่มที่อยู่
    .text-md.text-gray-500 เพิ่มที่อยู่สำหรับส่งสินค้าของคุณ

  //- EMPTY STATE
  //- .flex.flex-col.items-center.justify-center
    .line.w-full.h-px.bg-gray-200
    .py-12: .text-md.text-gray-500 คุณยังไม่ได้เพิ่มที่อยู่ในการจัดส่ง

  .flex.flex-col.gap-y-8
    .line.w-full.h-px.bg-gray-200
    .grid-container-9
      .col-span-7.flex.flex-col.gap-y-8
        .grid-container-7.items-start
          .col-span-2.text-gray-500.text-md.text-right ชื่อ-นามสกุล
          .col-span-5.flex: .text-md.text-gray-800 นางสาว สัตว์น้อย น่ารัก
        .grid-container-7.items-start
          .col-span-2.text-gray-500.text-md.text-right เบอร์โทรศัพท์
          .col-span-5.flex: .text-md.text-gray-800 (+66)81 000 0000
        .grid-container-7.items-start
          .col-span-2.text-gray-500.text-md.text-right ที่อยู่
          .col-span-5.flex: .text-md.text-gray-800 อาคาร สัตว์เลี้ยง ซอย สัตว์น้อย 11 ถนน สัตว์เลื่อยคลาน แขวง สัตว์ปีก เขต ปทุมวัน กรุงเทพฯ 10330
      .col-span-2.flex.flex-col.gap-y-2
        .flex.gap-x-4.justify-end
          .button-lg.underline.text-gray-500.cursor-pointer แก้ไข
          //- .button-lg.underline.text-gray-500.cursor-pointer ลบ
        SoButton(block size="sm" mode="outline" disabled) ตั้งเป็นค่าเริ่มต้น

  .flex.flex-col.gap-y-8
    .line.w-full.h-px.bg-gray-200
    .grid-container-9
      .col-span-7.flex.flex-col.gap-y-8
        .grid-container-7.items-start
          .col-span-2.text-gray-500.text-md.text-right ชื่อ-นามสกุล
          .col-span-5.flex: .text-md.text-gray-800 นางสาว สัตว์น้อย น่ารัก
        .grid-container-7.items-start
          .col-span-2.text-gray-500.text-md.text-right เบอร์โทรศัพท์
          .col-span-5.flex: .text-md.text-gray-800 (+66)81 000 0000
        .grid-container-7.items-start
          .col-span-2.text-gray-500.text-md.text-right ที่อยู่
          .col-span-5.flex: .text-md.text-gray-800 อาคาร สัตว์เลี้ยง ซอย สัตว์น้อย 11 ถนน สัตว์เลื่อยคลาน แขวง สัตว์ปีก เขต ปทุมวัน กรุงเทพฯ 10330
      .col-span-2.flex.flex-col.gap-y-2
        .flex.gap-x-4.justify-end
          .button-lg.underline.text-gray-500.cursor-pointer แก้ไข
          .button-lg.underline.text-gray-500.cursor-pointer ลบ
        SoButton(block size="sm" mode="outline") ตั้งเป็นค่าเริ่มต้น

</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const addresses = defineComponent({
  layout: 'primary',
  mounted() {
    this.$nuxt.$emit('setLayout', { color: true, profile: true, });
  },
  // setup() {},
});

export default addresses;
</script>

<style lang="scss" scoped>
// .addresses {}
</style>
