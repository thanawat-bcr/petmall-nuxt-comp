<template lang="pug">
.paginator.container
  SoPaginator(
    :pagination="pagination"
    @paginate="paginate"
  )
  h3 {{ pagination }}
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api';

const paginator = defineComponent({
  layout: 'primary',
  setup() {
    const pagination = reactive({
      current: 1,
      total: 9,
    });
    const paginate = (page: number) => {
      pagination.current = page;
    };

    return {
      pagination,
      paginate,
    };
  },
});

export default paginator;
</script>

<style lang="scss" scoped>
// .paginator {}
</style>
