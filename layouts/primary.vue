<template lang="pug">
.primary
  HeaderPrimaryNav(
    :color="color"
  )
  AdvertisementCarousel(v-if="carousel")
  component(:is="bannerName")
  main.container.py-8(v-if="profile")
    .grid-container-12
      .col-span-3: HeaderProfileSidenav
      .col-span-9: Nuxt
  main.container.py-8(v-else)
    Nuxt
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const primary = defineComponent({
  created() {
    this.$nuxt.$on('setLayout', (payload: any) => { this.setLayoutContext(payload) })
  },
  methods: {
    setLayoutContext(payload: any) {
      this.color = payload.color;
      this.profile = payload.profile;
      this.carousel = payload.carousel;
      if (payload.banner) this.banner = payload.banner;
    },
  },
  data() {
    return {
      color: false,
      profile: false,
      carousel: false,
      banner: '',
    };
  },
  computed: {
    bannerName() {
      return this.banner ? 'ShopsBanners' + (this.banner as String).charAt(0).toUpperCase() + (this.banner as String).toLowerCase().slice(1) : '';
    },
  },
});

export default primary;
</script>

<style lang="scss">
// .primary {}
</style>
