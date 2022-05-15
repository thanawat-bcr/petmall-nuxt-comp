<template lang="pug">
.purchase.flex.flex-col.gap-y-8
  .flex.flex-col.gap-y-2
    h4.text-gray-500 การสั่งซื้อของฉัน
  .grid.grid-cols-9.gap-x-4
    .tab-selector.button-sm(
      v-for="(title, index) in tabs"
      :class="{ 'tab-selected': index === tab}"
      @click="tabSelect(index)"
    ) {{ title }}

  //- EMPTY STATE
  //- .grid.grid-cols-9.gap-x-4
    .col-span-3
    .col-span-3.flex.flex-col.items-center.gap-y-4
      img(src="/empty/purchase.png")
      .flex.flex-col.gap-y-2.justify-center.text-center
        h6.text-gray-500 ยังไม่มีการสั่งซื้อ

</template>

<script lang="ts">
import { defineComponent, Ref, ref } from '@nuxtjs/composition-api';

const purchase = defineComponent({
  layout: 'primary',
  mounted() {
    this.$nuxt.$emit('setLayout', { color: true, profile: true, });
  },
  setup() {
    const tab: Ref<Number> = ref(0);
    const tabs: Ref<Array<String>> = ref(['ทั้งหมด','ที่ต้องชำระ','ที่ต้องจัดส่ง','ที่ต้องได้รับ','สำเร็จแล้ว','ยกเลิกแล้ว']);
    const tabSelect = (index: Number) => { tab.value = index };

    return {
      tab,
      tabs,
      tabSelect,
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
