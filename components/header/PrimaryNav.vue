<template lang="pug">
header.fixed.top-0.left-0.right-0.z-50

  nav.primary-nav.items-center.shadow-01(:class="navbarColor.bg" class="hidden md:flex h-32 lg:h-44")

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

        NuxtLink(to="/register" v-if="!auth"): SoButton(size="xs" @click="$emit('click')") ลงชื่อเข้าใช้
        span.flex.items-center.gap-x-2.cursor-pointer(v-else)
          i.ph-user-circle.text-2xl
          .text-xs Tutorism

      //- Main Nav
      .so-grid.items-center
        NuxtLink(to="/" class="col-span-1 lg:col-span-2"): img.cursor-pointer(:src="navbarColor.logo")

        .flex.flex-col.gap-y-2(class="col-span-6 lg:col-span-9" v-if="!title")
          SoInput(
            class="hidden md:flex lg:hidden"
            v-model="search"
            leading="magnifying-glass"
            placeholder="อาหารสัตว์เลี้ยง, อุปกรณ์สำหรับสัตว์เลี้ยง หรือ อื่นๆ"
            size="sm"
          )
          SoInput(
            class="hidden lg:flex"
            v-model="search"
            leading="magnifying-glass"
            placeholder="อาหารสัตว์เลี้ยง, อุปกรณ์สำหรับสัตว์เลี้ยง หรือ อื่นๆ"
            size="md"
          )
          .flex(:class="navbarColor.subtext" class="gap-x-4 lg:gap-x-6")
            .text-xs.cursor-pointer(v-for="pet in pets" :key="pet") {{ pet }}

        NuxtLink.flex.flex-col.items-center.col-span-1.cursor-pointer(to="/cart" :class="navbarColor.text" v-if="!title")
          span.relative
            .text-xs.font-bold.absolute.text-white.bg-orange-900.px-2.rounded-lg.left-4(v-if="cartCount > 0") {{ cartCount }}
            i.ph-shopping-cart-simple.text-2xl
          .text-xs รถเข็น

        .flex.items-center.gap-x-4(v-if="title" class="col-span-7")
          .h-10.bg-gray-50(class="w-0.5" :class="`${color ? 'bg-gray-50' : 'bg-green-900'}`")
          h4.text-gray-50(class="text-h5 lg:text-h4" :class="`${color ? 'text-gray-50' : 'text-green-900'}`") {{ title }}

  nav.mobile-nav.items-evenly.shadow-01.bg-white(class="h-32 flex md:hidden")
    .container.flex.flex-col.items-center.justify-center
      NuxtLink(to="/"): img.cursor-pointer.h-16(src="/logo/logo-color.svg")
      .flex.items-center.gap-x-2.self-stretch
        i.ph-caret-left.text-xl.text-gray-400(
          @click="$router.go(-1)"
          v-if="computedOptions.back"
        )
        h4.font-normal.text-sm.text-gray-500(v-if="title") {{ title }}
        SoInput(
          v-else
          v-model="search"
          leading="magnifying-glass"
          placeholder="อาหารสัตว์เลี้ยง, อุปกรณ์..."
          size="sm"
        )
        i(v-if="computedOptions.share").ph-share.text-xl.text-gray-400
        i(v-if="computedOptions.cart").ph-shopping-cart-simple.text-xl.text-gray-400
        i(v-if="computedOptions.filter").ph-funnel.text-xl.text-gray-400
        i(v-if="computedOptions.profile").ph-user-circle.text-xl.text-gray-400
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from '@nuxtjs/composition-api';

const DEFAULT_OPTIONS = {
  share: false,
  cart: false,
  filter: false,
  profile: false,
  back: true,
}

const PrimaryNav = defineComponent({
  props: {
    auth: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    color: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      default: {
        share: false,
        cart: false,
        filter: false,
        profile: false,
        back: true,
      },
    },
  },
  setup(props) {
    const pets = reactive(['สุนัข','แมว','ปลาและสัตว์น้ำ','นก','เป็ด','ห่าน','กระต่าย','เม่น','ม้า','เต่า','หนู','กระรอก','หมู',]);

    const cartCount = ref(2);

    const search = ref('');

    const computedOptions = computed(() => {
      return {
        ...DEFAULT_OPTIONS,
        ...props.options,
      }
    })


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

      computedOptions,
    };
  },
});

export default PrimaryNav;
</script>

<style lang="scss" scoped>
.primary-nav {

}
</style>
