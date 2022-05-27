<template lang="pug">
.so-breadcrumb.flex.items-center.gap-x-1
  //- h1 {{ breadcrumbs }}
  .flex.items-center.gap-x-1(
    v-for="(item, index) in breadcrumbs"
    :key="item.name"
  )
    .text-sm.cursor-pointer(
      @click="$router.push(item.to)"
      :class="`${breadcrumbs.length - 1 !== index ? 'text-gray-500' : 'text-green-800 pointer-events-none'}`"
    ) {{ item.name }}
    i.ph-caret-right.text-gray-400.text-md(v-if="breadcrumbs.length - 1 !== index")
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const SoBreadcrumb = defineComponent({
  props: {
    breadcrumbs: {},
  },
  // setup() {},
});

export default SoBreadcrumb;
</script>

<style lang="scss" scoped>
// .so-breadcrumb {}
</style>
