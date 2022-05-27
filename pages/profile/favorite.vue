<template lang="pug">
.favorite.flex.flex-col.gap-y-8
  .flex.flex-col.gap-y-2
    h4.text-gray-500 รายการที่ชอบ
    .text-md.text-gray-500 รายการสินค้าที่คุณชอบ หรือต้องการจะแบ่งปันกับคนอื่นๆ
  .line.w-full.h-px.bg-gray-200

  //- EMPTY STATE
  //- .grid-container-9
    .col-span-3
    .col-span-3.flex.flex-col.items-center.gap-y-4
      img(src="/empty/favorite.png")
      .flex.flex-col.gap-y-2.justify-center.text-center
        h6.text-gray-500 คุณยังไม่มีรายการที่ชอบ
        .text-sm.text-gray-500 กดปุ่มหัวใจเพื่อเพิ่มรายการสินค้าที่คุณชอบ
      SoButton(block size="md") ช้อปเลย

  .grid-container-9
    ProductItem.col-span-2(v-for="item in items" :key="item.id" :item="item")
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const favorite = defineComponent({
  layout: 'primary',
  mounted() {
    this.$nuxt.$emit('setLayout', { color: true, profile: true, });
  },
  setup() {
    const items  = reactive([
      { id: 1, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/01.png", price:"300", amount:"10", discount:"70", tag: true},
      { id: 2, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/09.png", price:"300", amount:"10", discount:"70" },
      { id: 3, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/10.png", price:"300", amount:"10", discount:"70", rank: 1},
      { id: 4, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/01.png", price:"300", amount:"10", tag: true},
      { id: 5, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/09.png", price:"300", amount:"10"},
      { id: 6, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/10.png", price:"300", amount:"10", discount:"70"},
      { id: 7, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/01.png", price:"300", amount:"10", discount:"70", tag: true},
      { id: 8, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/09.png", price:"300", amount:"10"},
    ]);

    return {
      items,
    };
  },
});

export default favorite;
</script>

<style lang="scss" scoped>
// .favorite {}
</style>
