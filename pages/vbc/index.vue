<template lang="pug">
.index.flex.flex-col.gap-y-8
  
  section.flex.items-center.justify-between
    .grid-container
      .col-span-1.pt-3.cursor-pointer(v-for="(tab, index) in tabs" :key="tab")
        .text-sm.text-gray-500.text-center(@click="tabSelectHandler(index)") {{ tab }}
        .w-full.bg-green-800.mt-3(style="height: 2px;" v-if="selectedTab === index")
      .col-span-1(v-for="index in (12 - tabs.length - 3)")
      .col-span-3
        SoInput(size="md" leading="magnifying-glass" placeholder='ค้นหาภายในแบรนด์')

  section.flex.flex-col.gap-y-5
    ProductHeader(showAll) สินค้าขายดี
    .grid-container
      ProductItem.col-span-2(v-for="item in sales" :key="item.id" :item="item")

  img(src="/vbc/ads.png")

  section.flex.flex-col.gap-y-5
    ProductHeader(showAll) มาใหม่
    .grid-container
      ProductItem.col-span-2(v-for="item in sales" :key="item.id" :item="item")

  AdvertisementStrength

  .grid-container
    aside.col-span-2.flex.flex-col.gap-y-6
      .flex.flex-col.gap-y-2
        h6.text-gray-500 หมวดหมู่ที่เกี่ยวข้อง
        .flex.flex-col.gap-y-1
          .text-sm.text-gray-500.cursor-pointer(
            v-for="(tab, index) in tabs"
            :key="tab"
            @click="tabSelectHandler(index)"
          ) {{ tab }}
          //- .flex.gap-x-1.items-center.cursor-pointer
            .text-sm.text-gray-400 เพิ่มเติม
            i.ph-caret-down.text-xs.text-gray-400

    section.col-span-10.flex.flex-col.gap-y-4
      .flex.justify-between.items-center
        .flex.items-center.gap-x-4
          .text-sm.text-gray-400.ml-1 เรียงโดย
          .flex.items-center.gap-x-4
            SoInput(
              size="sm"
              type="select"
              v-model="sort.date"
              :options="sorts.dates"
              placeholder="สินค้าล่าสุด"
            )
            SoInput(
              size="sm"
              type="select"
              v-model="sort.price"
              :options="sorts.prices"
              placeholder="ราคา"
            )
        .flex.items-center.gap-x-2
          .text-sm.text-gray-400 {{ pagination.current }} / {{ pagination.total }}
          .flex.gap-x-1
            SoButton(
              leading="caret-left"
              size="paginator"
              mode="text"
              :disabled="(pagination.current === 1)"
              @click="paginate(pagination.current - 1)"
            )
            SoButton(
              leading="caret-right"
              size="paginator"
              mode="text"
              :disabled="(pagination.current === pagination.total)"
              @click="paginate(pagination.current + 1)"
            )

      .grid.grid-cols-10.gap-4
        ProductItem.col-span-2(v-for="item in items" :key="item.id" :item="item")

      .flex.justify-center
        SoPaginator(
          :pagination="pagination"
          @paginate="paginate"
        )
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api';

const index = defineComponent({
  layout: 'primary',
  mounted() {
    this.$nuxt.$emit('setLayout', { banner: 'vbc' });
  },
  setup() {
    const tabs = ref(['หน้าหลัก','สินค้าทั้งหมด','PH','ALKALINITY','NITRITE','AMMONIA','SULFIDE']);
    const selectedTab = ref(0);
    const tabSelectHandler = (index: any) => selectedTab.value = index;

    const sales = reactive([
      { id: 1, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/01.png", price:"300", amount:"10", rank: 1 },
      { id: 2, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/09.png", price:"300", amount:"10", rank: 2 },
      { id: 3, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/10.png", price:"300", amount:"10", rank: 3 },
      { id: 4, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/01.png", price:"300", amount:"10", rank: 4 },
      { id: 5, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/09.png", price:"300", amount:"10", rank: 5 },
      { id: 6, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/10.png", price:"300", amount:"10", rank: 6 },
    ]);

    const sort = reactive({
      date: null,
      price: null,
    });
    const sorts = reactive({
      dates: [{ value: 'มากไปน้อย' }, { value: 'น้อยไปมาก' }],
      prices: [{ value: 'มากไปน้อย' }, { value: 'น้อยไปมาก' }],
    });
    const pagination = reactive({
      current: 1,
      total: 16,
    });
    const paginate = (page: number) => {
      pagination.current = page;
    };


    const items = reactive([
      { id: 1, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/01.png", price:"300", amount:"10", discount:"70", tag: true},
      { id: 2, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/09.png", price:"300", amount:"10", discount:"70" },
      { id: 3, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/10.png", price:"300", amount:"10", discount:"70", rank: 1},
      { id: 4, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/01.png", price:"300", amount:"10", tag: true},
      { id: 5, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/09.png", price:"300", amount:"10"},
      { id: 6, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/10.png", price:"300", amount:"10", discount:"70"},
      { id: 7, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/01.png", price:"300", amount:"10", discount:"70", tag: true},
      { id: 8, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/09.png", price:"300", amount:"10"},
      { id: 9, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/10.png", price:"300", amount:"10", discount:"70", rank: 4},
      { id: 10, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/01.png", price:"300", amount:"10", discount:"70", rank: 2},
      { id: 11, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/09.png", price:"300", amount:"10", discount:"70", rank: 3},
      { id: 12, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/10.png", price:"300", amount:"10"},
    ]);

    return {
      tabs,
      selectedTab,
      tabSelectHandler,

      sales,
      items,

      sort,
      sorts,
      pagination,
      paginate,
    };
  },
});

export default index;
</script>

<style lang="scss" scoped>
// .index {}
</style>
