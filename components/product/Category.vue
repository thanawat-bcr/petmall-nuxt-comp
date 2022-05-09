<template lang="pug">
.category
  .category-image
  .text-md.text-gray-500.text-center
    p {{ title }}
    p {{ text }}
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const Category = defineComponent({
  props: {
    title: { type: String, },
    text: { type: String, },
  },
  // setup() {},
});

export default Category;
</script>

<style lang="scss">
.category {
  @apply w-full px-4 py-2 flex flex-col items-center gap-y-2;
  &-image {
    @apply bg-green-500;
    width: 124px;
    height: 200px;
    border-radius: 100px;
  }
}
</style>
