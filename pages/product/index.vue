<template lang="pug">
LayoutPrimary.index(color)
  //- SoModalPreset(ref="successModal" type="success" @close="closeModalHandler")
  .flex.flex-col.gap-y-8
  
    .so-grid

      section(class="hidden md:block col-span-4 md:col-span-2")
        MenuFilter(:filter="filter" :sort="sort" @filter="filterHandler")

      section.flex.flex-col.gap-y-8(class="col-span-4 md:col-span-6 lg:col-span-10")

        .flex.items-center.gap-x-4.w-full
          h4.text-gray-500 {{ 'อาหารสัตว์เลี้ยง' }}
          .text-sm.text-gray-400.ml-1 เรียงโดย
          .flex.items-center.gap-x-4
            SoInput(
              size="sm"
              type="select"
              v-model="sort.createdAt"
              @input="sortHandler"
              block="auto"
              :options="[{ name: 'สินค้าล่าสุด: มากไปน้อย', value: 'DESC' }, { name: 'สินค้าล่าสุด: น้อยไปมาก', value: 'ASC' }]"
              placeholder="สินค้าล่าสุด"
            )
            SoInput(
              size="sm"
              type="select"
              v-model="sort.price"
              @input="sortHandler"
              block="auto"
              :options="[{ name: 'ราคา: มากไปน้อย', value: 'DESC' }, { name: 'ราคา: น้อยไปมาก', value: 'ASC' }]"
              placeholder="ราคา"
            )
          SoButton(size="sm" @click="clearSort" mode="outline").ml-auto ลบทั้งหมด

        //- ITEMS GRID
        .grid-container(class="grid-cols-4 md:grid-cols-6 lg:grid-cols-10")
          ProductItem.col-span-2(v-for="product in products" :item="product")
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, Ref, ref } from '@nuxtjs/composition-api';
// import PRODUCTS from '@/data/products';
import { Filter, DEFAULT_FILTER } from '@/type/filter'
import { Pagination, DEFAULT_PAGINATION } from '@/type/pagination'

const index = defineComponent({
  setup() {
    const products: Ref<any> = ref([]);
    const filter: Ref<Filter> = ref(DEFAULT_FILTER);
    const pagination: Ref<Pagination> = ref(DEFAULT_PAGINATION);

    onMounted(() => {
      // products.value = PRODUCTS.products;
      // filter.value = PRODUCTS.filter;
      // pagination.value = PRODUCTS.pagination;
    })

    const sort = reactive({
      createdAt: '',
      price: '',
    });

    const clearSort = () => {
      sort.createdAt = '';
      sort.price = '';
    }

    const filterHandler = (option: any) => {
      console.log(option.filter, option.sort)
    }

    const sortHandler = () => {}

    return {
      products,
      filter,
      pagination,

      sort,
      clearSort,

      filterHandler,
      sortHandler,
    }
  },
});

export default index;
</script>

<style lang="scss" scoped>
// .index {}
</style>
