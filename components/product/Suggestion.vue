<template lang="pug">
section.suggestion.flex.flex-col.gap-y-5
  ProductHeader สินค้าที่คุณอาจจะชอบ
  .grid-container
    ProductItem.col-span-2(
      v-for="item in items"
      :key="item.id"
      :item="item"
    )
  .grid-container
    .col-span-5
    .col-span-2: SoButton(block size="lg" mode="soft") ดูเพิ่มเติม
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const Suggestion = defineComponent({
  setup() {
    const items = reactive([
      { id: 1, name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', amount: 10, price: 600, img: '/product/item/01.png' },
      { id: 2, name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', amount: 12, price: 300, img: '/product/item/02.png' },
      { id: 3, name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', amount: 10, price: 200, img: '/product/item/01.png' },
      { id: 4, name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', amount: 15, price: 1200, img: '/product/item/03.png' },
      { id: 5, name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', amount: 10, price: 600, img: '/product/item/01.png' },
      { id: 6, name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', amount: 12, price: 300, img: '/product/item/02.png' },
      { id: 7, name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', amount: 10, price: 200, img: '/product/item/01.png' },
      { id: 8, name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', amount: 15, price: 1200, img: '/product/item/03.png' },
    ])

    return {
      items,
    };
  },
});

export default Suggestion;
</script>

<style lang="scss" scoped>
// .suggestion {}
</style>
