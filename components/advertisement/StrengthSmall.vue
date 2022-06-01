<template lang="pug">
section.strength-small
  .grid-container-12
    .col-span-4.grid-container-4.flex.items-center
      img.p-3.w-20.h-20.col-span-1.object-contain(src="/ads/sopet/01-small.png")
      .col-span-3
        .flex.flex-col.gap-y-1
          .text-xs.font-bold.text-gray-900 คัดเลือกโดยสัตวแพทย์
          .text-xs.text-gray-600 สินค้าใน PetMall เป็นแบรนด์ที่ปลอดภัยต่อน้องๆและมีคุณภาพสูงคัดสรรโดยสัตวแพทย์
    .col-span-4.grid-container-4.flex.items-center.card-center
      img.p-3.w-20.h-20.col-span-1.object-contain(src="/ads/sopet/02-small.png")
      .col-span-3
        .flex.flex-col.gap-y-1
          .text-xs.font-bold.text-gray-900 คัดเลือกโดยสัตวแพทย์
          .text-xs.text-gray-600 สินค้าใน PetMall เป็นแบรนด์ที่ปลอดภัยต่อน้องๆและมีคุณภาพสูงคัดสรรโดยสัตวแพทย์
    .col-span-4.grid-container-4.flex.items-center
      img.p-3.w-20.h-20.col-span-1.object-contain(src="/ads/sopet/03-small.png")
      .col-span-3
        .flex.flex-col.gap-y-1
          .text-xs.font-bold.text-gray-900 คัดเลือกโดยสัตวแพทย์
          .text-xs.text-gray-600 สินค้าใน PetMall เป็นแบรนด์ที่ปลอดภัยต่อน้องๆและมีคุณภาพสูงคัดสรรโดยสัตวแพทย์
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const StrengthSmall = defineComponent({
  // setup() {},
});

export default StrengthSmall;
</script>

<style lang="scss" scoped>
.strength-small {
  .card-center {
    @apply relative;
    &::before {
      content: '';
      @apply absolute left-0 h-full w-px bg-gray-200;
    }
    &::after {
      content: '';
      @apply absolute right-0 h-full w-px bg-gray-200;
    }
  }}
</style>
