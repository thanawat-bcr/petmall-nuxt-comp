<template lang="pug">
.index.flex.flex-col.gap-y-8
  .flex.flex-col.gap-y-2
    h4.text-gray-500 ข้อมูลของฉัน
    .text-md.text-gray-500 จัดการข้อมูลส่วนตัวเพื่อความปลอดภัยของบัญชีของคุณ
  .line.w-full.h-px.bg-gray-200
  SoForm
    .flex.flex-col.gap-y-8
      .grid-profile-row
        .col-span-2.text-gray-500.text-md.text-right รูปโปรไฟล์:
        .col-span-7.flex.items-center.gap-x-4
          .w-14.h-14.rounded-full.bg-gray-200.flex.items-center.justify-center: i.ph-user.text-2xl.text-gray-400
          .flex.flex-col
            .button-lg.underline.text-orange-900.cursor-pointer เลือกภาพ
            .text-xs.text-gray-800 ขนาดรูป : ไม่เกิน 1 MB, รองรับ : .JPEG, .PNG
      .grid-profile-row
        .col-span-2.text-gray-500.text-md.text-right ชื่อผู้ใช้:
        .col-span-7.flex
          SoInput(
            placeholder="Username"
            v-model="user.username"
            size="lg"
            rules="required"
          )
      .grid-profile-row
        .col-span-2.text-gray-500.text-md.text-right Email:
        .col-span-7.flex: .text-md.text-gray-800.en {{ user.email }}
      .grid-profile-row
        .col-span-2.text-gray-500.text-md.text-right เพศ:
        .col-span-7
          SoRadio.flex.gap-x-4(
            :options="genderOptions"
            v-model="user.gender"
            rules="required"
          )
      .grid-profile-row
        .col-span-2.text-gray-500.text-md.text-right วัน/เดือน/ปี เกิด:
        .col-span-7.flex.gap-x-4
          SoInput(
            type="select"
            v-model="user.birth.date"
            :options="birthOptions.date"
            placeholder="วัน"
            rules="required"
          )
          SoInput(
            type="select"
            v-model="user.birth.month"
            :options="birthOptions.month"
            placeholder="เดือน"
            rules="required"
          )
          SoInput(
            type="select"
            v-model="user.birth.year"
            :options="birthOptions.year"
            placeholder="ปี"
            rules="required"
          )
      .grid-profile-row
        .col-span-2
        .col-span-2: SoButton(type="submit" block size="lg") ตกลง

</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api';

const index = defineComponent({
  layout: 'primary',
  mounted() {
    this.$nuxt.$emit('setLayout', { color: true, profile: true, });
  },
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
.index {
  .grid-profile-row {
    @apply grid gap-x-4 items-center;
    grid-template-columns: repeat(9, 80px);
  }
}
</style>
