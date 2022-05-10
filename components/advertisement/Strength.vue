<template lang="pug">
section.so-pet.container.py-12.bg-gray-opacity-12
  .grid-container
    .col-span-4.flex.flex-col.items-center.gap-y-3.px-6
      img.w-40.h-40(src="/ads/sopet/01.png")
      .flex.flex-col.items-center.gap-y-1
        h5.text-gray-900 คัดเลือกโดยสัตวแพทย์
        .text-sm.text-gray-600.text-center สินค้าใน PetMall เป็นแบรนด์ที่ปลอดภัยต่อน้องๆ และมีคุณภาพสูงคัดสรรโดยสัตวแพทย์
    .col-span-4.flex.flex-col.items-center.gap-y-3.px-6.card-center
      img.w-40.h-40(src="/ads/sopet/02.png")
      .flex.flex-col.items-center.gap-y-1
        h5.text-gray-900 คัดเลือกโดยสัตวแพทย์
        .text-sm.text-gray-600.text-center สินค้าในPetMallได้รับการรับรองว่าเป็นของแท้ 100%
    .col-span-4.flex.flex-col.items-center.gap-y-3.px-6
      img.w-40.h-40(src="/ads/sopet/03.png")
      .flex.flex-col.items-center.gap-y-1
        h5.text-gray-900 คัดเลือกโดยสัตวแพทย์
        .text-sm.text-gray-600.text-center
          | กำไรส่วนหนึ่งบริจาคช่วยเหลือค่ารักษาสัตว์เลี้ยง PetFund
          span.button-sm.text-orange-800.ml-2 ดูรายละเอียด
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const Strength = defineComponent({
  // setup() {},
});

export default Strength;
</script>

<style lang="scss" scoped>
.so-pet {
  .card-center {
    @apply relative;
    &::before {
      content: '';
      @apply absolute left-0 h-full w-px bg-green-700;
    }
    &::after {
      content: '';
      @apply absolute right-0 h-full w-px bg-green-700;
    }
  }
}
</style>
