<template lang="pug">
.flex.flex-col.px-6.py-4.rounded-lg.gap-y-2.bg-gray-100.border
  .flex.justify-between
    .flex.flex-col.gap-y-2.w-full(class="md:w-80 lg:w-3/4")
      .flex.items-center.gap-x-3(class="flex-grow justify-between md:justify-start")
        .text-md.text-gray-500.font-bold.truncate {{ address.name }}
        SoTag.flex-shrink-0(v-if="address.default" :rounded="true") ค่าเริ่มต้น
      .text-md.text-gray-500 {{ address.phone }}
    .flex.flex-col.items-end.gap-y-2
      .items-center.gap-x-3(class="hidden md:flex")
        .text-md.text-gray-500.underline.cursor-pointer(
          @click.stop="editAddress"
        ) แก้ไข
        .text-md.text-gray-500.underline.cursor-pointer(
          @click.stop="deleteAddress"
          v-if="!address.default"
        ) ลบ
      span(class="hidden md:block").flex-shrink-0
        SoButton(
          size="sm"
          mode="outline"
          :disabled="address.default"
          @click="updateDefault"
        ) ตั้งเป็นค่าเริ่มต้น
  .text-md.text-gray-500(class="w-full lg:w-3/4") {{ address.address1 }} {{ address.address2 }} {{ address.district }} จังหวัด{{ address.province }} {{ address.postalCode }}
  .text-sm.text-gray-400(class="w-full lg:w-3/4") รายละเอียดอื่นๆ:  {{ address.note}} 
  .items-center.gap-x-4.mt-3(class="flex md:hidden")
    SoButton.mr-auto(
      size="sm"
      mode="outline"
      :disabled="address.default"
      @click="updateDefault"
    ) ตั้งเป็นค่าเริ่มต้น
    .text-md.text-gray-500.underline.cursor-pointer(
      @click.stop="editAddress"
    ) แก้ไข
    .text-md.text-gray-500.underline.cursor-pointer(
      @click.stop="deleteAddress"
      v-if="!address.default"
    ) ลบ
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const AddressCard = defineComponent({
  props: {
    address: {},
  },
  setup(props: any) {
    const { id } = props.address;

    const updateDefault = () => { console.log("updateDefault", id); }
    const editAddress = () => { console.log("editAddress", id); }
    const deleteAddress = () => { console.log("deleteAddress", id); }

    return {
      updateDefault,
      editAddress,
      deleteAddress,
    }
  },
});

export default AddressCard;
</script>

<style lang="scss" scoped>
// .address-card {}
</style>
