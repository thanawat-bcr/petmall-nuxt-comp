<template lang="pug">
section.so-pet.w-full.p-8.bg-gray-opacity-12
  .flex.gap-8(class="flex-col md:flex-row")
    .flex.flex-col.flex-1.items-center.gap-y-3
      img(src="/ads/sopet/01.png" class="h-32 w-32 lg:h-40 lg:w-40")
      .flex.flex-col.items-center.gap-y-1
        h5(class="lg:block hidden").text-gray-900.text-center คัดเลือกโดยสัตวแพทย์
        h6(class="block lg:hidden").text-gray-900.text-center คัดเลือกโดยสัตวแพทย์
        .text-sm.text-gray-600.text-center สินค้าใน PetMall เป็นแบรนด์ที่ปลอดภัยต่อน้องๆ และมีคุณภาพสูงคัดสรรโดยสัตวแพทย์
    .flex.flex-col.flex-1.items-center.gap-y-3.card-center
      img(src="/ads/sopet/02.png" class="h-32 w-32 lg:h-40 lg:w-40")
      .flex.flex-col.items-center.gap-y-1
        h5(class="lg:block hidden").text-gray-900.text-center ของแท้แน่นอน
        h6(class="block lg:hidden").text-gray-900.text-center ของแท้แน่นอน
        .text-sm.text-gray-600.text-center สินค้าในPetMallได้รับการรับรองว่าเป็นของแท้ 100%
    .flex.flex-col.flex-1.items-center.gap-y-3
      img(src="/ads/sopet/03.png" class="h-32 w-32 lg:h-40 lg:w-40")
      .flex.flex-col.items-center.gap-y-1
        h5(class="lg:block hidden").text-gray-900.text-center PetFund
        h6(class="block lg:hidden").text-gray-900.text-center PetFund
        .text-sm.text-gray-600.text-center
          | กำไรส่วนหนึ่งบริจาคช่วยเหลือค่ารักษาสัตว์เลี้ยง PetFund
          br
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
      @apply absolute -top-4 md:top-0 h-px w-full md:-left-4 md:h-full md:w-px bg-green-700;
    }
    &::after {
      content: '';
      @apply absolute -bottom-4 md:bottom-0 h-px w-full md:-right-4 md:h-full md:w-px bg-green-700;
    }
  }
}
</style>
