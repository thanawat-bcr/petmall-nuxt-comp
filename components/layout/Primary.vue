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
  section(class="h-24 lg:h-32")
  AdvertisementCarousel(v-if="carousel")
  //- component(v-if="bannerName", :is="bannerName")
  //- main.container.py-8(v-if="profile")
    .so-grid
      .col-span-3: HeaderProfileSidenav
      .col-span-9: Nuxt
  //- main(:class="{'container py-8': title !== 'เข้าสู่ระบบ' && title !== 'ลงชื่อเข้าใช้'}")
    //- Nuxt
  main(:class="{'container py-4 md:py-8': title !== 'เข้าสู่ระบบ' && title !== 'ลงชื่อเข้าใช้'}")
    slot
  //- main.container.py-8
</template>

<script lang="ts">
import { defineComponent, onMounted, useStore } from '@nuxtjs/composition-api';
import { getAuth, getUserProfile } from '@/api/index'

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
  setup() {
    const store = useStore();
    onMounted(async () => {
      if (process.browser) {
        try {
          const auth = await getAuth();
          store.dispatch('saveAUTH', auth);
          // const data = await getUserProfile();
          // if (data) store.dispatch('saveUSER', data);
        }catch(err) {
          console.log(err);
        }
      }
    })
  }
});

export default primary;
</script>

<style lang="scss">
// .primary {}
</style>
