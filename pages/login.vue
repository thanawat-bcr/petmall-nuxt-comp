<template lang="pug">
.login
  
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const login = defineComponent({
  layout: 'secondary',
  mounted() {
    this.$nuxt.$emit('setLayout', {
      title: 'เข้าสู่ระบบ',
      icon: '',
      topNav: false,
      searchbar: false,
      color: false,
    });
  }
  // setup() {},
});

export default login;
</script>

<style lang="scss" scoped>
// .login {}
</style>
