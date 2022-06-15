<template lang="pug">
.index.flex.flex-col.gap-y-8

  section
    ProductHeader สินค้าจาก Partner
    .so-grid
      ProductCategory(
        v-for="(cat, index) in categories"
        class="col-span-1 md:col-span-2"
        :class="{'hidden lg:flex': index > 3}"
        :key="cat.id"
        :name="cat.name"
        :img="cat.img"
      )

  section.flex.flex-col.gap-y-5
    ProductHeader(showAll) คุณอาจจะสนใจ
    .so-grid
      ProductItem.col-span-2(v-for="item in items" :key="item.id" :item="item")

  AdvertisementStrength

  section.flex.flex-col.gap-y-5
    ProductHeader(showAll) สินค้ายอดฮิตประจำสัปดาห์
    .so-grid
      ProductItem.col-span-2(v-for="item in items" :key="item.id" :item="item")

  AdvertisementBanner

  section.flex.flex-col.gap-y-5
    ProductHeader(showAll) สินค้าลดพิเศษ
    .so-grid
      ProductItem.col-span-2(v-for="item in items" :key="item.id" :item="item")
    .so-grid
      ProductItem.col-span-2(v-for="item in items" :key="item.id" :item="item")
    .so-grid
      .col-span-5
      .col-span-2: SoButton(mode="soft" size="lg" block) ดูเพิ่มเติม
      .col-span-5

</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const index = defineComponent({
  layout: 'primary',
  mounted() {
    this.$nuxt.$emit('setLayout', { carousel: true });
  },
  setup() {
    const categories = reactive([
      { id: 1, name:"ชุดตรวจสอบคุณภาพน้ำ", img:"/product/category/01.png" },
      { id: 2, name:"อาหารสัตว์เลี้ยง", img:"/product/category/02.png" },
      { id: 3, name:"Coming Soon...", img:"/product/category/empty.png" },
      { id: 4, name:"Coming Soon...", img:"/product/category/empty.png" },
      { id: 5, name:"Coming Soon...", img:"/product/category/empty.png" },
      { id: 6, name:"Coming Soon...", img:"/product/category/empty.png" },
    ])
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
    ])

    return {
      categories,
      items,
    }
  }
});

export default index;
</script>

<style lang="scss">
// .index {}
</style>