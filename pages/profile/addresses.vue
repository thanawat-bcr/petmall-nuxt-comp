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
          .flex.flex-col.gap-y-2
            h4.text-gray-500(class="text-h5 lg:text-h4") ที่อยู่ของฉัน
            .text-gray-500(class="text-sm lg:text-md") เพิ่มที่อยู่สำหรับส่งสินค้าของคุณ
          SoButton(size="sm" leading="plus") เพิ่มที่อยู่
        .line.w-full.h-px.bg-gray-200

        //- EMPTY STATE
        section.flex.flex-col.gap-y-4(v-if="false")
          .bg-gray-100.flex.items-center.justify-center.py-12.rounded-lg
            .text-md.text-gray-500 คุณยังไม่ได้เพิ่มที่อยู่ในการจัดส่ง

        //- BODY
        section.flex.flex-col.gap-y-4(v-else)
          ProfileAddressCard(
            v-for="address in addresses"
            :key="address.id"
            :address="address"
            @updateDefault="updateDefault"
            @select="selectAddress"
            @edit="editAddress"
            @delete="deleteAddress"
          )

</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const addresses = defineComponent({
  setup() {
    const addresses = reactive([
      {
        id: 0,
        name: 'นางสาว สัตว์น้อย น่ารัก',
        phone: '(+66)81 000 0000',
        address: 'อาคาร สัตว์เลี้ยง ซอย สัตว์น้อย 11 ถนน สัตว์เลื่อยคลาน แขวง สัตว์ปีก เขต ปทุมวัน กรุงเทพฯ 10330',
        default: false,
      },
      {
        id: 1,
        name: 'นางสาว สัตว์น้อย น่ารัก',
        phone: '(+66)81 000 0000',
        address: 'อาคาร สัตว์เลี้ยง ซอย สัตว์น้อย 11 ถนน สัตว์เลื่อยคลาน แขวง สัตว์ปีก เขต ปทุมวัน กรุงเทพฯ 10330',
        default: true,
      },
      {
        id: 2,
        name: 'นางสาว สัตว์น้อย น่ารัก',
        phone: '(+66)81 000 0000',
        address: 'อาคาร สัตว์เลี้ยง ซอย สัตว์น้อย 11 ถนน สัตว์เลื่อยคลาน แขวง สัตว์ปีก เขต ปทุมวัน กรุงเทพฯ 10330',
        default: false,
      },
    ]);

    const updateDefault = (id: any) => {
      addresses.forEach((item) => {
        if(item.id === id) item.default = true;
        else item.default = false;
      });
    };

    const selectAddress = (id: any) => { console.log("selectAddress"); }
    const editAddress = (id: any) => { console.log("editAddress"); }
    const deleteAddress = (id: any) => { console.log("deleteAddress"); }

    return {
      addresses,

      updateDefault,
      selectAddress,
      editAddress,
      deleteAddress,
    }
  },
});

export default addresses;
</script>

<style lang="scss" scoped>
// .addresses {}
</style>
