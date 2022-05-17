<template lang="pug">
header
  nav.secondary-nav.flex.items-center.shadow-01(:class="navbarColor.bg")
    .container.flex.flex-col.gap-y-4
      //- Top Nav
      .flex.gap-x-8.justify-end(:class="navbarColor.text" v-if="topNav")
        span.flex.items-center.gap-x-2.cursor-pointer
          i.ph-bell.text-lg
          .text-xs การแจ้งเตือน
        span.flex.items-center.gap-x-2.cursor-pointer
          i.ph-phone.text-lg
          .text-xs ติดต่อเรา
        span.flex.items-center.gap-x-2.cursor-pointer
          i.ph-globe.text-lg
          .text-xs ไทย
        SoButton(size="sm" v-if="true") ลงชื่อเข้าใช้
        span.flex.items-center.gap-x-2.cursor-pointer(v-else)
          i.ph-user-circle.text-xl
          .text-xs Tutorism

      //- Main Nav
      .grid-container.items-center
        NuxtLink(to="/").col-span-2: img.cursor-pointer(:src="navbarColor.logo")
        .flex.items-center.gap-x-4.col-span-4(:class="navbarColor.text")
          .h-10(style="width: 2px;" :class="color ? 'bg-white' : 'bg-green-900'")
          i.text-2xl(:class="icon")
          h4 {{ title }}
        .flex.col-span-6(v-if="searchbar")
          SoInput(
            v-model="search"
            leading="magnifying-glass"
            placeholder="อาหารสัตว์เลี้ยง, อุปกรณ์สำหรับสัตว์เลี้ยง หรือ อื่นๆ"
          )
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@nuxtjs/composition-api';

const SecondaryNav = defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: Boolean,
      default: true,
    },
    searchbar: {
      type: Boolean,
      default: true,
    },
    topNav: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const search = ref('');

    const navbarColor = computed(() => {
      const white = {
        text: 'text-green-900',
        bg: 'bg-white',
        logo: '/logo/logo-color.svg',
      }
      const green = {
        text: 'text-white',
        bg: 'bg-green-900',
        logo: '/logo/logo-white.svg',
      }

      if (props.color) return green;
      return white;
    });

    return {
      search,

      navbarColor,
    };
  },
});

export default SecondaryNav;
</script>

<style lang="scss" scoped>
.secondary-nav {
  height: 184px;
}
</style>
