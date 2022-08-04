<template lang="pug">
.small.so-grid.mx-auto
  .p-3.flex.gap-x-3(class="col-span-4")
    img.w-12.h-12.bg-green-900.rounded.flex-shrink-0.my-auto(src="/banner/01-small.png")
    .flex.flex-col
      .text-sm.text-gray-900.font-bold คัดเลือกโดยสัตวแพทย์
      .text-xs.text-gray-600 สินค้าใน PetMall เป็นแบรนด์ที่ปลอดภัยต่อน้องๆและมีคุณภาพสูงคัดสรรโดยสัตวแพทย์
  .p-3.flex.gap-x-3(class="col-span-4")
    img.w-12.h-12.bg-green-900.rounded.flex-shrink-0.my-auto(src="/banner/02-small.png")
    .flex.flex-col
      .text-sm.text-gray-900.font-bold ของแท้แน่นอน
      .text-xs.text-gray-600 สินค้าใน PetMall ได้รับการรับรองว่าเป็นของแท้ 100%
  .p-3.flex.gap-x-3(class="col-span-4 md:col-start-3 lg:col-start-9")
    img.w-12.h-12.bg-green-900.rounded.flex-shrink-0.my-auto(src="/banner/03-small.png")
    .flex.flex-col
      .text-sm.text-gray-900.font-bold PetFund
      .text-xs.text-gray-600 กำไรส่วนหนึ่งบริจาคช่วยเหลือค่ารักษาสัตว์เลี้ยง PetFund
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const Small = defineComponent({
  // setup() {},
});

export default Small;
</script>

<style lang="scss" scoped>
// .small {}
</style>
