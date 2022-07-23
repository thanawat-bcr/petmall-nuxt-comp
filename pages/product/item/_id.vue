<template lang="pug">
LayoutPrimary.index(color)
  //- SoModalPreset(ref="successModal" type="success" @close="closeModalHandler")
  .flex.flex-col.gap-y-8

    h1.text-h1.text-green-800 {{ $route.params.id }}

    .so-grid

  //- .grid-container-12
    .col-span-4.flex.flex-col.gap-y-4
      .bg-gray-opacity-12.flex.items-center.justify-center.rounded(style="width: 23rem; height: 23rem;")
        img.h-64(src="/product/item/01.png")
      .grid-container-4
        .col-span-1.h-20.bg-gray-opacity-12.flex.items-center.justify-center.rounded.border.border-solid.border-orange-900
          img.h-16(src="/product/item/01.png")
        .col-span-1.h-20.bg-gray-opacity-12.flex.items-center.justify-center.rounded
          img.h-16(src="/product/item/01.png")
        .col-span-1.h-20.bg-gray-opacity-12.flex.items-center.justify-center.rounded
          img.h-16(src="/product/item/01.png")
        .col-span-1.h-20.bg-gray-opacity-12.flex.items-center.justify-center.rounded
          img.h-16(src="/product/item/01.png")
    .col-span-8.flex.flex-col.gap-y-9
      .flex.flex-col.gap-y-2
        h5.text-gray-500 {{ 'AMMONIA TEST KIT For fresh and sea water Detection range: 0.25-10.0 ppm. NH+4' }}
        .flex.items-center.justify-between
          .flex.items-center.gap-x-5
            .flex.gap-x-2
              .button-lg.underline.text-gray-500 {{ '5.0' }}
              .flex: i.ph-star-fill.text-warn-400.text-xl(v-for="i in 5" :key="i")
            .flex.gap-x-2
              .button-lg.underline.text-gray-500 {{ '24' }}
              .text-md.text-gray-500 ผู้รีวิว 
            .flex.gap-x-2
              .button-lg.underline.text-gray-500 {{ '123' }}
              .text-md.text-gray-500 ขายแล้ว
          .flex.items-center.gap-x-3  
            i.ph-heart.text-2xl.text-gray-400.cursor-pointer
            i.ph-share.text-2xl.text-gray-400.cursor-pointer
      .flex.px-4.gap-x-3.items-center
        .text-md.text-gray-400.line-through ฿{{ '299' }}
        h3.text-orange-900 ฿{{ '230' }}
      .flex.flex-col.gap-y-6
        .grid-container-8
          .col-span-2
            .flex.flex-col
              .text-sm.text-gray-500 การจัดส่ง
              .text-sm.text-gray-400 {{ 'EMS - ภายในประเทศ' }}
          .col-span-6
              .button-sm.text-gray-400 {{ '฿60 - ฿100' }}
        .grid-container-8
          .col-span-2
            .flex.flex-col
              .text-sm.text-gray-500 ตัวเลือกสินค้า
          .col-span-6
              .flex.gap-2.flex-wrap 
                SoButton(size="sm" mode="soft" v-for="i in 9" :key="i") สีเขียว
        .grid-container-8
          .col-span-2
            .flex.flex-col
              .text-sm.text-gray-500 จำนวน
          .col-span-6
            .flex.items-center.gap-x-2
              .flex
                .h-6.w-6.border.border-gray-200.flex.items-center.justify-center.cursor-pointer
                  i.ph-minus.text-xs.text-gray-500
                .h-6.w-8.border.border-gray-200.flex.items-center.justify-center
                  .text-sm.text-gray-500 {{ '2' }}
                .h-6.w-6.border.border-gray-200.flex.items-center.justify-center.cursor-pointer
                  i.ph-plus.text-xs.text-gray-500
              .text-xs.text-gray-400 มีสินค้าทั้งหมด {{ '150' }} ชิ้น
      .grid-container-8
        SoButton.col-span-2(mode="outline" size="lg" leading="shopping-cart-simple") เพิ่มไปยังรถเข็น
        SoButton.col-span-2(size="lg") ซื้อเลย

  //- AdvertisementStrengthSmall
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, useRoute } from '@nuxtjs/composition-api';

const _id = defineComponent({
  setup() {

    // const route = useRoute();

    return {
    };
  },
});

export default _id;
</script>

<style lang="scss" scoped>
// ._id {}
</style>
