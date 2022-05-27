<template lang="pug">
.checkout.flex.flex-col.gap-y-8

  //- BREADCRUMB
  SoBreadcrumb(
    :breadcrumbs="breadcrumbs"
  )

  .flex.items-center.justify-between
    .flex.items-center.gap-x-3
      i.ph-map-pin.text-xl.text-green-800
      .text-md.text-gray-500 ที่อยู่ในการจัดส่ง
    .button-lg.text-orange-900.underline(@click="$router.push('/profile/addresses')") เพิ่ม
    //- .button-lg.text-orange-900.underline เปลี่ยน

  .flex.flex-col.gap-y-1.py-4.px-8.bg-gray-100.rounded
    .text-sm.text-gray-500 คุณยังไม่ได้เพิ่มที่อยู่ในการจัดส่ง
  //- .flex.flex-col.gap-y-1.py-4.px-8.bg-gray-100.rounded
    .text-sm.font-bold.text-gray-500 นางสาว สัตว์น้อย น่ารัก
    .text-sm.text-gray-500 (+66) 810000000
    .text-sm.text-gray-500 อาคาร สัตว์เลี้ยง ซอย สัตว์น้อย 11 ถนน สัตว์เลื่อยคลาน แขวง สัตว์ปีก เขต ปทุมวัน กรุงเทพฯ 10330

  .flex.items-center.justify-between
    .flex.items-center.gap-x-3
      i.ph-notepad.text-xl.text-green-800
      .text-md.text-gray-500 รายการสินค้า

  .flex.flex-col.gap-y-5
    .grid-container.bg-gray-opacity-12.py-2
      .col-span-9.pl-2
        h6.text-gray-500 สินค้า
      .col-span-1
        h6.text-gray-500.text-right ราคาต่อชิ้น
      .col-span-1
        h6.text-gray-500.text-right จำนวน
      .col-span-1.pr-2
        h6.text-gray-500.text-right ราคารวม
  .flex.flex-col
    ProductCheckout(
      v-for="item in items"
      :key="item.id"
      :item="item"
      :shops="shops"
    )
  .flex.flex-col.gap-y-6
    .w-full.h-px.bg-gray-200
    .grid-container.flex.items-center
      .col-span-2: .text-sm.text-gray-500 รูปแบบการจัดส่ง:    
      .col-span-9.flex.items-center.gap-x-4
        SoButton(
          v-for="(item, index) in shipments"
          :key="item.id"
          :mode="item.selected ? 'soft:active' : 'soft'"
          @click="shipmentHandler(index)"
          size="md"
        ) {{ item.name }}
      .col-span-1: .text-md.text-gray-700.text-right ฿{{computedShipmentPrice}}
    .w-full.h-px.bg-gray-200
    .grid-container
      .col-span-8
      .col-span-4
        .flex.items-center.justify-between
          .text-sm.text-gray-500 ยอดสั่งซื้อทั้งหมด ({{computedItemsAmount}} ชิ้น):
          .text-md.text-orange-900.font-bold.text-right ฿{{computedItemsPrice + computedShipmentPrice}}
    .w-full.h-px.bg-gray-200
  .flex.items-center.justify-between
    .flex.items-center.gap-x-3
      i.ph-wallet.text-xl.text-green-800
      .text-md.text-gray-500 วิธีชำระเงิน
  .flex.items-center.gap-x-4
    SoButton(
      v-for="(item, index) in payments"
      :key="item.id"
      :mode="item.selected ? 'soft:active' : 'soft'"
      @click="paymentHandler(index)"
      size="md"
    ) {{ item.name }}
  .grid-container
    .col-span-9
    .col-span-3
      .flex.flex-col.gap-y-4
        .flex.items-center.justify-between
          .text-sm.text-gray-500 ยอดรวมสินค้า :
          .text-md.text-gray-500.text-right ฿{{computedItemsPrice}}
        .flex.items-center.justify-between
          .text-sm.text-gray-500 รวมการจัดส่ง :
          .text-md.text-gray-500.text-right ฿{{computedShipmentPrice}}
        .flex.items-center.justify-between
          .text-sm.text-gray-500 การชำระเงินทั้งหมด :
          h5.text-orange-900.text-right ฿{{computedItemsPrice + computedShipmentPrice}}
        SoButton(block).mt-4 สั่งสินค้า
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from '@nuxtjs/composition-api';

const checkout = defineComponent({
  layout: 'secondary',
  mounted() {
    this.$nuxt.$emit('setLayout', {
      title: 'ทำการสั่งซื้อ',
      topNav: true,
      color: true,
    });
  },
  setup() {
    const breadcrumbs = reactive([
      { name: 'หน้าแรก', to: '/' },
      { name: 'การสั่งซื้อ', to: null },
    ]);

    const items = reactive([
      { id: 1, shop: { id: 1, name: 'PetMall A' }, name: 'อาหารสุนัข Woofs ขนาด 1g สำหรับพันธุ์เล็ก', option: 'รสไก่', amount: 2, price: 300, img: '/product/item/01.png' },
      { id: 2, shop: { id: 2, name: 'PetMall B' }, name: 'อาหารสุนัข Woofs ขนาด 2g สำหรับพันธุ์เล็ก', option: 'รสเนื้อวัว', amount: 2, price: 600, img: '/product/item/02.png' },
      { id: 3, shop: { id: 1, name: 'PetMall A' }, name: 'อาหารสุนัข Woofs ขนาด 3g สำหรับพันธุ์เล็ก', option: 'รสหมู', amount: 6, price: 200, img: '/product/item/03.png' },
      { id: 4, shop: { id: 2, name: 'PetMall B' }, name: 'อาหารสุนัข Woofs ขนาด 4g สำหรับพันธุ์เล็ก', option: 'รสตับ', amount: 1, price: 400, img: '/product/item/01.png' },
    ].sort((a, b) => a.shop.id - b.shop.id));

    const shops = computed(() => {
      const ids: any = [];
      const index: any = [];
      items.forEach((item, i) => {
        if (!ids.includes(item.shop.id)) {
          index.push(item.id);
          ids.push(item.shop.id);
        }
      })
      return index;
    });
    const computedItemsAmount = computed(() => (items.reduce((total, item) => total + (item.amount), 0)));
    const computedItemsPrice = computed(() => (items.reduce((total, item) => total + (item.price*item.amount), 0)));
    
    const shipments = reactive([
      { id: 1, name: 'EMS - ภายในประเทศ', price: 60, selected: true },
      { id: 2, name: 'Standard - ภายในประเทศ', price: 30, selected: false },
    ]);
    const shipmentHandler = (index: any) => {
      shipments.forEach(item => item.selected = false);
      shipments[index].selected = true;
    };
    const computedShipmentPrice = computed(() => (shipments.filter(item => item.selected)[0] as any).price);

    const payments = reactive([
      { id: 1, name: 'โอน/ชำระผ่านบัญชีธนาคาร', selected: true },
      { id: 2, name: 'โอน/ชำระผ่าน QR code', selected: false },
    ]);
    const paymentHandler = (index: any) => {
      payments.forEach(item => item.selected = false);
      payments[index].selected = true;
    };

    return {
      breadcrumbs,

      items,
      shops,
      computedItemsAmount,
      computedItemsPrice,

      shipments,
      computedShipmentPrice,
      shipmentHandler,

      payments,
      paymentHandler,
    };
  },
});

export default checkout;
</script>

<style lang="scss" scoped>
// .checkout {}
</style>
