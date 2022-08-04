<template lang="pug">
LayoutPrimary.index(color)
  //- SoModalPreset(ref="successModal" type="success" @close="closeModalHandler")
  .flex.flex-col.gap-y-8

    .so-grid
      .col-span-4.flex.flex-col.gap-y-6
        .bg-gray-opacity-8.flex.items-center.justify-center.rounded-lg(
          style="width: 336px; height: 336px;"
        )
          img(:src="image" class="w-3/4")

        .flex.flex-col.gap-y-2(class="hidden md:flex")
          h6.text-h6.text-gray-500 รายละเอียดสินค้า
          .text-sm.text-gray-500 {{ item.description }}

      .flex.flex-col.gap-y-6(class="col-span-4 lg:col-span-8")
        .flex.flex-col.gap-y-2
          h1.text-h5.text-gray-500 {{ item.name }}
          .flex.gap-x-2
            .flex.gap-x-2.items-center
              .button-lg.underline.text-gray-500 {{ '5.0' }}
              .flex.items-center.pb-1: i.ph-star-fill.text-warn-400.text-xl(v-for="i in 5" :key="i")
            .flex.gap-x-2.items-center(class="hidden lg:flex")
              .button-lg.underline.text-gray-500 {{ '24' }}
              .text-md.text-gray-500 ผู้รีวิว 
            .flex.gap-x-2.items-center
              .button-lg.underline.text-gray-500 {{ item.sold }}
              .text-md.text-gray-500 ขายแล้ว
            .flex.gap-x-2.items-center.ml-auto
              i.ph-heart.text-2xl.text-gray-400.cursor-pointer.ml-auto
              i.ph-share.text-2xl.text-gray-400.cursor-pointer

        .flex.flex-col.gap-y-3
          .text-md.text-gray-500 ตัวเลือกสินค้า
          .w-full.rounded-lg.border.h-14.flex.items-center.justify-between.px-8.cursor-pointer(
            v-for="variant in item.variants" :key="variant._id"
            :class="{ 'border-green-800': variantID === variant._id }"
            @click="variantID = variant._id; amount = 0;"
          )
            .text-lg.text-gray-500(
              :class="{ 'text-green-900': variantID === variant._id }"
            ) {{ variant.name }}
            .flex.gap-x-3.items-center(v-if="variant.disprice > 0")
              .text-md.text-gray-400.line-through {{ variant.price }}
              .text-lg.text-gray-700.font-bold {{ variant.price - variant.disprice }} ฿
            .flex.gap-x-3.items-center(v-else)
              .text-lg.text-gray-700.font-bold {{ variant.price }} ฿

        .flex.flex-col.gap-y-3
          .text-md.text-gray-500 จำนวน
          .flex.gap-x-4.items-center
            .flex
              .w-12.h-12.flex.items-center.justify-center.text-gray-500.text-lg.border.border-gray-200.rounded-l-lg.cursor-pointer(
                @click="amountHandler(false)"
                :class="{ 'cursor-not-allowed': amount === 0 }"
              ) -
              .w-16.h-12.flex.items-center.justify-center.text-gray-500.text-lg.border-t.border-b.border-gray-200 {{ amount }}
              .w-12.h-12.flex.items-center.justify-center.text-gray-500.text-lg.border.border-gray-200.rounded-r-lg.cursor-pointer(
                @click="amountHandler(true)"
                :class="{ 'cursor-not-allowed': amount === remainAmount }"
              ) +
            .text-md.text-gray-500 มีสินค้าทั้งหมด {{ remainAmount }} ชิ้น

        .flex.flex-col.gap-y-2(class="flex md:hidden")
          h6.text-h6.text-gray-500 รายละเอียดสินค้า
          .text-sm.text-gray-500 {{ item.description }}

        .flex(class="w-full lg:w-1/3")
          SoButton(size="lg" block leading="shopping-cart-simple") เพิ่มไปยังรถเข็น
            
    BannerSmall
  //- AdvertisementStrengthSmall
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, Ref, useRoute } from '@nuxtjs/composition-api';
import { getProduct } from '@/api/index'

import { Item, DEFAULT_ITEM } from '@/type/product';

const _id = defineComponent({
  setup() {
    const route = useRoute();

    const item: Ref<Item> = ref(DEFAULT_ITEM);
    const variantID: Ref<string> = ref(DEFAULT_ITEM.variants[0]._id);

    onMounted(async () => {
      const { id } = route.value.params;
      const _item = await getProduct(id);

      console.log(_item)
      // item.value = _item;
      // variantID.value = _item.variants[0]._id;
    })

    const image = computed(() => {
      if (item.value.images.length === 0) return '/product/default.png';
      return item.value.images[0];
    });

    const amount: Ref<number> = ref(0);
    const remainAmount = computed(() => item.value.variants.find(item => item._id === variantID.value)?.remain || 0);
    const amountHandler = (plus: boolean) => {
      if (plus && amount.value < remainAmount.value) {
        amount.value++;
      }
      if(!plus && amount.value > 0) {
        amount.value--;
      }
    };

    return {
      item,
      variantID,
      image,

      amount,
      remainAmount,
      amountHandler,
    };
  },
});

export default _id;
</script>

<style lang="scss" scoped>
// ._id {}
</style>
