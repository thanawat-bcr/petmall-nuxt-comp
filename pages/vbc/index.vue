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
      ProductItem.col-span-2(v-for="item in items" :key="item.id" :item="item")

  img(src="/vbc/ads.png")

  section.flex.flex-col.gap-y-5
    ProductHeader(showAll) มาใหม่
    .grid-container
      ProductItem.col-span-2(v-for="item in items" :key="item.id" :item="item")

  AdvertisementStrength
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


    const items = reactive([
      { id: 1, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/01.png", price:"300", amount:"10", rank: 1 },
      { id: 2, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/09.png", price:"300", amount:"10", rank: 2 },
      { id: 3, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/10.png", price:"300", amount:"10", rank: 3 },
      { id: 4, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/01.png", price:"300", amount:"10", rank: 4 },
      { id: 5, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/09.png", price:"300", amount:"10", rank: 5 },
      { id: 6, name:"อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก", img:"/product/item/10.png", price:"300", amount:"10", rank: 6 },
    ]);

    return {
      tabs,
      selectedTab,
      tabSelectHandler,

      items,
    };
  },
});

export default index;
</script>

<style lang="scss" scoped>
// .index {}
</style>
