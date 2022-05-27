<template lang="pug">
.checkout.mb-6
  .flex.gap-x-4.items-center.mb-6(v-if="shops.includes(item.id)")
    SoTag
    .text-sm.font-bold.text-gray-500 {{ item.shop.name }}
  .grid-container-12
    .col-span-1
      img.w-20.h-20.object-contain(:src="item.img")
    .col-span-6
      .text-sm.text-gray-500 {{ item.name }}
    .col-span-2
      .text-xs.text-gray-500 ตัวเลือกสินค้า:
      .text-xs.text-gray-500 รสตับ
    .col-span-1
      .text-md.text-gray-700.text-right ฿{{item.price}}
    .col-span-1
      .text-md.text-gray-700.text-right {{item.amount}}
    .col-span-1
      .text-md.text-gray-700.text-right.font-bold ฿{{item.price*item.amount}}
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const Checkout = defineComponent({
  props: {
    item: {},
    shops: {},
  },
  // setup() {},
});

export default Checkout;
</script>

<style lang="scss" scoped>
// .checkout {}
</style>
