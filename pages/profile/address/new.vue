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
            h4.text-gray-500(class="text-h5 lg:text-h4") เพิ่มที่อยู่ใหม่
            .text-gray-500(class="text-sm lg:text-md") เพิ่มที่อยู่สินค้าเพื่อทำการจัดส่ง
        .line.w-full.h-px.bg-gray-200
        //- FORM
        SoForm(@submit="submit")
          .flex.flex-col.gap-y-4
            .text-md.text-gray-500.font-semibold ชื่อ-นามสกุล
            SoInput(
              v-model="address.name"
              placeholder="ชื่อ-นามสกุล"
              rules="required"
            )
            .text-md.text-gray-500.font-semibold หมายเลขโทรศัพท์
            SoInput(
              v-model="address.tel"
              placeholder="หมายเลขโทรศัพท์"
              rules="required"
            )
            .text-md.text-gray-500.font-semibold จังหวัด, เขต/อำเภอ, รหัสไปรษณีย์
            .flex.gap-x-2(class="flex-col md:flex-row")
              SoInput(
                type="select"
                v-model="address.province"
                :options="options"
                rules="required"
                placeholder="จังหวัด"
              )
              SoInput(
                type="select"
                v-model="address.district"
                :options="options"
                rules="required"
                placeholder="เขต/อำเภอ"
              )
              SoInput(
                v-model="address.postal"
                :options="options"
                rules="required"
                placeholder="รหัสไปรษณีย์"
              )
            .text-md.text-gray-500.font-semibold รายละเอียดที่อยู่
            SoInput(
              v-model="address.detail"
              placeholder="รายละเอียดที่อยู่"
            )
          .flex.gap-x-4.mt-6(class="w-full md:w-2/3 lg:w-1/2").ml-auto
            SoButton(block mode="soft" @click="$router.push('/profile/address')") ยกเลิก
            SoButton(block type="submit") ยืนยัน
</template>

<script lang="ts">
import { defineComponent, reactive, useRouter } from '@nuxtjs/composition-api';

const addressNew = defineComponent({
  setup() {
    const address = reactive({
      name: '',
      tel: '',
      province: '',
      district: '',
      postal: '',
      detail: '',
    });

    const options = reactive([
      { value: '0', name: 'A' },
      { value: '1', name: 'B' },
      { value: '2', name: 'C' },
    ]);

    const router = useRouter();
    const submit = () => {
      console.log(address);
      router.push('/profile/address');
    };

    return {
      address,
      submit,

      options,
    };
  },
});

export default addressNew;
</script>

<style lang="scss" scoped>
// .new {}
</style>
