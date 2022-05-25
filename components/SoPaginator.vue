<template lang="pug">
.so-paginator.p-3.flex.items-center.gap-x-4
  SoButton(
    leading="caret-left"
    size="paginator"
    mode="text"
    :disabled="(pagination.current === 1)"
    @click="paginate(pagination.current - 1)"
  )
  .flex.gap-x-1.justify-center(style="width: 236px;")
    SoButton(
      v-for="p in pages"
      :key="p"
      v-if="p <= pagination.total"
      size="paginator"
      :mode="pagination.current === p ? 'main' : 'text'"
      @click="paginate(p)"
    ) {{ p }}
  SoButton(
    leading="caret-right"
    size="paginator"
    mode="text"
    :disabled="(pagination.current === pagination.total)"
    @click="paginate(pagination.current + 1)"
  )
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';

const SoPaginator = defineComponent({
  props: {
    pagination: {
      type: Object,
    },
  },
  setup(props, ctx) {
    const page = computed(() => Math.ceil((props.pagination?.current) / 6));
    const pages = computed(() => [...Array(6)].map((_, i) => (page.value * 6 - 5) + i++));
    const paginate = (page: Number) => {
      if (page === 0 || page > props.pagination?.total) return;
      ctx.emit('paginate', page);
    };

    return {
      page,
      pages,
      paginate,
    };
  },
});

export default SoPaginator;
</script>

<style lang="scss" scoped>
// .so-paginator {}
</style>
