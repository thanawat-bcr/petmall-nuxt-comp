<template lang="pug">
.item.w-full.flex.flex-col.gap-y-2.bg-gray-opacity-12.cursor-pointer
  .item-image.relative
    .item-tag.absolute.left-0.text-white.bg-orange-900.mt-3.en.text-sm.font-bold.pl-4.pr-5.py-1(v-if="tag") Featured
    .item-rank.absolute.left-0.text-white.flex.flex-col.items-center.justify-center.pt-2.pb-4.px-2.ml-3(
      v-if="rank > 0"
      :class="`${rank === 1 ? 'bg-orange-900' : (rank === 2 ? 'bg-alert-300' : (rank === 3 ? 'bg-warn-200' : 'bg-gray-400')) }`"
    )
      .en.text-xs.font-bold.text-white Top
      .en.text-xs.font-bold.text-white {{ rank }}
    .item-discount.absolute.right-0.bg-warn-300.flex.flex-col.items-center.justify-center.pt-2.pb-4.px-1.mr-3(v-if="discount > 0")
      .text-xs.text-gray-50 ลด
      .en.text-xs.font-bold.text-warn-900 {{ discount }}%

  .item-detail.flex.flex-col.gap-y-2
    .text-sm.text-gray-500 {{ title }}
    .flex.justify-between.items-center 
      h6.text-gray-500 ฿{{ price }}
      .text-xs.text-gray-400 ขายแล้ว {{ amount }} ชิ้น
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const Item = defineComponent({
  props: {
    title: { type: String },
    price: { type: String },
    amount: { type: String },
    
    // Optional Decorator
    tag: { type: Boolean, default: false },
    discount: { type: Number, default: 0 },
    rank: { type: Number, default: 0 },
  }
  // setup() {},
});

export default Item;
</script>

<style lang="scss" scoped>
.item {
  @apply rounded-lg;
  &-image {
    @apply rounded-t-lg;
    height: 176px;
    width: 176px;
    .item-tag {
      clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
    }
    .item-discount {
      clip-path: polygon(100% 0, 100% 100%, 50% 85%, 0 100%, 0 0);
    }
    .item-rank {
      clip-path: polygon(100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);

    }
  }
  &-detail {
    @apply bg-white rounded-b-lg py-2 px-3;
  }
}
</style>
