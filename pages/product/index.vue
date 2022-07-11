<template lang="pug">
LayoutPrimary.index(color)
  //- SoModalPreset(ref="successModal" type="success" @close="closeModalHandler")
  .flex.flex-col.gap-y-8
  
    .so-grid

      section(class="hidden md:block col-span-4 md:col-span-2")
        MenuFilter(:filter="filter")

      section.flex.flex-col.gap-y-8(class="col-span-4 md:col-span-6 lg:col-span-10")
        p Items section
        p  {{ products }}
        p  {{ filter }}
        p  {{ pagination }}
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from '@nuxtjs/composition-api';
import PRODUCTS from '@/data/products';
import { Filter, DEFAULT_FILTER } from '@/type/filter'
import { Pagination, DEFAULT_PAGINATION } from '@/type/pagination'

const index = defineComponent({
  setup() {
    const products: Ref<any> = ref([]);
    const filter: Ref<Filter> = ref(DEFAULT_FILTER);
    const pagination: Ref<Pagination> = ref(DEFAULT_PAGINATION);

    onMounted(() => {
      products.value = PRODUCTS.products;
      filter.value = PRODUCTS.filter;
      pagination.value = PRODUCTS.pagination;

    })
    return {
      products,
      filter,
      pagination,

    }
  },
});

export default index;
</script>

<style lang="scss" scoped>
// .index {}
</style>
