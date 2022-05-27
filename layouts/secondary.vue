<template lang="pug">
main.secondary
  HeaderSecondaryNav(
    :title="title"
    :icon="icon"
    :searchbar="searchbar"
    :topNav="topNav"
    :color="color"
  )
  main(v-if="auth")
    Nuxt
  main.container.py-8(v-else)
    Nuxt
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const secondary = defineComponent({
  created() {
    this.$nuxt.$on('setLayout', (payload: any) => { this.setLayoutContext(payload) })
  },
  methods: {
    setLayoutContext(payload: any) {
      this.title = payload.title;
      this.icon = payload.icon;
      this.searchbar = payload.searchbar;
      this.topNav = payload.topNav;
      this.color = payload.color;
      this.auth = payload.auth;
    },
  },
  data() {
    return {
      icon: '',
      title: '',
      searchbar: false,
      topNav: false,
      color: false,
      auth: false,
    };
  },
  watch: {
    $route(from, to) {
      this.icon = '';
      this.title = '';
      this.searchbar = false;
      this.topNav = false;
      this.color = false;
      this.auth = false;
    }
  }
});

export default secondary;
</script>

<style lang="scss">
// .secondary {}
</style>
