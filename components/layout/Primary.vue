<template lang="pug">
.primary
  HeaderPrimaryNav(
    :color="color"
    :title="title"
    :share="share"
    :cart="cart"
    :filter="filter"
    :profile="profile"
    :back="back"
  )
  section(class="h-32 lg:h-44")
  AdvertisementCarousel(v-if="carousel")
  //- component(v-if="bannerName", :is="bannerName")
  //- main.container.py-8(v-if="profile")
    .so-grid
      .col-span-3: HeaderProfileSidenav
      .col-span-9: Nuxt
  //- main(:class="{'container py-8': title !== 'เข้าสู่ระบบ' && title !== 'ลงชื่อเข้าใช้'}")
    //- Nuxt
  main(
    class="py-4 md:py-8"
    :class="{'container': title !== 'เข้าสู่ระบบ' && title !== 'ลงชื่อเข้าใช้'}"
  )
    slot
  //- main.container.py-8
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
const primary = defineComponent({
  props: {
    title: { type: String, default: '' },
    color: { type: Boolean, default: false },
    carousel: { type: Boolean, default: false },
    share: { type: Boolean, default: false },
    cart: { type: Boolean, default: false },
    filter: { type: Boolean, default: false },
    profile: { type: Boolean, default: false },
    back: { type: Boolean, default: true },
  },
});

export default primary;
</script>

<style lang="scss">
// .primary {}
</style>
