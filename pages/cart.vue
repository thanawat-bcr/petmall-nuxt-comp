<template lang="pug">
.cart.my-8
  .container.flex.flex-col.gap-y-5
    .grid-container
      .col-span-4.flex.items-center.gap-x-4
        SoCheckbox(v-model="selectAll")
        h6.text-gray-500 สินค้า
      .col-span-1
      .col-span-2.justify-end
        h6.text-gray-500.text-right ราคาต่อชิ้น
      .col-span-2.justify-end
        h6.text-gray-500.text-right จำนวน
      .col-span-2.justify-end
        h6.text-gray-500.text-right ราคารวม
      .col-span-1
        h6.text-gray-500.text-center ตัวเลือก

    .flex.flex-col.gap-y-4
      ProductCart(
        v-for="item in items"
        :item="item"
        @amountDecrease="amountDecrease"
        @amountIncrease="amountIncrease"
      )
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@nuxtjs/composition-api";

const cart = defineComponent({
  layout: 'secondary',
  mounted() {
    this.$nuxt.$emit('setLayout', {
      title: 'รถเข็น',
      icon: 'ph-shopping-cart-simple',
      topNav: true,
      searchbar: true,
      color: true,
    });
  },
  setup() {
    const selectAll = ref(false);

    const items = reactive([
      { id: 1, shopName: 'PetMall', name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', option: 'รสตับ', amount: 2, price: 300, img: '/product/item/01.png', status: 'ที่ต้องจัดส่ง', date: '15-05-2022', selected: false },
      { id: 2, shopName: 'PetMall', name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', option: 'รสตับ', amount: 2, price: 600, img: '/product/item/02.png', status: 'ที่ต้องได้รับ', date: '15-05-2022', selected: false },
      { id: 3, shopName: 'PetMall', name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', option: 'รสตับ', amount: 6, price: 200, img: '/product/item/03.png', status: 'ที่ต้องได้รับ', date: '15-05-2022', selected: false },
      { id: 4, shopName: 'PetMall', name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', option: 'รสตับ', amount: 1, price: 400, img: '/product/item/01.png', status: 'สำเร็จแล้ว', date: '15-05-2022', selected: false },
    ])

    const amountDecrease = (id: any) => {
      const index = items.findIndex(item => item.id === id)
      if (items[index].amount === 1) return
      // TODO: Disable counter while update amount to Database
      items[index].amount--;
    }
    const amountIncrease = (id: any) => {
      const index = items.findIndex(item => item.id === id)
      // TODO: Check available item stock before increase more amount
      // TODO: Disable counter while update amount to Database
      items[index].amount++;
    }

    return {
      selectAll,

      items,

      amountDecrease,
      amountIncrease,
    };
  }
});

export default cart;
</script>

<style lang="scss" scoped>
// .cart {}
</style>
