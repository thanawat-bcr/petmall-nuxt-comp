<template lang="pug">
.primary
  HeaderPrimaryNav(
    :color="nav.color"
    :title="nav.title"
  )
  section(class="h-32 lg:h-44")
  AdvertisementCarousel(v-if="nav.carousel")
  //- component(v-if="bannerName", :is="bannerName")
  //- main.container.py-8(v-if="profile")
    .so-grid
      .col-span-3: HeaderProfileSidenav
      .col-span-9: Nuxt
  //- main(:class="{'container py-8': nav.title !== 'เข้าสู่ระบบ' && nav.title !== 'ลงชื่อเข้าใช้'}")
    //- Nuxt
  main
    slot
  //- main.container.py-8
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
const NAV_OPTIONS = {
  color: false,
  carousel: false,

  title: '',
  banner: '',
}
const primary = defineComponent({
  created() {
    this.$nuxt.$on('setLayout', (payload: any) => { this.setLayoutContext(payload) })
  },
  methods: {
    setLayoutContext(payload: any) {
      this.nav = payload;
    },
  },
  data() {
    return {
      nav: NAV_OPTIONS,
    };
  },
  computed: {
    bannerName() {
      return this.banner ? 'ShopsBanners' + (this.banner as String).charAt(0).toUpperCase() + (this.banner as String).toLowerCase().slice(1) : '';
    },
  },
  watch: {
    $route(from, to) {
      this.nav = NAV_OPTIONS;
    }
  },
});

export default primary;
</script>

<style lang="scss">
// .primary {}
</style>
