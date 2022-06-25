<template lang="pug">
LayoutPrimary.addresses(
  title="ที่อยู่" color profile
)
  .flex.flex-col.gap-y-8

    .so-grid

      section(class="hidden md:block col-span-4 md:col-span-2 lg:col-span-3")
        HeaderProfileSidenav

      section.flex.flex-col.gap-y-8(class="col-span-4 md:col-span-6 lg:col-span-9")
        //- HEADER
        .flex.justify-between
          .flex.flex-col.gap-y-1
            h4.text-gray-500(class="text-h5 lg:text-h4") ที่อยู่ของฉัน
            .text-gray-500(class="text-sm lg:text-md") เพิ่มที่อยู่สำหรับส่งสินค้าของคุณ
          SoButton(size="sm" leading="plus" @click="$router.push('/profile/address/new')") เพิ่มที่อยู่
        .line.w-full.h-px.bg-gray-200

        //- BODY
        section.flex.flex-col.gap-y-8(v-if="true")
          AddressProfile(
            v-for="address in addresses"
            :key="address.id"
            :address="address"
          )
        //- EMPTY STATE
        section.flex.flex-col.gap-y-4(v-else)
          .bg-gray-100.flex.items-center.justify-center.py-12.rounded-lg
            .text-md.text-gray-500 คุณยังไม่ได้เพิ่มที่อยู่ในการจัดส่ง

</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const addresses = defineComponent({
  setup() {
    const addresses = reactive([
      {
        id: 0,
        name: 'นางสาว สัตว์น้อย น่ารัก',
        phone: '(+66) 81 000 0000',
        address: 'อาคาร สัตว์เลี้ยง ซอย สัตว์น้อย 11 ถนน สัตว์เลื่อยคลาน แขวง สัตว์ปีก เขต ปทุมวัน กรุงเทพฯ 10330',
        default: false,
      },
      {
        id: 1,
        name: 'นางสาว สัตว์น้อย น่ารัก',
        phone: '(+66) 81 000 0000',
        address: 'อาคาร สัตว์เลี้ยง ซอย สัตว์น้อย 11 ถนน สัตว์เลื่อยคลาน แขวง สัตว์ปีก เขต ปทุมวัน กรุงเทพฯ 10330',
        default: true,
      },
      {
        id: 2,
        name: 'นางสาว สัตว์น้อย น่ารัก',
        phone: '(+66) 81 000 0000',
        address: 'อาคาร สัตว์เลี้ยง ซอย สัตว์น้อย 11 ถนน สัตว์เลื่อยคลาน แขวง สัตว์ปีก เขต ปทุมวัน กรุงเทพฯ 10330',
        default: false,
      },
    ]);

    return {
      addresses,
    }
  },
});

export default addresses;
</script>

<style lang="scss" scoped>
// .addresses {}
</style>
