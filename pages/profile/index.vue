<template lang="pug">
LayoutPrimary.index(color)
  SoModalPreset(ref="successModal" type="success" @close="closeModalHandler")
  .flex.flex-col.gap-y-8

    .so-grid

      section(class="hidden md:block col-span-4 md:col-span-2 lg:col-span-3")
        MenuProfile

      section.flex.flex-col.gap-y-8(class="col-span-4 md:col-span-6 lg:col-span-9")
        .flex.flex-col.gap-y-2
          h4.text-gray-500(class="text-h5 lg:text-h4") ข้อมูลของฉัน
          .text-gray-500(class="text-sm lg:text-md") จัดการข้อมูลส่วนตัวเพื่อความปลอดภัยของบัญชีของคุณ
        .line.w-full.h-px.bg-gray-200
        SoForm(@submit="submit")
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
                  placeholder="Display Name"
                  v-model="user.displayName"
                  rules="max:10"
                  size="lg"
                )
            .items-center(class="grid-container md:grid-cols-6 lg:grid-cols-9")
              .text-gray-500(class="text-sm lg:text-md text-left md:text-right col-span-full md:col-span-1 lg:col-span-2") Email:
              .col-span-5.flex.pl-4: .text-md.text-gray-800.en {{ email }}
            .items-center(class="grid-container md:grid-cols-6 lg:grid-cols-9")
              .text-gray-500(class="text-sm lg:text-md text-left md:text-right col-span-full md:col-span-1 lg:col-span-2") เพศ:
              .col-span-5.pl-4.flex.items-center
                SoRadio.flex.gap-x-6(
                  :options="genderOptions"
                  v-model="user.gender"
                )
                SoInput.ml-2(
                  placeholder="อื่นๆ"
                  v-model="user.genderText"
                  :disabled="user.gender !== 'other'"
                )
            .items-center(class="grid-container md:grid-cols-6 lg:grid-cols-9")
              .text-gray-500(
                class="text-sm lg:text-md text-left md:text-right col-span-full md:col-span-1 lg:col-span-2"
              )
                span(class="block md:hidden lg:block") วัน/เดือน/ปี เกิด:
                span(class="hidden md:block lg:hidden") ว/ด/ป เกิด:
              .col-span-5.flex.gap-x-4.items-start
                SoInput(
                  type="select"
                  v-model="user.birthdate.date"
                  :options="birthOptions.date"
                  :rules="`${user.birthdate.date || user.birthdate.month || user.birthdate.year ? 'required' : ''}`"
                  placeholder="วัน"
                )
                SoInput(
                  type="select"
                  v-model="user.birthdate.month"
                  :options="birthOptions.month"
                  :rules="`${user.birthdate.date || user.birthdate.month || user.birthdate.year ? 'required' : ''}`"
                  placeholder="เดือน"
                )
                SoInput(
                  type="select"
                  v-model="user.birthdate.year"
                  :options="birthOptions.year"
                  :rules="`${user.birthdate.date || user.birthdate.month || user.birthdate.year ? 'required' : ''}`"
                  placeholder="ปี"
                )
            .items-center(class="grid-container md:grid-cols-6 lg:grid-cols-9")
              SoButton(type="submit" class="col-span-2 md:col-start-2 lg:col-start-3") ตกลง
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, useRouter, useStore, watch } from '@nuxtjs/composition-api';
import { getProfile, updateProfile } from '@/api/index';

const index = defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();

    // MODALS
    const successModal = ref('');
    const closeModalHandler = () => window.location.reload();

    onMounted(async () => {
      const _user = await getProfile();
      user.displayName = _user.displayName;
      if (_user.gender === 'male' || _user.gender === 'female') {
        user.gender = _user.gender;
        user.genderText = "";
      } else if(_user.gender === '') {
        user.gender = '';
        user.genderText = '';
      } else {
        user.gender = 'other';
        user.genderText = _user.gender;
      }
      user.imgUrl = _user.imgUrl;
      if (_user.birthdate !== '1000-01-01')
        user.birthdate = {
          date: `${Number(_user.birthdate.split('-')[2])}`,
          month: `${Number(_user.birthdate.split('-')[1])}`,
          year: `${Number(_user.birthdate.split('-')[0])}`,
        };
      email.value = _user.email;
    })

    // NOTE: DisplayName less than 10 character
    const user = reactive({
      displayName: '',
      gender: '',
      genderText: '',
      imgUrl: '',
      birthdate: {
        date: '',
        month: '',
        year: '',
      },
    });
    const email = ref('');

    const genderOptions = reactive([
      { value: 'male', name: 'ชาย' },
      { value: 'female', name: 'หญิง' },
      { value: 'other', name: 'no' },
    ]);


    const birthOptions = reactive({
      date: Array(31).fill(1).map((_, i) => { return { value: ++i } }),
      month: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'].map((month, i) => { return { value: ++i, name: month } }),
      year: Array(2022-1960).fill(1960).map((year, i) => { return { value: (year  + i++)} }), 
    });

    const submit = async () => {
      const formatNumber = (num: Number) => (num < 10 ? (num === 0 ? '01' : `0${num}`) : num);
      const userInput = {
        displayName: user.displayName,
        birthdate: `${user.birthdate.year || '1000'}-${formatNumber(Number(user.birthdate.month))}-${formatNumber(Number(user.birthdate.date))}`,
        gender: `${user.gender === 'other' ? user.genderText : user.gender}`,
        imgUrl: user.imgUrl
      }
      // console.log(userInput)
      try {
        await updateProfile(userInput);
        (successModal.value as any).open('ข้อมูลได้ถูกเปลี่ยนเรียบร้อยแล้ว');
      } catch(e) {
        console.error(e);
      }
    }

    return {
      user,
      email,

      genderOptions,
      birthOptions,

      successModal,
      closeModalHandler,

      submit,
    };

  },
});

export default index;
</script>

<style lang="scss" scoped>
// .index {}
</style>
