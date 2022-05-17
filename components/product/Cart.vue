<template lang="pug">
.cart.grid-container.py-4
  .col-span-4.flex.items-center
    SoCheckbox(v-model="item.selected")
    .flex.gap-x-4
      img.w-20.h-20.object-contain(:src="item.img")
      .flex.flex-col.gap-y-1
        .text-sm.text-gray-500 {{ item.name }}
        SoTag
  .col-span-1.flex.flex-col.gap-y-1
    .flex.items-center.justify-between.cursor-pointer
      .text-xs.text-gray-500 ตัวเลือกสินค้า
      i.ph-caret-down.text-xs.text-gray-500
    .text-xs.text-gray-500 {{ item.option }}
  .col-span-2.justify-end
    .text-md.text-black.text-right ฿{{ item.price }}
  .col-span-2.justify-end.flex
    .h-6.w-6.border.border-gray-200.flex.items-center.justify-center.cursor-pointer(@click="$emit('amountDecrease', item.id)")
      i.ph-minus.text-xs.text-gray-500
    .h-6.w-8.border.border-gray-200.flex.items-center.justify-center
      .text-sm.text-gray-500 {{ item.amount }}
    .h-6.w-6.border.border-gray-200.flex.items-center.justify-center.cursor-pointer(@click="$emit('amountIncrease', item.id)")
      i.ph-plus.text-xs.text-gray-500
  .col-span-2.flex.justify-end
    .text-md.font-bold.text-orange-900.text-right ฿{{ item.price*item.amount }}
  .col-span-1.flex.justify-center
    .button-lg.text-gray-400.underline ลบ
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const Cart = defineComponent({
  props: {
    item: {},
  },
  // setup() {},
});

export default Cart;
</script>

<style lang="scss" scoped>
// .cart {}
</style>
