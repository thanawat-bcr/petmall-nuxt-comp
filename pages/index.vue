<template lang="pug">
.index.pb-8
  section
    img.w-full.h-auto(src="/homepage/slide-01.png")
  section.container.my-8.flex.flex-col.gap-y-5
    ProductHeader สินค้าจาก Partner
    .grid-container
      ProductCategory.col-span-2(title="ชุดตรวจสอบ" text="คุณภาพน้ำ" img="/product/category/01.png")
      ProductCategory.col-span-2(title="อาหาร" text="สัตว์เลี้ยง" img="/product/category/02.png")
      ProductCategory.col-span-2(title="ของเล่น" text="สัตว์เลี้ยง" img="/product/category/03.png")
      ProductCategory.col-span-2(title="เสื้อผ้าและอุปกรณ์" text="แต่งตัวสัตว์เลี้ยง" img="/product/category/04.png")
      ProductCategory.col-span-2(title="อุปกรณ์" text="สำหรับสัตว์เลี้ยง" img="/product/category/05.png")
      ProductCategory.col-span-2(title="การดูแลสุขภาพ" text="สัตว์เลี้ยง" img="/product/category/06.png")
  section.container.my-8.flex.flex-col.gap-y-5
    ProductHeader(showAll) คุณอาจจะสนใจ
    .grid-container
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/01.png" :price="300" :amount="10" tag)
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/09.png" :price="300" :amount="10" :discount="100")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/10.png" :price="300" :amount="10" tag :discount="50")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/01.png" :price="300" :amount="10" :rank="1" :discount="75")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/09.png" :price="300" :amount="10" :rank="2" :discount="20")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/10.png" :price="300" :amount="10" :rank="3")
  AdvertisementStrength
  section.container.my-8.flex.flex-col.gap-y-5
    ProductHeader(showAll) สินค้ายอดฮิตประจำสัปดาห์
    .grid-container
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/01.png" :price="300" :amount="10")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/09.png" :price="300" :amount="10")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/10.png" :price="300" :amount="10")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/01.png" :price="300" :amount="10")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/09.png" :price="300" :amount="10")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/10.png" :price="300" :amount="10")
  AdvertisementBanner
  section.container.my-8.flex.flex-col.gap-y-5
    ProductHeader(showAll) สินค้าลดพิเศษ
    .grid-container
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/01.png" :price="300" :amount="10" :discount="70")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/09.png" :price="300" :amount="10" :discount="70")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/10.png" :price="300" :amount="10" :discount="70")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/01.png" :price="300" :amount="10" :discount="70")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/09.png" :price="300" :amount="10" :discount="70")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/10.png" :price="300" :amount="10" :discount="70")
    .grid-container
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/01.png" :price="300" :amount="10" :discount="70")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/09.png" :price="300" :amount="10" :discount="70")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/10.png" :price="300" :amount="10" :discount="70")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/01.png" :price="300" :amount="10" :discount="70")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/09.png" :price="300" :amount="10" :discount="70")
      ProductItem.col-span-2(title="อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก" img="/product/item/10.png" :price="300" :amount="10" :discount="70")
    .grid-container
      .col-span-5
      .col-span-2: SoButton(mode="soft" size="lg" block) ดูเพิ่มเติม
      .col-span-5
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const index = defineComponent({
  layout: 'primary',
  mounted() {
    this.$nuxt.$emit('setLayout', { color: false });
  },
  // setup() {}
});

export default index;
</script>

<style lang="scss">
// .index {}
</style>