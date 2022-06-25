<template lang="pug">
LayoutPrimary.checkout(title="ทำการสั่งซื้อ" color profile)
  .flex.flex-col.gap-y-8

    //- ADDRESSES 
    section
      //- AUTH - ADDRESS HANDLER
      section.flex.flex-col.gap-y-4(v-if="true")
        .so-grid
          .flex.items-center.justify-between(class="col-span-full lg:col-span-8 lg:col-start-3")
            .flex.items-center.gap-x-3
              i.ph-map-pin.text-xl.text-green-800
              .text-md.text-gray-500 ที่อยู่ในการจัดส่ง
            .button-text.text-md.text-orange-900.underline(v-if="!showAddresses" @click="showAddresses = true") เปลี่ยน
            .button-text.text-md.text-orange-900.underline(v-else @click="$router.push('/profile/addresses')") จัดการที่อยู่
        .so-grid
          .flex.flex-col.items-center.justify-between.gap-y-4(class="col-span-full lg:col-span-8 lg:col-start-3" v-if="!showAddresses")
            AddressCheckout(:address="addresses.find(item => item.id === selectedAddress)")
          .flex.flex-col.items-center.justify-between.gap-y-4(class="col-span-full lg:col-span-8 lg:col-start-3" v-if="showAddresses")
            AddressCheckout(
              v-for="address in addresses"
              :key="address.id"
              :address="address"
              :selectedAddress="selectedAddress"
              @selectAddressHandler="(id) => selectedAddress = id"
            )
            .flex.gap-x-4(class="w-full md:w-1/3")
              SoButton(mode="main" block @click="showAddresses = false") ยืนยัน
      //- EMPTY -> Wait for New Address Form
      section.flex.flex-col.gap-y-4(v-else)
        .so-grid
          .flex.items-center.justify-between(class="col-span-full lg:col-span-8 lg:col-start-3")
            .flex.items-center.gap-x-3
              i.ph-map-pin.text-xl.text-green-800
              .text-md.text-gray-500 ที่อยู่ในการจัดส่ง
            .button-text.text-md.text-orange-900.underline(@click="$router.push('/profile/addresses')") เพิ่ม
        .so-grid
          .flex.items-center.justify-between(class="col-span-full lg:col-span-8 lg:col-start-3")
            .flex.items-center.justify-center.py-8.bg-gray-100.rounded.w-full
              .text-sm.text-gray-500 คุณยังไม่ได้เพิ่มที่อยู่ในการจัดส่ง

    //- ITEMS
    section
      .so-grid
        .flex.items-center.justify-between(class="col-span-full lg:col-span-8 lg:col-start-3")
          .flex.items-center.gap-x-3
            i.ph-notepad.text-xl.text-green-800
            .text-md.text-gray-500 รายการสินค้า
    
    section(v-if="true")
      .flex.flex-col.justify-center.gap-y-4
        .so-grid(v-for="checkout in checkouts" :key="checkout.shop.id")
          .flex.gap-x-4.items-center(class="col-span-full lg:col-span-8 lg:col-start-3")
            SoTag
            .text-sm.font-bold.text-gray-500 {{ checkout.shop.name }}
          .flex.flex-col.gap-y-2(class="col-span-full lg:col-span-8 lg:col-start-3")
            ProductCheckout(
              v-for="(item, index) in checkout.items"
              :key="item.id"
              :item="item"
              :class="{'border-b border-gray-200': index === checkout.items.length - 1}"
            )

    section.flex.flex-col.gap-y-4
      //- SHIPMENTS
      .so-grid
        .flex.gap-4(class="col-span-full lg:col-span-8 lg:col-start-3 flex-col md:flex-row md:justify-between")
          .flex.items-center.gap-x-2
            i.ph-truck.text-xl.text-green-800
            .text-sm.text-gray-500 รูปแบบการจัดส่ง:
            .text-sm.text-gray-700 ฿{{shipments.find(item => item.id === selectedShipment).price}}
          .flex.items-center.gap-2(class="flex-col md:flex-row")
            SoButton(
              class="w-full md:w-48"
              v-for="(item, index) in shipments"
              :key="item.id"
              :mode="item.id === selectedShipment ? 'soft:active' : 'soft'"
              @click="selectedShipment = item.id"
            ) {{ item.name }}

      //- PAYMENTS
      .so-grid
        .flex.gap-4(class="col-span-full lg:col-span-8 lg:col-start-3 flex-col md:flex-row md:justify-between")
          .flex.items-center.gap-x-2
            i.ph-wallet.text-xl.text-green-800
            .text-sm.text-gray-500 วิธีชำระเงิน
          .flex.items-center.gap-2(class="flex-col md:flex-row")
            SoButton(
              class="w-full md:w-48"
              v-for="(item, index) in payments"
              :key="item.id"
              :mode="item.id === selectedPayment ? 'soft:active' : 'soft'"
              @click="selectedPayment = item.id"
            ) {{ item.name }}

    section.flex.flex-col.gap-y-4
      .so-grid
        .flex.flex-col.gap-4.items-end(class="col-span-full lg:col-span-8 lg:col-start-3")
          .flex.items-center.justify-between(class="w-full md:w-56")
            .text-sm.text-gray-500 ยอดรวมสินค้า :
            .text-md.text-gray-500.text-right ฿{{ computedItems.price }}
          .flex.items-center.justify-between(class="w-full md:w-56")
            .text-sm.text-gray-500 รวมการจัดส่ง :
            .text-md.text-gray-500.text-right ฿{{ shipments.find(item => item.id === selectedShipment).price }}
          .flex.items-center.justify-between(class="w-full md:w-56")
            .text-sm.text-gray-500 การชำระเงินทั้งหมด :
            h6.text-h6.text-orange-900.text-right ฿{{ computedItems.price + shipments.find(item => item.id === selectedShipment).price }}
          .flex.items-center.justify-between(class="w-full md:w-56")
            SoButton(block @click="$router.push('/checkout/success')") สั่งสินค้า
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, Ref, ref } from '@nuxtjs/composition-api';

