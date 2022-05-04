<template lang="pug">
header
  nav.main-nav.w-screen.flex.items-center.shadow-01
    .container.flex.flex-col.gap-y-4
      //- Top Nav
      .flex.gap-x-8.justify-end
        span.flex.items-center.gap-x-2.cursor-pointer.text-gray-500(:class="'hover:text-gray-600'")
          i.ph-bell.text-lg
          .text-xs การแจ้งเตือน
        span.flex.items-center.gap-x-2.cursor-pointer.text-gray-500(:class="'hover:text-gray-600'")
          i.ph-phone.text-lg
          .text-xs ติดต่อเรา
        span.flex.items-center.gap-x-2.cursor-pointer.text-gray-500(:class="'hover:text-gray-600'")
          i.ph-globe.text-lg
          .text-xs ไทย
        SoButton(size="sm") ลงชื่อเข้าใช้

      //- Main Nav
      .grid-container.items-center
        NuxtLink(to="/").col-span-2: img.cursor-pointer(src="/logo/logo-color.svg")
        .flex.flex-col.gap-y-3.col-span-9
          SoInput(
            v-model="search"
            leading="magnifying-glass"
            placeholder="อาหารสัตว์เลี้ยง, อุปกรณ์สำหรับสัตว์เลี้ยง หรือ อื่นๆ"
          )
          .flex.gap-x-6
            .text-xs.text-gray-400.cursor-pointer(:class="'hover:text-gray-600'" v-for="pet in pets" :key="pet") {{ pet }}
        .flex.flex-col.items-center.col-span-1.cursor-pointer.text-gray-500(:class="'hover:text-gray-600'")
          span.relative
            .text-xs.font-bold.absolute.text-white.bg-orange-900.px-2.rounded-lg.left-4(v-if="cartCount > 0") {{ cartCount }}
            i.ph-shopping-cart-simple.text-2xl
          .text-sm รถเข็น
        //- .flex.flex-col.items-center.col-span-1
          i.ph-ticket.text-2xl.text-gray-500
          .text-sm.text-gray-500 ส่วนลด

</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api';

const MainNav = defineComponent({
  setup() {
    const pets = reactive(['สุนัข','แมว','ปลาและสัตว์น้ำ','นก','เป็ด','ห่าน','กระต่าย','เม่น','ม้า','เต่า','หนู','กระรอก','หมู',]);

    const cartCount = ref(2);

    const search = ref('');

    return {
      pets,
      cartCount,
      search,
    };
  },
});

export default MainNav;
</script>

<style lang="scss" scoped>
.main-nav {
  height: 184px;
}
</style>
