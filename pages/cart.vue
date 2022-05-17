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

    .grid-container
      ProductCart
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";

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

    return {
      selectAll,
    };
  }
});

export default cart;
</script>

<style lang="scss" scoped>
// .cart {}
</style>
