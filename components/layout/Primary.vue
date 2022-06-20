<template lang="pug">
.primary
  HeaderPrimaryNav(
    :color="color"
    :title="title"
    :options="options"
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
    color: {
      type: Boolean,
      default: false,
    },
    carousel: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    options: {},
  },
});

export default primary;
</script>

<style lang="scss">
// .primary {}
</style>
