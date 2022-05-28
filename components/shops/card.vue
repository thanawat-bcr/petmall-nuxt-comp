<template lang="pug">
.card.flex.justify-between.px-8.py-4.bg-gray-opacity-8.rounded-sm
  .flex.items-center.gap-x-6
    .relative
      img(:src="shop.img")
      SoTag.absolute.bottom-0.transform-x-center
    .flex.flex-col.gap-y-1.justify-center
      h6.text-gray-500 {{ shop.name }}
      .text-sm.text-gray-500 {{ shop.account }}
  .flex.items-center.gap-x-4
    .w-px.h-full.bg-gray-200
    .flex.flex-col.gap-y-1
      .flex.items-center.gap-x-1
        i.ph-tote-simple.text-md.text-orange-800
        .text-sm.text-orange-800 {{ shop.items }}
      .text-sm.text-gray-500 สินค้า
    .w-px.h-full.bg-gray-200
    .flex.flex-col.gap-y-1
      .flex.items-center.gap-x-1
        i.ph-star.text-md.text-orange-800
        .text-sm.text-orange-800 {{ shop.score }}
      .text-sm.text-gray-500 คะแนน
  
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const card = defineComponent({
  props: {
    shop: {},
  },
  // setup() {},
});

export default card;
</script>

<style lang="scss" scoped>
// .card {}
</style>
