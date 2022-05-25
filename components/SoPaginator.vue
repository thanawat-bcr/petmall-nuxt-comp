<template lang="pug">
.so-paginator.p-3.flex.items-center.gap-x-4
  SoButton(
    leading="caret-left"
    size="paginator"
    mode="text"
    :disabled="(pagination.current === 1)"
    @click="paginate(pagination.current - 1)"
  )
  .flex.gap-x-1
    SoButton(
      v-for="page in pagination.total"
      :key="page"
      size="paginator"
      :mode="pagination.current === page ? 'main' : 'text'"
      @click="paginate(page)"
    ) {{ page }}
  SoButton(
    leading="caret-right"
    size="paginator"
    mode="text"
    :disabled="(pagination.current === pagination.total)"
    @click="paginate(pagination.current + 1)"
  )
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const SoPaginator = defineComponent({
  props: {
    pagination: {
      type: Object,
    },
  },
  setup(props, ctx) {
    const paginate = (page: Number) => {
      if (page === 0 || page > props.pagination?.total) return;
      ctx.emit('paginate', page);
    };

    return {
      paginate,
    };
  },
});

export default SoPaginator;
</script>

<style lang="scss" scoped>
// .so-paginator {}
</style>
