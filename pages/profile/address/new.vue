<template lang="pug">
LayoutPrimary.addresses(color)
  SoModalPreset(ref="successModal" type="success" @close="closeModalHandler")
  .flex.flex-col.gap-y-2.gap-y-8

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
          .flex.flex-col.gap-y-8
            .flex.flex-col.gap-y-2
              .text-md.text-gray-500.font-semibold ชื่อ-นามสกุล
              SoInput(
                v-model="address.name"
                placeholder="ชื่อ-นามสกุล"
                rules="required"
              )
            .flex.flex-col.gap-y-2
              .text-md.text-gray-500.font-semibold ที่อยู่
              SoInput(
                v-model="address.address1"
                placeholder="ที่อยู่"
                rules="required"
              )
            .flex.flex-col.gap-y-2
              .text-md.text-gray-500.font-semibold อพาร์ตเมนต์ ห้องชุด ฯลฯ
              SoInput(
                v-model="address.address2"
                placeholder="อพาร์ตเมนต์ ห้องชุด ฯลฯ"
              )
            .flex.flex-col.gap-y-2
              .text-md.text-gray-500.font-semibold จังหวัด, เขต/อำเภอ, รหัสไปรษณีย์
              .flex.gap-x-2.gap-y-6(class="flex-col md:flex-row")
                SoInput(
                  type="select"
                  v-model="address.province"
                  :options="provinces"
                  rules="required"
                  placeholder="จังหวัด"
                  @input="address.district = ''"
                  :disabled="provinces.length === 0"
                )
                SoInput(
                  type="select"
                  v-model="address.district"
                  :options="districts"
                  rules="required"
                  placeholder="เขต/อำเภอ"
                  @input="address.postalCode = ''"
                  :disabled="districts.length === 0 && address.province === ''"
                )
                SoInput(
                  v-model="address.postalCode"
                  rules="required"
                  placeholder="รหัสไปรษณีย์"
                  :disabled="address.district === ''"
                )
            .flex.flex-col.gap-y-2
              .text-md.text-gray-500.font-semibold หมายเลขโทรศัพท์
              SoInput(
                v-model="address.phone"
                placeholder="หมายเลขโทรศัพท์"
                rules="required"
              )
            .flex.flex-col.gap-y-2
              .text-md.text-gray-500.font-semibold รายละเอียดที่อยู่
              SoInput(
                v-model="address.note"
                placeholder="รายละเอียดที่อยู่"
              )
            .flex.justify-between.gap-y-2
              .text-md.text-gray-500.font-semibold เลือกเป็นที่อยู่ตั้งต้น
              SoToggle(v-model="address.default")
          .flex.gap-x-4.mt-6(class="w-full md:w-2/3 lg:w-1/2").ml-auto
            SoButton(block mode="soft" @click="$router.push('/profile/address')") ยกเลิก
            SoButton(block type="submit") ยืนยัน
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, useRouter, watch } from '@nuxtjs/composition-api';
import { getProvinces, getDistricts, createAddress } from '@/api/index';

const addressNew = defineComponent({
  setup() {
    const address = reactive({
      name: '',
      address1: '',
      address2: '',
      phone: '',
      province: '',
      district: '',
      postalCode: '',
      note: '',
      default: false,
    });

    const provinces = ref([]);
    const districts = ref([]);

    watch(() => address,async (cur, old) => {
      const _districts = await getDistricts(cur.province);
      districts.value = _districts.map((item: any) => ({ value: item.name_th}));
    }, { deep: true });

    onMounted(async () => {
      const _provinces = await getProvinces();
      provinces.value = _provinces.map((item: any) => ({ value: item.name_th}));
      if (address.province) {
        const _districts = await getDistricts(address.province);
        districts.value = _districts.map((item: any) => ({ value: item.name_th}));
      }
    })

    const router = useRouter();

    // MODALS
    const successModal = ref('');
    const closeModalHandler = () => router.push('/profile/address');

    const submit = async () => {
      // console.log(address);
      // router.push('/profile/address');
      try {
        await createAddress(address);
        (successModal.value as any).open('เพิ่มที่อยู่ใหม่เรียบร้อยแล้ว');
      } catch(e) {
        console.error(e);
      }
    };

    return {
      address,
      submit,

      provinces,
      districts,

      successModal,
      closeModalHandler,
    };
  },
});

export default addressNew;
</script>

<style lang="scss" scoped>
// .new {}
</style>
