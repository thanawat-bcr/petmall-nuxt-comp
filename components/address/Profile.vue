<template lang="pug">
.flex.flex-col.px-6.py-4.rounded-lg.gap-y-2.bg-gray-100(@click="selectAddress")
  .flex.justify-between
    .flex.flex-col.gap-y-2
      .flex.items-center.gap-x-3
        .text-md.text-gray-500.font-bold {{ address.name }}
        SoTag(v-if="address.default" :rounded="true") ค่าเริ่มต้น
      .text-md.text-gray-500 {{ address.phone }}
    .flex.flex-col.items-end.gap-y-2
      .flex.items-center.gap-x-3
        .text-md.text-gray-500.underline.cursor-pointer(
          class="hidden md:block"
          @click.stop="editAddress"
        ) แก้ไข
        .text-md.text-gray-500.underline.cursor-pointer(
          @click.stop="deleteAddress"
        ) ลบ
      span(class="hidden md:block")
        SoButton(
          size="sm"
          mode="outline"
          :disabled="address.default"
          @click="updateDefault"
        ) ตั้งเป็นค่าเริ่มต้น
  .text-sm.text-gray-500.truncate(class="w-full md:w-3/4") {{ address.address }}
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
    const selectAddress = () => { console.log("selectAddress", id); }
    const editAddress = () => { console.log("editAddress", id); }
    const deleteAddress = () => { console.log("deleteAddress", id); }

    return {
      updateDefault,
      selectAddress,
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
