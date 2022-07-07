<template lang="pug">
.flex.flex-col.px-6.py-4.rounded-lg.gap-y-2.bg-gray-100.border
  SoModalConfirm(ref="deleteModal" title="คุณต้องการที่จะลบที่อยู่นี้" @confirm="deleteModalHandler")
  SoModalConfirm(ref="updateModal" title="คุณต้องการที่จะตั้งที่อยู่นี้เป็นค่าเริ่มต้น" @confirm="updateModalHandler")
  SoModalPreset(ref="successModal" type="success" @close="closeModalHandler")
  .flex.justify-between
    .flex.flex-col.gap-y-2.w-full(class="md:w-80 lg:w-3/4")
      .flex.items-center.gap-x-3(class="flex-grow justify-between md:justify-start")
        .text-md.text-gray-500.font-bold.truncate {{ address.name }}
        SoTag.flex-shrink-0(v-if="address.default" :rounded="true") ค่าเริ่มต้น
      .text-md.text-gray-500 {{ address.phone }}
    .flex.flex-col.items-end.gap-y-2
      .items-center.gap-x-3(class="hidden md:flex")
        .text-md.text-gray-500.underline.cursor-pointer(
          @click.stop="addressUpdate"
        ) แก้ไข
        .text-md.text-gray-500.underline.cursor-pointer(
          @click.stop="addressDelete"
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
      @click.stop="addressUpdate"
    ) แก้ไข
    .text-md.text-gray-500.underline.cursor-pointer(
      @click.stop="addressDelete"
      v-if="!address.default"
    ) ลบ
</template>

<script lang="ts">
import { defineComponent, ref, useRouter } from '@nuxtjs/composition-api';
import { deleteAddress, updateAddress } from '@/api/index';

const AddressCard = defineComponent({
  props: {
    address: {},
  },
  setup(props: any) {
    const { id } = props.address;

    const router = useRouter();

    // MODALS
    const successModal = ref('');
    const closeModalHandler = () => window.location.reload();
    const updateModal = ref('');
    const updateModalHandler = async () => {
      try {
        const defaultAddress = {
          ...props.address,
          default: true,
        };
        await updateAddress(defaultAddress);
      (updateModal.value as any).close();
        (successModal.value as any).open('ตั้งที่อยู่นี้เป็นค่าเริ่มต้นเรียบร้อยแล้ว');
      } catch(e) {
        console.error(e);
      }
    };
    const deleteModal = ref('');
    const deleteModalHandler = async () => {
      try {
        await deleteAddress(id);
        (deleteModal.value as any).close();
        (successModal.value as any).open('ลบที่อยู่เรียบร้อยแล้ว');
      } catch(e) {
        console.error(e);
      }
    };

    const updateDefault = () => (updateModal.value as any).open();
    const addressDelete = () => (deleteModal.value as any).open();
    const addressUpdate = () => router.push(`/profile/address/edit/${id}`);

    return {
      deleteModal,
      deleteModalHandler,
      updateModal,
      updateModalHandler,
      successModal,
      closeModalHandler,

      updateDefault,
      addressUpdate,
      addressDelete,
    }
  },
});

export default AddressCard;
</script>

<style lang="scss" scoped>
// .address-card {}
</style>
