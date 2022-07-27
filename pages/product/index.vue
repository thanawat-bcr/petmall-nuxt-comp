<template lang="pug">
LayoutPrimary.index(color)
  //- SoModalPreset(ref="successModal" type="success" @close="closeModalHandler")
  .flex.flex-col.gap-y-8
  
    .so-grid

      section(class="hidden md:block col-span-4 md:col-span-2")
        MenuFilter(:filter="filter" @filterHandler="filterHandler")

      section.flex.flex-col.gap-y-8(class="col-span-4 md:col-span-6 lg:col-span-10")

        .flex.items-center.justify-between.gap-x-4.w-full
          h4.text-gray-500 ผลการค้นหา: {{ keyword }}
          i.ph-funnel.text-xl.text-gray-500(class="block md:hidden" @click="showFilterMenu = true")
          nav.fixed.inset-0.bg-white.z-50.py-3.px-4.flex.flex-col(v-if="showFilterMenu")
            .bg-white.w-full.flex.items-center.justify-end
              i.ph-x.text-xl.text-gray-500.p-2(@click="showFilterMenu = false")
            .flex-1.overflow-y-scroll
              MenuFilter(:filter="filter")
        //- ITEMS GRID
        .grid-container(class="grid-cols-4 md:grid-cols-6 lg:grid-cols-10")
          ProductItem.col-span-2(v-for="product in products" :item="product")
          
        .grid-container(class="grid-cols-4 md:grid-cols-6 lg:grid-cols-10")
          SoButton.col-span-4(class="md:col-start-2 lg:col-start-4" @click="loadMoreHandler" v-if="pagination.currentPage < pagination.totalPage") แสดงเพิ่มเติม
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref, useRoute, watchEffect } from '@nuxtjs/composition-api';
// import PRODUCTS from '@/data/products';
import { getProducts } from '@/api/index'

import { Product } from '@/type/product'
import { Filter, DEFAULT_FILTER } from '@/type/filter'
import { Pagination, DEFAULT_PAGINATION } from '@/type/pagination'

const index = defineComponent({
  setup() {
    const route = useRoute();

    const products: Ref<Array<Product>> = ref([]);
    const filter: Ref<Filter> = ref(DEFAULT_FILTER);
    const pagination: Ref<Pagination> = ref(DEFAULT_PAGINATION);

    const keyword: any = ref('');

    const showFilterMenu = ref(false);

    onMounted(async () => {
      // STATIC MOCK PRODUCTS
      // products.value = PRODUCTS.products;
      // filter.value = PRODUCTS.filter;
      // pagination.value = PRODUCTS.pagination;

      // API MOCK PRODUCTS
      if (process.browser) {
        await fetchProducts();
      }
    });

    const fetchProducts = async () => {
      const _products = await getProducts({ search: keyword.value }, {
        page: pagination.value.currentPage,
        perPage: pagination.value.perPage,
      });

      console.log(_products);
      products.value = _products.products;
      filter.value = _products.filter;
      pagination.value = _products.pagination;
    }

    const loadMoreHandler = async () => {
      if (pagination.value.currentPage < pagination.value.totalPage) pagination.value.currentPage += 1;

      const _products = await getProducts({ search: keyword.value }, {
        page: pagination.value.currentPage,
        perPage: pagination.value.perPage,
      });
      console.log(_products);
      products.value.push(..._products.products);
      filter.value = _products.filter;
      pagination.value = _products.pagination;

    }

    watchEffect(() => {
      keyword.value = route.value.query.search || '';
    })

    const filterHandler = (filter: any) => {
      console.log(filter);
    };

    return {
      products,
      filter,
      pagination,

      fetchProducts,
      loadMoreHandler,

      showFilterMenu,

      keyword,

      filterHandler,
    }
  },
});

export default index;
</script>

<style lang="scss" scoped>
// .index {}
</style>
