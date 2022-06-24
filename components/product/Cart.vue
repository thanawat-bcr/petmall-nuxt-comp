<template lang="pug">
.cart

  .flex.py-2.gap-x-4
    img.w-20.h-20.object-contain(:src="item.img")
    .flex.flex-col.flex-1.gap-y-1

      //- NAMES
      .flex.justify-between.w-full
        .text-sm.text-gray-500.truncate(class="w-5/6") {{ item.name }}
        .text-sm.button-text.text-gray-500(@click="deleteHandler") ลบ

      //- OPTIONS
      span.relative
        .fixed.z-40.inset-0.bg-gray-900.opacity-20(v-if="showOptions" @click="showOptions = false")
        .inline-flex.items-center.cursor-pointer.gap-x-2(@click="showOptions = true")
          .text-xs.text-gray-500 ตัวเลือกสินค้า: 
          .text-xs.text-gray-500 {{ item.option }}
          i.ph-caret-down.text-xs.text-gray-500
        .absolute.border.border-gray-200.bg-white.p-4.flex.flex-col.gap-y-4.rounded-lg.w-60.z-50(
          v-if="showOptions" style="transform: translate(-40px, 0px);"
        )
          .flex.flex-col.gap-y-2
            .text-xs.text-gray-500 ตัวเลือก:
            .flex.flex-wrap.gap-2.overflow-y-scroll(style="max-height: 8rem;")
              SoButton(size="sm"
                v-for="(op, i) in item.options" :key="i"
                :mode="`${op === selectedOption ? 'soft:active' : 'soft'}`"
                @click="selectedOption = op"
              ).flex-shrink-0 {{ op }}
            .flex.mt-4.gap-x-1
              SoButton(size="sm" mode="soft" block @click="showOptions = false") ยกเลิก
              SoButton(size="sm" block @click="optionHandler") ยืนยัน

      //- PRICE
      .text-sm.text-gray-400 ฿{{ item.price }}

      //- AMOUNT
      .flex.items-center.justify-between
        .flex
          .h-6.w-6.border.border-gray-200.flex.items-center.justify-center.cursor-pointer(@click="amountHandler(-1)")
            i.ph-minus.text-xs.text-gray-500
          .h-6.w-8.border.border-gray-200.flex.items-center.justify-center
            .text-sm.text-gray-500 {{ item.amount }}
          .h-6.w-6.border.border-gray-200.flex.items-center.justify-center.cursor-pointer(@click="amountHandler(1)")
            i.ph-plus.text-xs.text-gray-500
        .text-md.font-bold.text-orange-900 ฿{{ item.price*item.amount }}
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

const Cart = defineComponent({
  props: {
    item: {},
  },
  setup(props: any) {
    const { id, amount, option } = props.item;
    const selectedOption = ref(option);

    const showOptions = ref(false);
    const optionHandler = () => {
      console.log("Options Handler:", id, selectedOption.value);
      showOptions.value = false;
    };

    const amountHandler = (n: number) => {
      console.log("Amount Handler:", id, amount, n);
    };

    const deleteHandler = () => {
      console.log("Delete Handler:", id);
    };
    

    return {
      showOptions,
      selectedOption,

      optionHandler,
      amountHandler,
      deleteHandler,
    };
  },
});

export default Cart;
</script>

<style lang="scss" scoped>
// .cart {}
</style>
