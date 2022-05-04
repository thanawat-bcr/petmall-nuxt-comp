<template lang="pug">
header
  nav.main-nav.w-screen.flex.items-center.shadow-01
    .container.flex.flex-col.gap-y-4
      //- Top Nav
      .flex.gap-x-8.justify-end
        span.flex.items-center.gap-x-2
          i.ph-bell.text-lg.text-gray-500
          .text-xs.text-gray-500 การแจ้งเตือน
        span.flex.items-center.gap-x-2
          i.ph-phone.text-lg.text-gray-500
          .text-xs.text-gray-500 ติดต่อเรา
        span.flex.items-center.gap-x-2
          i.ph-globe.text-lg.text-gray-500
          .text-xs.text-gray-500 ไทย
        SoButton(size="sm") ลงชื่อเข้าใช้

      //- Main Nav
      .grid-container.items-center
        img(src="/logo/logo-color.svg")
        .flex.flex-col.gap-y-3
          SoInput(
            v-model="search"
            leading="magnifying-glass"
            placeholder="อาหารสัตว์เลี้ยง, อุปกรณ์สำหรับสัตว์เลี้ยง หรือ อื่นๆ"
          )
          .flex.gap-x-6
            .text-xs.text-gray-400(v-for="pet in pets" :key="pet") {{ pet }}
        .flex.flex-col.items-center
          i.ph-shopping-cart-simple.text-2xl.text-gray-500
          .text-sm.text-gray-500 รถเข็น
        .flex.flex-col.items-center
          i.ph-ticket.text-2xl.text-gray-500
          .text-sm.text-gray-500 ส่วนลด

</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api';

const MainNav = defineComponent({
  setup() {
    const pets = reactive(['สุนัข','แมว','ปลาและสัตว์น้ำ','นก','เป็ด','ห่าน','กระต่าย','เม่น','ม้า','เต่า','หนู','กระรอก','หมู',]);

    const search = ref('');

    return {
      pets,
      search,
    };
  },
});

export default MainNav;
</script>

<style lang="scss" scoped>
.main-nav {
  height: 184px;
  .grid-container {
    @apply grid;
    grid-template-columns: 176px 1fr 80px 80px;
    column-gap: 1rem;
  }
}
</style>
