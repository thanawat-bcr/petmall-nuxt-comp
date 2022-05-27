<template lang="pug">
.success.flex.flex-col.gap-y-12
  
  //- SUCCESS STATE
  .grid-container-12
    .col-span-4
    .col-span-4.flex.flex-col.items-center.gap-y-4
      img(src="/success/purchase.png")
      .flex.flex-col.gap-y-2.justify-center.text-center
        h6.text-gray-500 การสั่งซื้อสำเร็จ!
        .text-sm.text-gray-500 สามารถตรวจสอบข้อมูลเพิ่มเติมได้ที่หน้า การสั่งซื้อของฉัน
      .flex.items-center.gap-x-4
        SoButton(size="md" mode="outline" @click="$router.push('/')") ช้อปสินค้าเลย
        SoButton(size="md" @click="$router.push('/profile/purchase')") ไปหน้า การสั่งซื้อของฉัน
  ProductSuggestion
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const success = defineComponent({
  layout: 'secondary',
  mounted() {
    this.$nuxt.$emit('setLayout', {
      title: 'ทำการสั่งซื้อ',
      topNav: true,
      color: true,
    });
  },
  // setup() {},
});

export default success;
</script>

<style lang="scss" scoped>
// .success {}
</style>
