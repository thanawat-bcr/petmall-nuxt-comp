<template lang="pug">
.checkout

  .flex.p-2.gap-x-4
    img.w-20.h-20.object-contain(:src="item.img")
    .flex.flex-col.flex-1.gap-y-1

      //- NAMES
      .text-sm.text-gray-500.truncate {{ item.name }}

      //- OPTIONS + AMOUNT
      .flex.justify-between.items-center
        .text-xs.text-gray-400 ตัวเลือกสินค้า: {{ item.option }}
        .text-xs.text-gray-400 x {{ item.amount }}

      //- TOTAL PRICE
      .text-md.font-bold.text-orange-900 ฿{{ item.price*item.amount }}
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const Checkout = defineComponent({
  props: {
    item: {},
  },
  // setup() {},
});

export default Checkout;
</script>

<style lang="scss" scoped>
// .checkout {}
</style>
