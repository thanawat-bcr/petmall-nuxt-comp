<template lang="pug">
.cart.my-8


  .container.flex.flex-col.gap-y-12

    //- EMPTY STATE
    //- .grid.grid-cols-12.gap-4
      .col-span-4
      .col-span-4.flex.flex-col.items-center.gap-y-4
        img(src="/empty/cart.png")
        .flex.flex-col.gap-y-2.justify-center.text-center
          h6.text-gray-500 คุณยังไม่มีสินค้าในรถเข็นตอนนี้
        SoButton(size="md") ช้อปสินค้าเลย

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
          :shops="shops"
          @amountDecrease="amountDecrease"
          @amountIncrease="amountIncrease"
          :optionOn="optionOn"
          @optionHandler="optionHandler"
          @optionChange="optionChange"
          @delete="itemDelete"
        )

    ProductSuggestion

  .h-28
  section.h-28.w-screen.fixed.bottom-0.bg-gray-100.flex.items-center.shadow-1
    .container
      .grid-container
        .col-span-2.flex.items-center
          SoCheckbox(v-model="selectAll" @input="selectHandler")
            .text-gray-500.text-md เลือกทั้งหมด ({{ items.reduce((a, item) => a + item.amount, 0) }} ชิ้น)
        .col-span-1.flex.items-center
          .button-lg.underline.text-gray-500(@click="selectHandler(false)") ลบ
        .col-span-4.flex.items-center
        .col-span-2.flex.items-center
          .text-gray-500.text-md รวมสินค้า ({{ computedItems.reduce((a, item) => a + item.amount, 0) }} ชิ้น)
        .col-span-1.flex.items-center.justify-end
          h5.text-orange-900 ฿{{ '1200' }}
        .col-span-2.flex.items-center
          SoButton(block) สั่งสินค้า

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
    const selectHandler = (mode: boolean) => items.forEach(item => item.selected = mode);
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
    const computedItems = computed(() => items.filter(item => item.selected));
    watch(items, () => {
      selectAll.value = items.every(item => item.selected);
    });

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
      selectHandler,

      items,
      shops,
      computedItems,

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
