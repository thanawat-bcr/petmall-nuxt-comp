<template lang="pug">
LayoutPrimary.index(
  title="ข้อมูลส่วนตัว" color profile
)
  .flex.flex-col.gap-y-8

    .so-grid

      section(class="hidden md:block col-span-4 md:col-span-2 lg:col-span-3")
        HeaderProfileSidenav

      section.flex.flex-col.gap-y-8(class="col-span-4 md:col-span-6 lg:col-span-9")
        .flex.flex-col.gap-y-2
          h4.text-gray-500(class="text-h5 lg:text-h4") ข้อมูลของฉัน
          .text-gray-500(class="text-sm lg:text-md") จัดการข้อมูลส่วนตัวเพื่อความปลอดภัยของบัญชีของคุณ
        .line.w-full.h-px.bg-gray-200
        SoForm
          .flex.flex-col(class="gap-y-4 md:gap-y-8")
            .items-center(class="grid-container md:grid-cols-6 lg:grid-cols-9")
              .text-gray-500(class="text-sm lg:text-md text-left md:text-right col-span-full md:col-span-1 lg:col-span-2") รูปโปรไฟล์:
              .col-span-5.flex.items-center.gap-x-4
                .w-14.h-14.rounded-full.bg-gray-200.flex.items-center.justify-center: i.ph-user.text-2xl.text-gray-400
                .flex.flex-col
                  .button-lg.underline.text-orange-900.cursor-pointer เลือกภาพ
                  .text-xs.text-gray-800 ขนาดรูป : ไม่เกิน 1 MB, รองรับ : .JPEG, .PNG
            .items-center(class="grid-container md:grid-cols-6 lg:grid-cols-9")
              .text-gray-500(class="text-sm lg:text-md text-left md:text-right col-span-full md:col-span-1 lg:col-span-2") ชื่อผู้ใช้:
              .col-span-5.flex
                SoInput(
                  placeholder="Username"
                  v-model="user.username"
                  size="lg"
                )
            .items-center(class="grid-container md:grid-cols-6 lg:grid-cols-9")
              .text-gray-500(class="text-sm lg:text-md text-left md:text-right col-span-full md:col-span-1 lg:col-span-2") Email:
              .col-span-5.flex: .text-md.text-gray-800.en {{ user.email }}
            .items-center(class="grid-container md:grid-cols-6 lg:grid-cols-9")
              .text-gray-500(class="text-sm lg:text-md text-left md:text-right col-span-full md:col-span-1 lg:col-span-2") เพศ:
              .col-span-5
                SoRadio.flex.gap-x-6(
                  :options="genderOptions"
                  v-model="user.gender"
                )
            .items-center(class="grid-container md:grid-cols-6 lg:grid-cols-9")
              .text-gray-500(class="text-sm lg:text-md text-left md:text-right col-span-full md:col-span-1 lg:col-span-2")
                span(class="block md:hidden lg:block") วัน/เดือน/ปี เกิด:
                span(class="hidden md:block lg:hidden") ว/ด/ป เกิด:
              .col-span-5.flex.gap-x-4
                SoInput(
                  type="select"
                  v-model="user.birth.date"
                  :options="birthOptions.date"
                  placeholder="วัน"
                )
                SoInput(
                  type="select"
                  v-model="user.birth.month"
                  :options="birthOptions.month"
                  placeholder="เดือน"
                )
                SoInput(
                  type="select"
                  v-model="user.birth.year"
                  :options="birthOptions.year"
                  placeholder="ปี"
                )
            .items-center(class="grid-container md:grid-cols-6 lg:grid-cols-9")
              SoButton(type="submit" class="col-span-2 md:col-start-2 lg:col-start-3") ตกลง
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api';

const index = defineComponent({
  setup() {
    const user = reactive({
      profileImage: null,
      username: '',
      email: 'thanawat.bcr@gmail.com',
      gender: '',
      birth: {
        date: '',
      }
    });

    const genderOptions = reactive([
      { value: 'M', name: 'ชาย' },
      { value: 'F', name: 'หญิง' },
      { value: 'O', name: 'อื่นๆ' },
    ]);


    const birthOptions = reactive({
      date: Array(31).fill(1).map((_, i) => { return { value: ++i } }),
      month: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'].map((month, i) => { return { value: i, name: month } }),
      year: Array(2022-1960).fill(1960).map((year, i) => { return { value: (year  + i++)} }), 
    });

    return {
      user,

      genderOptions,
      birthOptions,
    };

  },
});

export default index;
</script>

<style lang="scss" scoped>
// .index {}
</style>
