<template lang="pug">
.header.flex.justify-between
  h5.text-gray-500: slot
  .flex.items-center.cursor-pointer(v-if="showAll")
    .text-gray-400.text-md ดูทั้งหมด
    i.ph-caret-right.text-lg.text-gray-400
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const Header = defineComponent({
  props: {
    showAll: {
      type: Boolean,
      default: false,
    },
  },
  // setup() {},
});

export default Header;
</script>

<style lang="scss">
// .header {}
</style>
