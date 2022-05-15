<template lang="pug">
.favorite.flex.flex-col.gap-y-8
  .flex.flex-col.gap-y-2
    h4.text-gray-500 รายการที่ชอบ
    .text-md.text-gray-500 รายการสินค้าที่คุณชอบ หรือต้องการจะแบ่งปันกับคนอื่นๆ
  .line.w-full.h-px.bg-gray-200

  //- EMPTY STATE
  //- .grid.grid-cols-9.gap-4
    .col-span-3
    .col-span-3.flex.flex-col.items-center.gap-y-4
      img(src="/empty/favorite.png")
      .flex.flex-col.gap-y-2.justify-center.text-center
        h6.text-gray-500 คุณยังไม่มีรายการที่ชอบ
        .text-sm.text-gray-500 กดปุ่มหัวใจเพื่อเพิ่มรายการสินค้าที่คุณชอบ
      SoButton(block size="md") ช้อปเลย
    .col-span-3

  .grid.grid-cols-9.gap-4
    ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/01.png" :price="300" :amount="10")
    ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/09.png" :price="300" :amount="10")
    ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/10.png" :price="300" :amount="10")
    ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/01.png" :price="300" :amount="10")
    ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/09.png" :price="300" :amount="10")
    ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/10.png" :price="300" :amount="10")
    ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/09.png" :price="300" :amount="10")
    ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/10.png" :price="300" :amount="10")
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const favorite = defineComponent({
  layout: 'primary',
  mounted() {
    this.$nuxt.$emit('setLayout', { color: true, profile: true, });
  },
  // setup() {},
});

export default favorite;
</script>

<style lang="scss" scoped>
// .favorite {}
</style>
