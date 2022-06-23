<template lang="pug">
section.suggestion.flex.flex-col.gap-y-5
  ProductHeader(showAll) คุณอาจจะสนใจ
  .so-grid
    ProductItem.col-span-2(
      v-for="(item, index) in items.slice(0,6)"
      :class="{'hidden lg:flex': index > 3}"
      :key="item.id"
      :item="item"
    )
  .so-grid
    .col-span-2(class="col-start-2 md:col-start-4 lg:col-start-6"): SoButton(block size="lg" mode="soft") ดูเพิ่มเติม
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const Suggestion = defineComponent({
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
    ]);

    return {
      items,
    };
  },
});

export default Suggestion;
</script>

<style lang="scss" scoped>
// .suggestion {}
</style>
