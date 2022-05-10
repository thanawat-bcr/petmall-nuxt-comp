<template lang="pug">
.register
  
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

const register = defineComponent({
  layout: 'secondary',
  mounted() {
    this.$nuxt.$emit('setLayout', {
      title: 'ลงชื่อเข้าใช้',
      icon: '',
      topNav: false,
      searchbar: false,
      color: false,
    });
  }
  // setup() {},
});

export default register;
</script>

<style lang="scss">
// .register {}
</style>
