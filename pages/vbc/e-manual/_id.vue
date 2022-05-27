<template lang="pug">
._id.flex.flex-col.gap-y-8

  SoBreadcrumb(
    :breadcrumbs="breadcrumbs"
  )
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const _id = defineComponent({
  layout: 'primary',
  mounted() {
    this.$nuxt.$emit('setLayout', { banner: 'vbc' });
  },
  setup() {
    const breadcrumbs = reactive([
      { name: 'สินค้าทั้งหมด', to: '/vbc' },
      { name: 'E-manual', to: '/vbc/e-manual' },
      { name: 'AMMONIA', to: null },
    ]);

    return {
      breadcrumbs,
    };
  },
});

export default _id;
</script>

<style lang="scss" scoped>
// ._id {}
</style>
