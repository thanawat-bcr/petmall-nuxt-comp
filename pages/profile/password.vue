<template lang="pug">
.password.flex.flex-col.gap-y-8
  .flex.flex-col.gap-y-2
    h4.text-gray-500 เปลี่ยนรหัสผ่าน
    .text-md.text-gray-500 กรุณาอย่าเปิดเผยรหัสผ่านแก่คนอื่นๆ เพื่อความปลอดภัยของบัญชีผู้ใช้คุณเอง
  .line.w-full.h-px.bg-gray-200
  SoForm
    .flex.flex-col.gap-y-8

      .grid.grid-cols-9.gap-4.items-center
        .col-span-2.text-gray-500.text-md.text-right รหัสผ่านปัจจุบัน:
        .col-span-4.flex
          SoInput(
            type="password"
            placeholder="********"
            v-model="password.old"
            size="lg"
            rules="required"
          )
        .col-span-2: .button-lg.underline.text-orange-900.cursor-pointer ลืมรหัสผ่าน

      .grid.grid-cols-9.gap-4.items-center
        .col-span-2.text-gray-500.text-md.text-right รหัสผ่านใหม่:
        .col-span-4.flex
          SoInput(
            type="password"
            placeholder="********"
            v-model="password.new"
            size="lg"
            rules="required"
          )

      .grid.grid-cols-9.gap-4.items-center
        .col-span-2.text-gray-500.text-md.text-right ยืนยันรหัสผ่าน:
        .col-span-4.flex
          SoInput(
            type="password"
            placeholder="********"
            v-model="password.confirm"
            size="lg"
            rules="required"
          )

      .grid.grid-cols-9.gap-4.items-center
        .col-span-2
        .col-span-2: SoButton(type="submit" block size="lg") ตกลง
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const password = defineComponent({
  layout: 'primary',
  mounted() {
    this.$nuxt.$emit('setLayout', { color: true, profile: true, });
  },
  setup() {
    const password = reactive({
      old: '',
      new: '',
      confirm: '',
    });

    return {
      password,
    };
  },
});

export default password;
</script>

<style lang="scss" scoped>
// .password {}
</style>
