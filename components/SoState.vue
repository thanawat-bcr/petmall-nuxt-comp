<template lang="pug">
section.so-state
  .so-grid
    .col-span-4.flex.flex-col.items-center.gap-y-4(class="md:col-start-3 lg:col-start-5")
      img(:src="img")
    .col-span-full.flex.flex-col.gap-y-1.justify-center.text-center
      h6.text-h6.text-gray-500 {{ title }}
      .text-sm.text-gray-500 {{ subtitle }}
    span(class="hidden md:block md:col-span-2 lg:col-span-4")
    SoButton.col-span-2(v-if="secondary" @click="$emit('secondaryHandler')" mode="outline") {{ secondary }}
    span(v-if="!secondary").col-span-1
    SoButton.col-span-2(v-if="primary" @click="$emit('primaryHandler')" ) {{ primary }}
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';

const SoEmpty = defineComponent({
  props: {
    img: { default: '/empty/favorite.png' },
    title: { default: 'Empty State Title' },
    subtitle: {},
    primary: {},
    secondary: {},
  },
});

export default SoEmpty;
</script>

<style lang="scss" scoped>
// .so-empty {}
</style>
