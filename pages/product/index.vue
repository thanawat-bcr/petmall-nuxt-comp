<template lang="pug">
LayoutPrimary.index(color)
  //- SoModalPreset(ref="successModal" type="success" @close="closeModalHandler")
  .flex.flex-col.gap-y-8
  
    .so-grid

      section(class="hidden md:block col-span-4 md:col-span-2")
        MenuFilter(:filter="filter")

      section.flex.flex-col.gap-y-8(class="col-span-4 md:col-span-6 lg:col-span-10")

        .flex.items-center.gap-x-4.w-full
          h4.text-gray-500 ผลการค้นหา: {{ keyword }}
        //- ITEMS GRID
        .grid-container(class="grid-cols-4 md:grid-cols-6 lg:grid-cols-10")
          ProductItem.col-span-2(v-for="product in products" :item="product")
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, Ref, ref, useRoute, watchEffect } from '@nuxtjs/composition-api';
import PRODUCTS from '@/data/products';
import { Filter, DEFAULT_FILTER } from '@/type/filter'
import { Pagination, DEFAULT_PAGINATION } from '@/type/pagination'

const index = defineComponent({
  setup() {
    const route = useRoute();

    const products: Ref<any> = ref([]);
    const filter: Ref<Filter> = ref(DEFAULT_FILTER);
    const pagination: Ref<Pagination> = ref(DEFAULT_PAGINATION);

    const keyword: any = ref('');

    onMounted(() => {
      products.value = PRODUCTS.products;
      filter.value = PRODUCTS.filter;
      pagination.value = PRODUCTS.pagination;
    })

    watchEffect(() => {
      keyword.value = route.value.query.search || '';
    })

    return {
      products,
      filter,
      pagination,

      keyword,
    }
  },
});

export default index;
</script>

<style lang="scss" scoped>
// .index {}
</style>
