<template lang="pug">
LayoutPrimary.cart(title="รถเข็น" color profile)
  .flex.flex-col.gap-y-8

    //- CART ITEMS
    section(v-if="true")
      .flex.flex-col.justify-center.gap-y-4
        .so-grid(v-for="cart in carts" :key="cart.shop.id")
          .flex.gap-x-4.items-center(class="col-span-full lg:col-span-8 lg:col-start-3")
            SoTag
            .text-sm.font-bold.text-gray-500 {{ cart.shop.name }}
          .flex.flex-col.gap-y-2(class="col-span-full lg:col-span-8 lg:col-start-3")
            ProductCart(
              v-for="item in cart.items"
              :key="item.id"
              :item="item"
            )
    //- EMPTY STATE
    SoState(
      v-else
      img="/empty/cart.png"
      title="คุณยังไม่มีสินค้าในรถเข็นตอนนี้!"
      primary="ช้อปสินค้าเลย"
    )

    //- PRODUCT SUGGESTION
    ProductSuggestion

    //- FOOTER
    .h-28
    section.h-28.w-screen.fixed.bottom-0.transform-x-center.bg-gray-100.flex.items-center.shadow-1
      .container
        .so-grid.items-center
          .col-span-2(class="col-span-2 md:col-span-3 lg:col-span-5")
            .text-gray-500.text-md รวมสินค้า {{ computedItems.amount }} ชิ้น
          .col-span-2.flex.gap-x-2.justify-end(class="col-span-2 md:col-span-3 lg:col-span-5")
            .text-md.font-bold.text-orange-900 ฿{{ computedItems.price }}
          span(class="col-span-4 md:col-span-2")
            SoButton(block @click="$router.push('/checkout')") สั่งสินค้า

</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "@nuxtjs/composition-api";

const cart = defineComponent({
  setup() {
    const carts = reactive([
      {
        shop: { id: 1, name: 'Petmall A' },
        items: [
          { id: 1, name: 'อาหารสุนัข Woofs ขนาด 1g สำหรับพันธุ์เล็ก', option: 'รสไก่', amount: 2, price: 300, img: '/product/item/01.png', options: ['รสไก่','รสเนื้อวัว','รสหมู','รสหมาล่า'] },
          { id: 2, name: 'อาหารสุนัข Woofs ขนาด 2g สำหรับพันธุ์เล็ก', option: 'รสเนื้อวัว', amount: 1, price: 600, img: '/product/item/02.png', options: ['รสไก่','รสเนื้อวัว'] },
        ],
      },
      {
        shop: { id: 2, name: 'Petmall B' },
        items: [
          { id: 3, name: 'อาหารสุนัข Woofs ขนาด 3g สำหรับพันธุ์เล็ก', option: 'รสไก่', amount: 6, price: 300, img: '/product/item/01.png', options: ['รสไก่','รสเนื้อวัว','รสหมู','รสหมาล่า'] },
          { id: 4, name: 'อาหารสุนัข Woofs ขนาด 4g สำหรับพันธุ์เล็ก', option: 'รสเนื้อวัว', amount: 2, price: 600, img: '/product/item/02.png', options: ['รสไก่','รสเนื้อวัว'] },
        ],
      },
    ]);

    const computedItems = computed(() => {
      let amount: any = 0;
      let price: any = 0;
      carts.forEach((cart) => {
        amount += cart.items.reduce((a, item) => a + (item.amount), 0);
        price += cart.items.reduce((a, item) => a + (item.amount * item.price), 0);
      });
      return {
        amount, price
      }
    })

    return {
      carts,
      computedItems,
    };
  }
});

export default cart;
</script>

<style lang="scss" scoped>
// .cart {}
</style>
