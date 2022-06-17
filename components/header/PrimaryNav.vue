<template lang="pug">
header.fixed.top-0.left-0.right-0.z-50

  nav.primary-nav.flex.items-center.shadow-01(:class="navbarColor.bg" class="h-12 md:h-32 lg:h-44")
    .container.flex.flex-col(class="gap-y-2 lg:gap-y-4")

      //- Top Nav
      .flex.justify-end(:class="navbarColor.text" class="gap-x-4 lg:gap-x-6")
        span.flex.items-center.gap-x-2.cursor-pointer
          i.ph-bell.text-lg
          .text-xs การแจ้งเตือน
        span.flex.items-center.gap-x-2.cursor-pointer
          i.ph-phone.text-lg
          .text-xs ติดต่อเรา
        span.flex.items-center.gap-x-2.cursor-pointer
          i.ph-globe.text-lg
          .text-xs ไทย

        NuxtLink(to="/register" v-if="!auth"): SoButton(size="sm" @click="$emit('click')") ลงชื่อเข้าใช้
        span.flex.items-center.gap-x-2.cursor-pointer(v-else)
          i.ph-user-circle.text-2xl
          .text-xs Tutorism

      //- Main Nav
      .so-grid.items-center
        NuxtLink(to="/" class="col-span-1 lg:col-span-2"): img.cursor-pointer(:src="navbarColor.logo")

        .flex.flex-col.gap-y-2(class="col-span-6 lg:col-span-9")
          SoInput(
            v-model="search"
            leading="magnifying-glass"
            placeholder="อาหารสัตว์เลี้ยง, อุปกรณ์สำหรับสัตว์เลี้ยง หรือ อื่นๆ"
            size="md"
          )
          .flex(:class="navbarColor.subtext" class="gap-x-4 lg:gap-x-6")
            .text-xs.cursor-pointer(v-for="pet in pets" :key="pet") {{ pet }}

        NuxtLink(to="/cart" :class="navbarColor.text").flex.flex-col.items-center.col-span-1.cursor-pointer
          span.relative
            .text-xs.font-bold.absolute.text-white.bg-orange-900.px-2.rounded-lg.left-4(v-if="cartCount > 0") {{ cartCount }}
            i.ph-shopping-cart-simple.text-2xl
          .text-xs รถเข็น
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from '@nuxtjs/composition-api';

const PrimaryNav = defineComponent({
  props: {
    auth: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: null,
    },
    color: {
      type: Boolean,
      default: !false,
    },
  },
  setup(props) {
    const pets = reactive(['สุนัข','แมว','ปลาและสัตว์น้ำ','นก','เป็ด','ห่าน','กระต่าย','เม่น','ม้า','เต่า','หนู','กระรอก','หมู',]);

    const cartCount = ref(2);

    const search = ref('');


    const navbarColor = computed(() => {
      const white = {
        subtext: 'text-gray-400',
        text: 'text-gray-500',
        bg: 'bg-white',
        logo: '/logo/logo-color.svg',
      }
      const green = {
        subtext: 'text-white',
        text: 'text-white',
        bg: 'bg-green-900',
        logo: '/logo/logo-white.svg',
      }

      if (props.color) return green;
      return white;
    });

    return {
      pets,
      cartCount,
      search,

      navbarColor,
    };
  },
});

export default PrimaryNav;
</script>

<style lang="scss" scoped>
.primary-nav {

}
</style>
