<template lang="pug">
.checkout.w-full.flex.px-6.py-4.rounded-lg.gap-x-4.bg-gray-100
  SoRadio
  .flex.flex-col.gap-y-2
    .text-md.text-gray-500.font-bold {{ address.name }}
    .text-md.text-gray-500 {{ address.phone }}
    .text-sm.text-gray-500.truncate {{ address.address }}
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const Checkout = defineComponent({
  props: {
    address: {},
  },
  // setup() {},
});

export default Checkout;
</script>

<style lang="scss" scoped>
// .checkout {}
</style>
