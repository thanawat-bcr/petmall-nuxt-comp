<template lang="pug">
.cart.grid-container.py-4
  .col-span-4.flex.items-center
    SoCheckbox
    .flex.gap-x-4
      img.w-20.h-20.object-contain(src="/product/item/01.png")
      .flex.flex-col.gap-y-1
        .text-sm.text-gray-500 {{ 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก' }}
        SoTag
  .col-span-1.flex.flex-col.gap-y-1
    .flex.items-center.justify-between.cursor-pointer
      .text-xs.text-gray-500 ตัวเลือกสินค้า
      i.ph-caret-down.text-xs.text-gray-500
    .text-xs.text-gray-500 {{ 'รสไก่' }}
  .col-span-2.justify-end
    .text-md.text-black.text-right ฿{{ '300' }}
  .col-span-2.justify-end.flex
    .h-6.w-6.border.border-gray-200.flex.items-center.justify-center.cursor-pointer
      i.ph-minus.text-xs.text-gray-500
    .h-6.w-8.border.border-gray-200.flex.items-center.justify-center
      .text-sm.text-gray-500 {{ '2' }}
    .h-6.w-6.border.border-gray-200.flex.items-center.justify-center.cursor-pointer
      i.ph-plus.text-xs.text-gray-500
  .col-span-2.flex.justify-end
    .text-md.font-bold.text-orange-900.text-right ฿{{ '600' }}
  .col-span-1.flex.justify-center
    .button-lg.text-gray-400.underline แก้ไข
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const Cart = defineComponent({
  // setup() {},
});

export default Cart;
</script>

<style lang="scss" scoped>
// .cart {}
</style>
