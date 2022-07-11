<template lang="pug">
aside.filter.w-full.h-full.flex.flex-col.gap-y-6

  SoForm(@submit="submit")
    .flex.flex-col.gap-y-6
      section.flex.flex-col.gap-y-2(v-if="filter.animals")
        h6.text-h6.text-gray-500 ประเภทสัตว์
        .flex.flex-col.gap-y-2
          SoCheckbox(
            v-for="op in animalOptions"
            :key="op.value"
            v-model="op.selected"
          ) {{ op.value }}

      section.flex.flex-col.gap-y-2(v-if="filter.categories")
        h6.text-h6.text-gray-500 หมวดหมู่ที่เกี่ยวข้อง
        .flex.flex-col.gap-y-2
          SoCheckbox(
            v-for="op in categoryOptions"
            :key="op.value"
            v-model="op.selected"
          ) {{ op.value }}

      section.flex.flex-col.gap-y-2
        h6.text-h6.text-gray-500 ช่วงราคา
        .flex.flex-col.gap-y-6
          .flex.gap-x-1.items-center
            .text-sm.text-gray-500 ตั้งแต่:
            SoInput(
              type="number"
              v-model="price.from"
              :placeholder="filter.price.from"
              :rules="`maxValue:${price.to}`"
            )
          .flex.gap-x-1.items-center
            .text-sm.text-gray-500 จนถึง:
            SoInput(
              type="number"
              v-model="price.to"
              :placeholder="filter.price.to"
              :rules="`minValue:${price.from}`"
            )

      section.flex.flex-col.gap-y-2
        h6.text-h6.text-gray-500 คะแนนรีวิว  (ขึ้นไป)
        .flex.gap-x-1.items-center
          i.text-warn-400.text-xl.cursor-pointer(
            v-for="(star, i) in 5"
            :key="star"
            :class="`${score < star ? 'ph-star' : 'ph-star-fill'}`"
            class="hover:text-warn-900"
            @click="score = star"
            @mouseover="score = star"
          )
          i.text-gray-500.text-xl.cursor-pointer.ph-x.ml-auto.cursor-pointer(@click="score = 0")
      .flex.flex-col.gap-y-2
        SoButton(block type="submit") ค้นหา
        SoButton(block mode="outline" @click="clearFilter") ลบทั้งหมด

</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watchEffect } from '@nuxtjs/composition-api';
import { Filter, DEFAULT_FILTER } from '@/type/filter'

const filter = defineComponent({
  props: {
    filter: {
      type: Object as () => Filter,
      default: () => DEFAULT_FILTER,
    },
  },
  setup(props: any) {
    const animalOptions = ref([])
    const categoryOptions = ref([])

    const filtered = computed(() => ({
      animals: animalOptions.value?.filter((op: any) => op.selected).map((op: any) => op.value),
      categories: categoryOptions.value?.filter((op: any) => op.selected).map((op: any) => op.value),
    }));
    const price = reactive({
      from: 0, to: 0
    })
    const score = ref(3);

    watchEffect(() => {
      animalOptions.value = props.filter?.animals?.map((op: any) => ({value: op, name: op, selected: false}))
      categoryOptions.value = props.filter?.categories?.map((op: any) => ({value: op, name: op, selected: false}))
      price.from = props.filter.price.from;
      price.to = props.filter.price.to;
    });

    const submit = () => {
      console.log('submit', {
        ...filtered.value,
        price,
        score: score.value,
      });
    }

    const clearFilter = () => {
      animalOptions.value = props.filter?.animals?.map((op: any) => ({value: op, name: op, selected: false}))
      categoryOptions.value = props.filter?.categories?.map((op: any) => ({value: op, name: op, selected: false}))
      price.from = props.filter.price.from;
      price.to = props.filter.price.to;
      score.value = 0;
    }

    return {
      animalOptions,
      categoryOptions,
      filtered,

      price,
      score,

      submit,
      clearFilter,
    };
  },
});

export default filter;
</script>

<style lang="scss" scoped>
// .filter {}
</style>
