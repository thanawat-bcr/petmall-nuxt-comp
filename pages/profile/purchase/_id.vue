<template lang="pug">
._id.flex.flex-col.gap-y-8

  .flex.items-center.justify-between
    .flex.gap-x-1.items-center.cursor-pointer(@click="$router.go(-1)")
      i.ph-caret-left.text-md.text-gray-400
      .button-sm.text-gray-500 กลับ
    .flex.gap-x-1.items-center
      .button-sm.text-gray-500 หมายเลขคำสั่งซื้อ {{ 'ORDER_NUMBER' }}
      .text-sm.text-green-900 {{ 'ORDER_STATUS' }}

  .grid.grid-cols-9.gap-x-4
    .col-span-1

    .col-span-2.tracking-status.flex.items-center
      .w-12.h-12.rounded-full.border.border-green-900.bg-white.flex.items-center.justify-center
        .w-10.h-10.rounded-full.bg-green-900.flex.items-center.justify-center
          i.ph-clipboard-text.text-xl.text-white

    .col-span-2.tracking-status.flex.items-center
      .w-12.h-12.rounded-full.border.border-green-900.bg-white.flex.items-center.justify-center
        .w-10.h-10.rounded-full.bg-green-900.flex.items-center.justify-center
          i.ph-truck.text-xl.text-white

    .col-span-2.tracking-status.flex.items-center
      .w-12.h-12.rounded-full.border.border-green-900.bg-white.flex.items-center.justify-center
        .w-10.h-10.rounded-full.bg-green-900.flex.items-center.justify-center
          i.ph-archive-box.text-xl.text-white

    .col-span-2.tracking-status.flex.items-center
      .w-12.h-12.rounded-full.border.border-green-900.bg-white.flex.items-center.justify-center
        .w-10.h-10.rounded-full.bg-green-900.flex.items-center.justify-center
          i.ph-star.text-xl.text-white

  .line.w-full.h-px.bg-gray-200

  .flex.items-start.justify-between
    h6.text-gray-500 การสั่งซื้อของฉัน
    .flex.flex-col.gap-y-1.items-end
      .button-sm.text-gray-500 รูปแบบการจัดส่ง : {{ 'ORDER_DELIVER' }}
      .flex.gap-x-1.cursor-pointer
        .button-sm.text-gray-400 คัดลอก {{ 'ORDER_TRACKING' }}
        i.ph-copy.text-gray-400.text-md

  .flex.flex-col.gap-y-4
    ProductBanner(
      v-for="item in items"
      :item="item"
      noStatus
    )

  .flex.flex-col.gap-y-4
    .grid.grid-cols-9.gap-x-4.items-center
      .col-span-6
      .col-span-2.text-sm.text-gray-500 ยอดรวมสินค้า :
      .col-span-1.text-md.text-gray-500 ฿1200

    .grid.grid-cols-9.gap-x-4.items-center
      .col-span-6
      .col-span-2.text-sm.text-gray-500 รวมการจัดส่ง :
      .col-span-1.text-md.text-gray-500 ฿60

    .grid.grid-cols-9.gap-x-4.items-center
      .col-span-6
      .col-span-2.text-sm.text-gray-500 การชำระเงินทั้งหมด :
      .col-span-1.text-md.text-gray-500 ฿1260

    .grid.grid-cols-9.gap-x-4.items-center
      .col-span-6
      .col-span-2.text-sm.text-gray-500 ช่องทางการชำระเงิน :
      .col-span-1.text-md.text-gray-500 QR Code
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const _id = defineComponent({
  layout: 'primary',
  mounted() {
    this.$nuxt.$emit('setLayout', { color: true, profile: true, });
  },
  setup() {
    const items = reactive([
      { shopName: 'PetMall', name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', option: 'รสตับ', amount: 1, price: 600, img: '/product/item/01.png', status: 'ที่ต้องจัดส่ง', date: '15-05-2022' },
      { shopName: 'PetMall', name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', option: 'รสตับ', amount: 1, price: 600, img: '/product/item/01.png', status: 'ที่ต้องได้รับ', date: '15-05-2022' },
      { shopName: 'PetMall', name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', option: 'รสตับ', amount: 1, price: 600, img: '/product/item/01.png', status: 'ที่ต้องได้รับ', date: '15-05-2022' },
      { shopName: 'PetMall', name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', option: 'รสตับ', amount: 1, price: 600, img: '/product/item/01.png', status: 'สำเร็จแล้ว', date: '15-05-2022' },
    ]);

    return {
      items,
    };
  },
});

export default _id;
</script>

<style lang="scss" scoped>
._id {
  .tracking-status:not(:last-child) {
    @apply relative;
    &::after {
      content: '';
      @apply absolute bg-green-900;
      height: 3px;
      width: calc(80px + 80px + 32px - 48px);
      left: 48px;
    }
  }
}
</style>
