<template lang="pug">
LayoutPrimary.cart(title="รถเข็น" color profile)
  .flex.flex-col.gap-y-8

    //- EMPTY STATE
    section(v-if="false")
      .so-grid
        .col-span-4.flex.flex-col.items-center.gap-y-4(class="md:col-start-3 lg:col-start-5")
          img(src="/empty/cart.png")
          .flex.flex-col.gap-y-2.justify-center.text-center
            h6.text-gray-500 คุณยังไม่มีสินค้าในรถเข็นตอนนี้
          SoButton(size="md") ช้อปสินค้าเลย
    //- CART ITEMS
    section(v-else)
      .flex.flex-col.gap-y-2
        ProductCart(
          v-for="item in items"
          :key="item.id"
          :item="item"
          :shops="shops"
        )

    //- PRODUCT SUGGESTION
    ProductSuggestion

    //- FOOTER
    .h-28
    section.h-28.w-screen.fixed.bottom-0.transform-x-center.bg-gray-100.flex.items-center.shadow-1
      .container
        .so-grid.items-center
          .col-span-2(class="col-span-2 md:col-span-3 lg:col-span-5")
            .text-gray-500.text-md รวมสินค้า {{ items.reduce((a, item) => a + (item.amount), 0) }} ชิ้น
          .col-span-2.flex.gap-x-2.justify-end(class="col-span-2 md:col-span-3 lg:col-span-5")
            .text-md.font-bold.text-orange-900 ฿{{ items.reduce((a, item) => a + (item.amount * item.price), 0) }}
          span(class="col-span-4 md:col-span-2")
            SoButton(block) สั่งสินค้า

</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "@nuxtjs/composition-api";

const cart = defineComponent({
  setup() {
    const items = reactive([
      { id: 1, shop: { id: 1, name: 'PetMall A' }, name: 'อาหารสุนัข Woofs ขนาด 1g สำหรับพันธุ์เล็ก', option: 'รสไก่', amount: 2, price: 300, img: '/product/item/01.png', status: 'ที่ต้องจัดส่ง', date: '15-05-2022', selected: false, options: ['รสไก่','รสเนื้อวัว','รสหมู','รสหมาล่า'] },
      { id: 2, shop: { id: 2, name: 'PetMall B' }, name: 'อาหารสุนัข Woofs ขนาด 2g สำหรับพันธุ์เล็ก', option: 'รสเนื้อวัว', amount: 2, price: 600, img: '/product/item/02.png', status: 'ที่ต้องได้รับ', date: '15-05-2022', selected: true, options: ['รสไก่','รสเนื้อวัว'] },
      { id: 3, shop: { id: 1, name: 'PetMall A' }, name: 'อาหารสุนัข Woofs ขนาด 3g สำหรับพันธุ์เล็ก', option: 'รสหมู', amount: 6, price: 200, img: '/product/item/03.png', status: 'ที่ต้องได้รับ', date: '15-05-2022', selected: false, options: ['รสไก่','รสเนื้อวัว','รสหมู'] },
      { id: 4, shop: { id: 2, name: 'PetMall B' }, name: 'อาหารสุนัข Woofs ขนาด 4g สำหรับพันธุ์เล็ก', option: 'รสตับ', amount: 1, price: 400, img: '/product/item/01.png', status: 'สำเร็จแล้ว', date: '15-05-2022', selected: true , options: ['รสไก่','รสเนื้อวัว','รสหมู','รสหมาล่า','รสตับ','รสเนื้อวัว','รสหมู','รสหมาล่า'] },
    ].sort((a, b) => a.shop.id - b.shop.id))
    const shops = computed(() => {
      const ids: any = [];
      const index: any = [];
      items.forEach((item, i) => {
        if (!ids.includes(item.shop.id)) {
          index.push(item.id);
          ids.push(item.shop.id);
        }
      })
      return index;
    })

    return {
      items,
      shops,
    };
  }
});

export default cart;
</script>

<style lang="scss" scoped>
// .cart {}
</style>
