<template lang="pug">
.primary
  HeaderPrimaryNav(
    :color="color"
  )
  .container.my-8(v-if="profile")
    .grid-container
      .col-span-3: HeaderProfileSidenav
      .col-span-9: Nuxt
  Nuxt(v-else)
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
    },
  },
  data() {
    return {
      color: false,
      profile: false,
    };
  },
});

export default primary;
</script>

<style lang="scss">
// .primary {}
</style>
