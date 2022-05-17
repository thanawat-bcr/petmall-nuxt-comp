<template lang="pug">
.cart.my-8
  .container.flex.flex-col.gap-y-12
    .flex.flex-col.gap-y-5
      .grid-container
        .col-span-4.flex.items-center.gap-x-4
          SoCheckbox(v-model="selectAll" @input="selectHandler")
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
          :key="item.id"
          :item="item"
          @amountDecrease="amountDecrease"
          @amountIncrease="amountIncrease"
          :optionOn="optionOn"
          @optionHandler="optionHandler"
          @optionChange="optionChange"
          @delete="itemDelete"
        )

    ProductSuggestion
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watch } from "@nuxtjs/composition-api";

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
    const computedSelect = computed(() => {
      selectAll.value = items.every(item => item.selected)
      return selectAll.value;
    });
    const selectHandler = (all: boolean) => items.forEach(item => item.selected = all);

    const items = reactive([
      { id: 1, shopName: 'PetMall', name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', option: 'รสไก่', amount: 2, price: 300, img: '/product/item/01.png', status: 'ที่ต้องจัดส่ง', date: '15-05-2022', selected: false, options: ['รสไก่','รสเนื้อวัว','รสหมู','รสหมาล่า'] },
      { id: 2, shopName: 'PetMall', name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', option: 'รสเนื้อวัว', amount: 2, price: 600, img: '/product/item/02.png', status: 'ที่ต้องได้รับ', date: '15-05-2022', selected: true, options: ['รสไก่','รสเนื้อวัว'] },
      { id: 3, shopName: 'PetMall', name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', option: 'รสหมู', amount: 6, price: 200, img: '/product/item/03.png', status: 'ที่ต้องได้รับ', date: '15-05-2022', selected: false, options: ['รสไก่','รสเนื้อวัว','รสหมู'] },
      { id: 4, shopName: 'PetMall', name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', option: 'รสตับ', amount: 1, price: 400, img: '/product/item/01.png', status: 'สำเร็จแล้ว', date: '15-05-2022', selected: true , options: ['รสไก่','รสเนื้อวัว','รสหมู','รสหมาล่า','รสตับ','รสเนื้อวัว','รสหมู','รสหมาล่า'] },
    ])

    const amountDecrease = (id: any) => {
      const index = items.findIndex(item => item.id === id);
      if (items[index].amount === 1) return
      // TODO: Disable counter while update amount to Database
      items[index].amount--;
    }
    const amountIncrease = (id: any) => {
      const index = items.findIndex(item => item.id === id);
      // TODO: Check available item stock before increase more amount
      // TODO: Disable counter while update amount to Database
      items[index].amount++;
    }

    const optionOn = ref(-1);
    const optionHandler = (id: any) => {
      optionOn.value = id;
    };
    const optionChange = (payload: any) => {
      const {id, selectedOption} = payload;
      const index = items.findIndex(item => item.id === id);
      items[index].option = selectedOption;
      // TODO: Disable option while update option to Database
      optionOn.value = -1;
    };

    const itemDelete = (id: any) => {
      // TODO: Implement delete item
      console.log(`item: ${id} deleted`)
    }

    return {
      selectAll,
      computedSelect,
      selectHandler,

      items,

      amountDecrease,
      amountIncrease,

      optionOn,
      optionHandler,
      optionChange,

      itemDelete,
    };
  }
});

export default cart;
</script>

<style lang="scss" scoped>
// .cart {}
</style>
