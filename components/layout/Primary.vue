<template lang="pug">
.primary
  HeaderPrimaryNav(
    :color="color"
    :title="title"
  )
  section(class="h-32 md:h-24 lg:h-32")
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
import { getAuth, getIsCreated, getProfile, updateProfile } from '@/api/index'
import { onAuthStateChanged } from '@firebase/auth';
import { getAuth as firebaseAuth } from '@firebase/auth';

const primary = defineComponent({
  props: {
    title: { type: String, default: '' },
    color: { type: Boolean, default: false },
    carousel: { type: Boolean, default: false },
  },
  setup() {
    const store = useStore();
    onMounted(async () => {
      if (process.browser) {
        const auth = await firebaseAuth();
        onAuthStateChanged(auth, async (user: any) => {
        if (user) {
          const token = user.accessToken;
          localStorage.setItem('token', token);
          if (!store.getters.auth) {
            const isCreated = await getIsCreated();
            if (!isCreated) {
              const name = user.email.split('@')[0];
              const _user = {
                displayName: name,
                gender: '',
                imgUrl: '',
                birthdate: '1000-01-01',
              };
              await updateProfile(_user);
              console.log('New User Created');
            }
            const _profile = await getProfile();
            store.dispatch('saveAUTH', true);
            store.dispatch('saveUSER', _profile);
          }
        } else {
          console.log('user not found')
          localStorage.removeItem('token');
        }
      })
      }
    })
  }
});

export default primary;
</script>

<style lang="scss">
// .primary {}
</style>