const checkout = defineComponent({
  setup() {
    const checkouts = reactive([
      {
        shop: { id: 1, name: 'Petmall A' },
        items: [
          { id: 1, name: 'อาหารสุนัข Woofs ขนาด 1g สำหรับพันธุ์เล็ก', option: 'รสไก่', amount: 2, price: 300, img: '/product/item/01.png', options: ['รสไก่','รสเนื้อวัว','รสหมู','รสหมาล่า'] },
          { id: 2, name: 'อาหารสุนัข Woofs ขนาด 2g สำหรับพันธุ์เล็ก', option: 'รสเนื้อวัว', amount: 1, price: 600, img: '/product/item/02.png', options: ['รสไก่','รสเนื้อวัว'] },
        ],
      },
      {
        shop: { id: 2, name: 'Petmall B' },
        items: [
          { id: 3, name: 'อาหารสุนัข Woofs ขนาด 3g สำหรับพันธุ์เล็ก', option: 'รสไก่', amount: 6, price: 300, img: '/product/item/01.png', options: ['รสไก่','รสเนื้อวัว','รสหมู','รสหมาล่า'] },
          { id: 4, name: 'อาหารสุนัข Woofs ขนาด 4g สำหรับพันธุ์เล็ก', option: 'รสเนื้อวัว', amount: 2, price: 600, img: '/product/item/02.png', options: ['รสไก่','รสเนื้อวัว'] },
        ],
      },
    ]);

    // ADDRESS
    const selectedAddress: any = ref(2);
    const addresses = reactive([
      {
        id: 0,
        name: 'นางสาว สัตว์น้อย น่ารัก',
        phone: '(+66) 81 000 0000',
        address: 'อาคาร 1 สัตว์เลี้ยง ซอย สัตว์น้อย 11 ถนน สัตว์เลื่อยคลาน แขวง สัตว์ปีก เขต ปทุมวัน กรุงเทพฯ 10330',
        default: false,
      },
      {
        id: 1,
        name: 'นางสาว สัตว์น้อย น่ารัก',
        phone: '(+66) 81 000 0000',
        address: 'อาคาร 2 สัตว์เลี้ยง ซอย สัตว์น้อย 11 ถนน สัตว์เลื่อยคลาน แขวง สัตว์ปีก เขต ปทุมวัน กรุงเทพฯ 10330',
        default: true,
      },
      {
        id: 2,
        name: 'นางสาว สัตว์น้อย น่ารัก',
        phone: '(+66) 81 000 0000',
        address: 'อาคาร 3 สัตว์เลี้ยง ซอย สัตว์น้อย 11 ถนน สัตว์เลื่อยคลาน แขวง สัตว์ปีก เขต ปทุมวัน กรุงเทพฯ 10330',
        default: false,
      },
    ]);
    const showAddresses = ref(false);

    const computedItems = computed(() => {
      let amount: any = 0;
      let price: any = 0;
      checkouts.forEach((checkout) => {
        amount += checkout.items.reduce((a, item) => a + (item.amount), 0);
        price += checkout.items.reduce((a, item) => a + (item.amount * item.price), 0);
      });
      return {
        amount, price
      }
    })

    // SHIPMENTS
    const selectedShipment = ref(1);
    const shipments = reactive([
      { id: 1, name: 'EMS - ภายในประเทศ', price: 60},
      { id: 2, name: 'Standard - ภายในประเทศ', price: 30},
    ]);

    // PAYMENTS
    const selectedPayment = ref(1);
    const payments = reactive([
      { id: 1, name: 'โอน/ชำระผ่านบัญชีธนาคาร' },
      { id: 2, name: 'โอน/ชำระผ่าน QR code' },
    ]);

    return {
      checkouts,

      selectedAddress,
      addresses,
      showAddresses,

      computedItems,

      shipments,
      selectedShipment,

      payments,
      selectedPayment,
    };
  },
});

export default checkout;
</script>

<style lang="scss" scoped>
// .checkout {}
</style>
