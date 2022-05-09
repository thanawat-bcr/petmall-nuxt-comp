<template lang="pug">
.index
  section
    img.w-full.h-auto(src="/homepage/slide-01.png")
  section.container.my-8.flex.flex-col.gap-y-5
    ProductHeader สินค้าจาก Partner
    .grid-container
      ProductCategory.col-span-2(title="ชุดตรวจสอบ" text="คุณภาพน้ำ")
      ProductCategory.col-span-2(title="อาหาร" text="สัตว์เลี้ยง")
      ProductCategory.col-span-2(title="ของเล่น" text="สัตว์เลี้ยง")
      ProductCategory.col-span-2(title="เสื้อผ้าและอุปกรณ์" text="แต่งตัวสัตว์เลี้ยง")
      ProductCategory.col-span-2(title="อุปกรณ์" text="สำหรับสัตว์เลี้ยง")
      ProductCategory.col-span-2(title="การดูแลสุขภาพ" text="สัตว์เลี้ยง")
  section.container.my-8.flex.flex-col.gap-y-5
    ProductHeader(showAll) คุณอาจจะสนใจ
    .grid-container
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" :price="300" :amount="10" tag)
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" :price="300" :amount="10" :discount="100")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" :price="300" :amount="10" tag :discount="50")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" :price="300" :amount="10" :rank="1" :discount="75")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" :price="300" :amount="10" :rank="2" :discount="20")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" :price="300" :amount="10" :rank="3")
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const index = defineComponent({
  layout: 'primary',
  // layout: 'secondary',
  // setup() {},
});

export default index;
</script>

<style lang="scss">
// .index {}
</style>