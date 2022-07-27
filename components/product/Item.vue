<template lang="pug">
.item.w-full.flex.flex-col.gap-y-2.bg-gray-opacity-12.cursor-pointer(@click="$router.push('/product/item/' + item._id)")
  .item-image.relative
    .item-tag.absolute.left-0.text-white.bg-orange-900.mt-3.en.text-sm.font-bold.pl-4.pr-5.py-1(v-if="item.featured") Featured
    .item-discount.absolute.right-0.bg-warn-300.flex.flex-col.items-center.justify-center.pt-2.pb-4.px-1.mr-3(v-if="item.maxDisPricePercent")
      .text-xs.text-gray-50 ลด
      .en.text-xs.font-bold.text-warn-900 {{ item.maxDisPricePercent }}%
    img.item-image.object-contain.p-6(:src="item.imageUrl || '/product/default.png'")

  .item-detail.flex.flex-col.gap-y-2
    .text-sm.text-gray-500.truncate {{ item.name || 'undefined' }}
    .flex.justify-between.items-center 
      h6.text-h6.text-gray-500 ฿{{ item.price }}
      .text-xs.text-gray-400 ขายแล้ว {{ item.sold }} ชิ้น
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { Product, DEFAULT_PRODUCT } from '@/type/product'

const Item = defineComponent({
  props: {
    // Item Information
    item: {
      type: Object as () => Product,
      default: () => DEFAULT_PRODUCT,
    },
  }
  // setup() {},
});

export default Item;
</script>

<style lang="scss" scoped>
.item {
  @apply rounded-lg;
  &-image {
    @apply rounded-t-lg h-36 md:h-52;
    width: 100%;
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
