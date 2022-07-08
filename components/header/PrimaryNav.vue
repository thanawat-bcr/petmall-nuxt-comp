<template lang="pug">
header.fixed.top-0.left-0.right-0.z-40

  nav.primary-nav.items-center.shadow-01(:class="navbarColor.bg" class="hidden md:flex h-24 lg:h-32")
    .container

      //- Main Nav - SEARCH
      .so-grid.items-center(v-if="!title")
        NuxtLink(to="/" class="col-span-1 lg:col-span-2"): img.cursor-pointer(:src="navbarColor.logo")
        //- SEARCH BAR
        .flex.flex-col.gap-y-2(class="col-span-5 lg:col-span-8")
          SoInput(
            v-model="search"
            leading="magnifying-glass"
            placeholder="อาหารสัตว์เลี้ยง, อุปกรณ์สำหรับสัตว์เลี้ยง หรือ อื่นๆ"
            size="md"
          )
        //- SEARCH BAR

        //- AUTH
        .col-span-2.flex.gap-x-2.items-center(v-if="AUTH" :class="navbarColor.text")
          span.relative.cursor-pointer.w-10.flex.items-center(@click="$router.push('/cart')")
            .text-xs.font-bold.absolute.text-white.bg-orange-900.px-2.rounded-lg.left-4(v-if="cartCount > 0" class="-top-1") {{ cartCount }}
            i.ph-shopping-cart-simple.text-2xl
          span.relative.flex-1
            .fixed.inset-0.z-40(v-if="showNavDesktopMenu" @click="showNavDesktopMenu = false")
            .flex.items-center.cursor-pointer(class="gap-x-1" @click="showNavDesktopMenu = !showNavDesktopMenu")
              i.ph-user-circle.text-2xl
              .text-xs.flex-1.truncate(style="max-width: 4.5rem;") {{ USER.displayName || 'Anonymous' }}
              i.ph-caret-down.text-lg
            .absolute.bg-gray-100.rounded-lg.p-2.flex.flex-col.z-50(class="w-full top-8" v-if="showNavDesktopMenu")
              .text-xs.text-gray-500.cursor-pointer.p-2.rounded(class="hover:bg-gray-200" @click="$router.push('/profile')") บัญชีของฉัน
              .text-xs.text-gray-500.cursor-pointer.p-2.rounded(class="hover:bg-gray-200" @click="$router.push('/profile/purchase')") การสั่งซื้อของฉัน
              .text-xs.text-alert-600.cursor-pointer.p-2.rounded(class="hover:bg-gray-200" @click="signout") ออกจากระบบ
        //- AUTH

        //- NO AUTH
        .col-span-2.flex.gap-x-4.items-center(v-else)
          SoButton(block @click="$router.push('/signin')") เข้าสู่ระบบ
        //- NO AUTH

      //- Main Nav - TITLE
      .so-grid.items-center(v-else)
        NuxtLink(to="/" class="col-span-1 lg:col-span-2"): img.cursor-pointer(:src="navbarColor.logo")
        .flex.items-center.gap-x-4(v-if="title" class="col-span-7")
          .h-10.bg-gray-50(class="w-0.5" :class="`${color ? 'bg-gray-50' : 'bg-green-900'}`")
          h4.text-gray-50(class="text-h5 lg:text-h4" :class="`${color ? 'text-gray-50' : 'text-green-900'}`") {{ title }}

  nav.mobile-nav.items-evenly.shadow-01.bg-white(class="h-32 flex md:hidden")
    .container.flex.flex-col.items-center.justify-center
      NuxtLink(to="/"): img.cursor-pointer.h-16(src="/logo/logo-color.svg")
      .flex.items-center.gap-x-2.self-stretch
        //- i.ph-caret-left.text-xl.text-gray-400(@click="$router.go(-1)")
        //- i.ph-share.text-xl.text-gray-400
        //- i.ph-funnel.text-xl.text-gray-400
        h4.font-normal.text-sm.text-gray-500.flex-1(v-if="title") {{ title }}
        SoInput(
          v-else
          v-model="search"
          leading="magnifying-glass"
          placeholder="อาหารสัตว์เลี้ยง, อุปกรณ์..."
          size="sm"
        )
        
        span.relative.pt-1(@click="$router.push('/cart')" v-if="AUTH")
          .text-xxs.absolute.text-white.bg-orange-900.px-2.rounded-lg(v-if="cartCount > 0" style="top: -4px; right: -12px;") {{ cartCount }}
          i.ph-shopping-cart-simple.text-xl.text-gray-400
        i(@click="showProfileMenu = true").ph-user-circle.text-xl.text-gray-400

  //- MOBILE MENU - PROFILE
  nav.fixed.inset-0.bg-white.z-50(v-if="showProfileMenu")
    .container.h-full.py-4.gap-y-0.flex.flex-col
      .bg-white.w-full.flex.items-center.justify-end
        i.ph-x.text-xl.text-gray-500.p-2(@click="showProfileMenu = false")
      HeaderProfileSidenav.flex-1
      .flex.flex-col.gap-y-2(v-if="!AUTH")
        SoButton(block @click="$router.push('/signin');showProfileMenu = false;" ) เข้าสู่ระบบ
        SoButton(block @click="$router.push('/signup');showProfileMenu = false;" mode="outline") ลงชื่อเข้าใช้
      .flex.flex-col.gap-y-2(v-else)
        SoButton(block mode="outline" @click="signout") ลงชื่อออก
</template>

<script lang="ts">
import { getAuth, signOut } from '@firebase/auth';
import { defineComponent, ref, computed, useRouter, useStore } from '@nuxtjs/composition-api';

const PrimaryNav = defineComponent({
  props: {
    title: { type: String, default: '' },
    color: { type: Boolean, default: false },
  },
  setup(props: any) {
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

    const showProfileMenu = ref(false);
    const showNavDesktopMenu = ref(false);

    const router = useRouter();
    const store = useStore();

    const AUTH = computed(() => store.getters.auth);
    const USER = computed(() => store.getters.user);

    const signout = () => {
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        store.dispatch('logout');
        router.push('/');
        window.location.reload();
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
    }

    return {
      cartCount,
      search,

      navbarColor,

      showProfileMenu,
      showNavDesktopMenu,

      USER,
      AUTH,
      signout,
    };
  },
});

export default PrimaryNav;
</script>

<style lang="scss" scoped>
.primary-nav {

}
</style>
