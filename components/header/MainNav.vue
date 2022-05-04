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
      .flex.gap-x-4.items-center
        img(src="/logo/logo-color.svg")
        .flex.flex-col.flex-1.gap-y-3
          SoInput(
            leading="magnifying-glass"
            placeholder="อาหารสัตว์เลี้ยง, อุปกรณ์สำหรับสัตว์เลี้ยง หรือ อื่นๆ"
          )
          .flex.gap-x-6
            .text-xs.text-gray-400(v-for="route in routes" :key="route") {{ route }}
        .flex.flex-col.items-center
          i.ph-shopping-cart-simple.text-2xl.text-gray-500
          .text-sm.text-gray-500 รถเข็น
        .flex.flex-col.items-center
          i.ph-ticket.text-2xl.text-gray-500
          .text-sm.text-gray-500 ส่วนลด

</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const MainNav = defineComponent({
  setup() {
    const routes = reactive(['สุนัข','แมว','ปลาและสัตว์น้ำ','นก','เป็ด','ห่าน','กระต่าย','เม่น','ม้า','เต่า','หนู','กระรอก','หมู',]);

    return {
      routes,
    };
  },
});

export default MainNav;
</script>

<style lang="scss">
.main-nav {
  height: 184px;
}
</style>
