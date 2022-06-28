<template lang="pug">
header.fixed.top-0.left-0.right-0.z-40

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

        NuxtLink(to="/register" v-if="!TOKEN"): SoButton(size="xs" @click="$emit('click')") ลงชื่อเข้าใช้
        .flex.items-center.gap-x-4(v-else)
          span.flex.items-center.gap-x-2.cursor-pointer(@click="$router.push('/profile')")
            i.ph-user-circle.text-2xl
            .text-xs Tutorism
          SoButton(size="sm" @click="signout") ลงชื่อออก

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
          v-if="back"
        )
        h4.font-normal.text-sm.text-gray-500.flex-1(v-if="title") {{ title }}
        SoInput(
          v-else
          v-model="search"
          leading="magnifying-glass"
          placeholder="อาหารสัตว์เลี้ยง, อุปกรณ์..."
          size="sm"
        )
        
        i(v-if="share").ph-share.text-xl.text-gray-400
        span.relative.pt-1(v-if="cart" @click="$router.push('/cart')")
          .text-xxs.absolute.text-white.bg-orange-900.px-2.rounded-lg(v-if="cartCount > 0" style="top: -4px; right: -12px;") {{ cartCount }}
          i.ph-shopping-cart-simple.text-xl.text-gray-400
        i(v-if="filter").ph-funnel.text-xl.text-gray-400
        i(v-if="profile" @click="showProfileMenu = true").ph-user-circle.text-xl.text-gray-400

  //- MOBILE MENU - PROFILE
  nav.fixed.inset-0.bg-white.z-50(v-if="showProfileMenu")
    .container.h-full.py-4.gap-y-4.flex.flex-col
      .bg-white.w-full.flex.items-center.justify-end
        i.ph-x.text-xl.text-gray-500.p-2(@click="showProfileMenu = false")
      HeaderProfileSidenav.flex-1
      .flex.flex-col.gap-y-2(v-if="!TOKEN")
        SoButton(block @click="$router.push('/login')" ) เข้าสู่ระบบ
        SoButton(block @click="$router.push('/register')" mode="outline") ลงชื่อเข้าใช้
      .flex.flex-col.gap-y-2(v-else)
        SoButton(block mode="outline" @click="signout") ลงชื่อออก
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, onMounted, Ref, useRouter } from '@nuxtjs/composition-api';
import { getAuth, signOut } from '@firebase/auth';

const PrimaryNav = defineComponent({
  props: {
    auth: { default: false },
    title: { type: String, default: '' },
    color: { type: Boolean, default: false },
    share: { type: Boolean, default: false },
    cart: { type: Boolean, default: false },
    filter: { type: Boolean, default: false },
    profile: { type: Boolean, default: false },
    back: { type: Boolean, default: true },
  },
  setup(props: any) {
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

    const showProfileMenu = ref(false);

    const TOKEN: Ref<String> = ref('');
    onMounted(() => {
      TOKEN.value = localStorage.getItem('token') || '';
    });

    const router = useRouter();
    const signout = () => {
      const auth = getAuth();
      signOut(auth).then(() => {
        router.push('/');
        window.location.reload();
        localStorage.removeItem('token');
      }).catch((error) => {
        // An error happened.
        alert(error);
      });
    }

    return {
      pets,
      cartCount,
      search,

      navbarColor,

      showProfileMenu,

      TOKEN,
      signout
    };
  },
});

export default PrimaryNav;
</script>

<style lang="scss" scoped>
.primary-nav {

}
</style>
