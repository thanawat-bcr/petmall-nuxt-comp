<template lang="pug">
.cart
  .flex.gap-x-4.items-center(v-if="shops.includes(item.id)")
    SoTag
    .text-sm.font-bold.text-gray-500 {{ item.shop.name }}
  .grid-container-12.py-4
    .col-span-4.flex.items-center
      SoCheckbox(v-model="item.selected")
      .flex.gap-x-4
        img.w-20.h-20.object-contain(:src="item.img")
        .flex.flex-col.gap-y-1
          .text-sm.text-gray-500 {{ item.name }}
          SoTag
    .col-span-1.flex.flex-col.gap-y-1.relative
      .flex.items-center.justify-between.cursor-pointer(@click="$emit('optionHandler', item.id)")
        .text-xs.text-gray-500 ตัวเลือกสินค้า
        i.ph-caret-down.text-xs.text-gray-500
      .absolute.border.border-gray-200.bg-white.p-4.flex.flex-col.gap-y-4.rounded-lg.w-60.z-10(
        v-if="optionOn === item.id"
        style="transform: translate(-40px, 40px);"
      )
        .flex.flex-col.gap-y-2
          .text-xs.text-gray-500 รสชาติ:
          .flex.flex-wrap.gap-2.overflow-y-scroll(style="max-height: 8rem;")
            SoButton(
              size="sm"
              v-for="(op, i) in item.options"
              :key="i"
              @click="selectedOption = op"
              :mode="`${op === selectedOption ? 'soft:active' : 'soft'}`"
            ).flex-shrink-0 {{ op }}
          .flex.mt-4
            SoButton(
              size="sm"
              mode="soft"
              @click="$emit('optionHandler', -1)"
            ) ยกเลิก
            SoButton(
              size="sm"
              @click="$emit('optionChange', {id: item.id, selectedOption})"
            ) ยืนยัน
      .text-xs.text-gray-500 {{ item.option }}
    .col-span-2.justify-end
      .text-md.text-black.text-right ฿{{ item.price }}
    .col-span-2.justify-end.flex
      .h-6.w-6.border.border-gray-200.flex.items-center.justify-center.cursor-pointer(@click="$emit('amountDecrease', item.id)")
        i.ph-minus.text-xs.text-gray-500
      .h-6.w-8.border.border-gray-200.flex.items-center.justify-center
        .text-sm.text-gray-500 {{ item.amount }}
      .h-6.w-6.border.border-gray-200.flex.items-center.justify-center.cursor-pointer(@click="$emit('amountIncrease', item.id)")
        i.ph-plus.text-xs.text-gray-500
    .col-span-2.flex.justify-end
      .text-md.font-bold.text-orange-900.text-right ฿{{ item.price*item.amount }}
    .col-span-1.flex.justify-center
      .button-lg.text-gray-400.underline(@click="$emit('delete', item.id)") ลบ
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

const Cart = defineComponent({
  props: {
    item: {},
    shops: {},
    optionOn: {},
  },
  setup(props: any) {
    const selectedOption = ref(props.item.option)

    return {
      selectedOption,
    };
  },
});

export default Cart;
</script>

<style lang="scss" scoped>
// .cart {}
</style>
