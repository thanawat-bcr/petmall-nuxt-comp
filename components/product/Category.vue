<template lang="pug">
.category
  .category-container
    img.category-image(:src="img")
    .text-gray-500.text-center(class="text-xs md:text-md") {{ name }}
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const Category = defineComponent({
  props: {
    name: { type: String, },
    text: { type: String, },
    img: { type: String, },
  },
  // setup() {},
});

export default Category;
</script>

<style lang="scss">
.category-container {
  @apply w-full md:px-4 md:py-2 flex flex-col items-center gap-y-2;
  &-image {
    @apply h-32 md:h-48;
    width: 100%;
    border-radius: 100px;
  }
}
</style>
