<template lang="pug">
.index.flex.flex-col.gap-y-8

  section.flex.flex-col.gap-y-5
    ProductHeader สินค้าจาก Partner
    .grid-container-12
      ProductCategory.col-span-2(name="ชุดตรวจสอบ" text="คุณภาพน้ำ" img="/product/category/01.png")
      ProductCategory.col-span-2(name="อาหาร" text="สัตว์เลี้ยง" img="/product/category/02.png")
      ProductCategory.col-span-2(name="ของเล่น" text="สัตว์เลี้ยง" img="/product/category/03.png")
      ProductCategory.col-span-2(name="เสื้อผ้าและอุปกรณ์" text="แต่งตัวสัตว์เลี้ยง" img="/product/category/04.png")
      ProductCategory.col-span-2(name="อุปกรณ์" text="สำหรับสัตว์เลี้ยง" img="/product/category/05.png")
      ProductCategory.col-span-2(name="การดูแลสุขภาพ" text="สัตว์เลี้ยง" img="/product/category/06.png")

  section.flex.flex-col.gap-y-5
    ProductHeader(showAll) คุณอาจจะสนใจ
    .grid-container-12
      ProductItem.col-span-2(v-for="item in items" :key="item.id" :item="item")

  AdvertisementStrength

  section.flex.flex-col.gap-y-5
    ProductHeader(showAll) สินค้ายอดฮิตประจำสัปดาห์
    .grid-container-12
      ProductItem.col-span-2(v-for="item in items" :key="item.id" :item="item")

  AdvertisementBanner

  section.flex.flex-col.gap-y-5
    ProductHeader(showAll) สินค้าลดพิเศษ
    .grid-container-12
      ProductItem.col-span-2(v-for="item in items" :key="item.id" :item="item")
    .grid-container-12
      ProductItem.col-span-2(v-for="item in items" :key="item.id" :item="item")
    .grid-container-12
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
      items,
    }
  }
});

export default index;
</script>

<style lang="scss">
// .index {}
</style>