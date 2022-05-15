<template lang="pug">
.banner.w-full.flex.flex-col.gap-y-3.p-4.bg-gray-opacity-12.rounded-lg
  //- HEADER
  .flex.items-center.justify-between
    .flex.gap-x-3
      .h-6.rounded.px-5.bg-orange-900.flex.items-center.justify-center: .text-xs.text-gray-50.font-bold.text-center Featured
      .text-sm.font-bold.text-gray-500 {{ item.shopName }}
    .flex.gap-x-3.items-center(v-if="!noStatus")
      .h-6.w-px.bg-gray-200
      .text-sm.text-green-900 {{ item.status }}

  .line.w-full.h-px.bg-gray-200

  //- MAIN SECTION
  .flex.gap-x-4
    img.w-20.h-20.object-contain(src="/product/item/01.png")
    .flex.flex-col.gap-y-1.flex-1
      .text-xs.text-gray-500.flex-1 {{ item.name }}
      .flex.gap-x-1
        .text-xs.text-gray-400 ตัวเลือกสินค้า:
        .text-xs.text-gray-400 {{ item.option }}
      .text-xs.text-gray-400 {{ item.amount }}
    .text-md(:class="`${noStatus ? 'text-orange-800 font-bold' : 'text-gray-500'}`") ฿{{ item.price }}

  .line.w-full.h-px.bg-gray-200(v-if="!noStatus")

  .flex.items-center.justify-between(v-if="!noStatus")
    .flex.gap-x-1.items-center
      .text-xs.text-gray-500 จัดส่งสินค้าภายในวันที่ : 
      .text-xs.text-gray-500 {{ item.date }}
    .flex.gap-x-1.items-center
      .text-sm.text-gray-500.mr-4 ยอดคำสั่งซื้อทั้งหมด : 
      .text-orange-900.text-md.font-bold ฿{{ item.price * item.amount }}

  .flex.justify-end.gap-x-2(v-if="!noStatus && item.status === 'สำเร็จแล้ว'")
    SoButton(size="md" mode="outline") ซื้ออีกครั้ง
    SoButton(size="md") ให้คะแนน
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const Banner = defineComponent({
  props: {
    item: {},
    noStatus: { type: Boolean, default: false }
  },
  // setup() {},
});

export default Banner;
</script>

<style lang="scss" scoped>
// .banner {}
</style>
