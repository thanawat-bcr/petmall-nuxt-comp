<template lang="pug">
.purchase.flex.flex-col.gap-y-4

  .flex.flex-col.gap-y-2
    h4.text-gray-500 การสั่งซื้อของฉัน

  .grid-container-9
    .tab-selector.button-sm(
      v-for="(title, index) in tabs"
      :class="{ 'tab-selected': index === tab}"
      @click="tabSelect(index)"
    ) {{ title }}

  //- EMPTY STATE
  //- .grid-container-9
    .col-span-3
    .col-span-3.flex.flex-col.items-center.gap-y-4
      img(src="/empty/purchase.png")
      .flex.flex-col.gap-y-2.justify-center.text-center
        h6.text-gray-500 ยังไม่มีการสั่งซื้อ

  .flex.flex-col.gap-y-4
    ProductBanner(
      v-for="item in computedItems"
      :key="item.id"
      :item="item"
    )

</template>

<script lang="ts">
import { computed, defineComponent, reactive, Ref, ref } from '@nuxtjs/composition-api';

const purchase = defineComponent({
  layout: 'primary',
  mounted() {
    this.$nuxt.$emit('setLayout', { color: true, profile: true, });
  },
  setup() {
    const tab: Ref<any> = ref(0);
    const tabs: Ref<Array<String>> = ref(['ทั้งหมด','ที่ต้องจัดส่ง','ที่ต้องได้รับ','สำเร็จแล้ว']);
    const tabSelect = (index: Number) => { tab.value = index };

    const items = reactive([
      { id: 1, shopName: 'PetMall', name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', option: 'รสตับ', amount: 1, price: 600, img: '/product/item/01.png', status: 'ที่ต้องจัดส่ง', date: '15-05-2022' },
      { id: 2, shopName: 'PetMall', name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', option: 'รสตับ', amount: 1, price: 600, img: '/product/item/02.png', status: 'ที่ต้องได้รับ', date: '15-05-2022' },
      { id: 3, shopName: 'PetMall', name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', option: 'รสตับ', amount: 1, price: 600, img: '/product/item/01.png', status: 'ที่ต้องได้รับ', date: '15-05-2022' },
      { id: 4, shopName: 'PetMall', name: 'อาหารสุนัข Woofs ขนาด 100g สำหรับพันธุ์เล็ก', option: 'รสตับ', amount: 1, price: 600, img: '/product/item/03.png', status: 'สำเร็จแล้ว', date: '15-05-2022' },
    ])

    const computedItems = computed(() => tab.value === 0 ? items : items.filter(item => item.status === tabs.value[tab.value]));

    return {
      tab,
      tabs,
      tabSelect,

      items,
      computedItems,
    };
  },
});

export default purchase;
</script>

<style lang="scss" scoped>
.purchase {
  .tab-selector {
  @apply relative text-gray-500 cursor-pointer text-center py-2.5;
    &.tab-selected::after {
      content: '';
      @apply absolute bottom-0 left-0 right-0 h-0.5 bg-green-800;
    }
  }}
</style>
