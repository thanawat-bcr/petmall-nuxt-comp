<template lang="pug">
.list.grid-container
  //- SIDENAV FOR FILTER
  aside.col-span-2.flex.flex-col.gap-y-6
    .flex.flex-col.gap-y-2
      h6.text-gray-500 หมวดหมู่ที่เกี่ยวข้อง
      .flex.flex-col.gap-y-1
        .text-sm.text-gray-500.cursor-pointer(
          v-for="op in filters.categories"
          :key="op"
          @click="filter.category = op"
        ) {{ op }}
        .flex.gap-x-1.items-center.cursor-pointer
          .text-sm.text-gray-400 เพิ่มเติม
          i.ph-caret-down.text-xs.text-gray-400

    .flex.flex-col.gap-y-2
      h6.text-gray-500 แบรนด์
      .flex.flex-col.gap-y-1
        SoCheckbox(
          v-for="op in filters.brands"
          :key="op.value"
          v-model="op.selected"
          @input="filters.brandFilterHandler"
        ) {{ op.value }}
        .flex.gap-x-1.items-center.cursor-pointer
          .text-sm.text-gray-400 เพิ่มเติม
          i.ph-caret-down.text-xs.text-gray-400

    .flex.flex-col.gap-y-2
      h6.text-gray-500 ช่วงราคา
      .flex.flex-col.gap-y-3
        .flex.gap-x-1.items-center
          SoInput(size="sm" placeholder="฿ ต่ำสุด" v-model="filter.price.start" type="number")
          i.ph-minus.text-sm.text-gray-400
          SoInput(size="sm" placeholder="฿ สูงสุด" v-model="filter.price.end" type="number")
        SoButton(size="sm" block) ตกลง

    .flex.flex-col.gap-y-2
      h6.text-gray-500 คะแนนรีวิว
      .flex.flex-col.gap-y-1
        .flex.gap-x-1.items-center.cursor-pointer(
          v-for="score in filters.scores"
          :key="score"
          @click="filter.score = score"
        )
          i.ph-star-fill.text-warn-400.text-xl(v-for="s in score" :key="s")
          i.ph-star.text-warn-400.text-xl(v-for="s in (5-score)" :key="s")
          .text-sm.text-gray-500.ml-1(v-if="score < 5") ขึ้นไป

    .flex.flex-col.gap-y-2
      h6.text-gray-500 ช่วงอายุ
      .flex.flex-col.gap-y-1
        SoCheckbox(
          v-for="op in filters.ages"
          :key="op.value"
          v-model="op.selected"
          @input="filters.ageFilterHandler"
        ) {{ op.value }}

    .flex.flex-col.gap-y-2
      h6.text-gray-500 ขนาดสายพันธ์
      .flex.flex-col.gap-y-1
        SoCheckbox(
          v-for="op in filters.sizes"
          :key="op.value"
          v-model="op.selected"
          @input="filters.sizeFilterHandler"
        ) {{ op.value }}

    .flex.flex-col.gap-y-2
      h6.text-gray-500 ส่วนผสม
      .flex.flex-col.gap-y-1
        SoCheckbox(
          v-for="op in filters.ingredients"
          :key="op.value"
          v-model="op.selected"
          @input="filters.ingredientFilterHandler"
        ) {{ op.value }}

  .col-span-10

</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const list = defineComponent({
  layout: 'primary',
  mounted() {
    this.$nuxt.$emit('setLayout', { carousel: true });
  },
  setup() {
    const filter = reactive({
      category: null,
      brand: [],
      price: { start: null, end: null },
      score: 0,
      age: [],
      size: [],
      ingredient: [],
    });
    const filters = reactive({
      categories: ['อาหารสุนัขแบบแห้ง','อาหารสุนัขแบบกระป๋อง','อาหารเสริมสำหรับสุนัข','อาหารบาร์ฟ'],
      brands: [
        { value: 'อาหารสุนัขแบบแห้ง', selected: false },
        { value: 'อาหารสุนัขแบบกระป๋อง', selected: false },
        { value: 'อาหารเสริมสำหรับสุนัข', selected: false },
        { value: 'อาหารบาร์ฟ', selected: false },
      ],
      scores: [5,4,3,2,1],
      ages: [
        { value: 'ทุกวัย', selected: false },
        { value: 'วัยเด็ก (2-6 เดือน)', selected: false },
        { value: 'วัยรุ่น (6 เดือน - 2 ปี)', selected: false },
        { value: 'วัยผู้ใหญ่ (2-7 ปี)', selected: false },
        { value: 'วัยชรา (7-12 ปีขึ้นไป)', selected: false },
      ],
      sizes: [
        { value: 'เล็กพิเศษ', selected: false },
        { value: 'เล็ก', selected: false },
        { value: 'กลาง', selected: false },
        { value: 'ใหญ่', selected: false },
      ],
      ingredients: [
        { value: 'เนื้อวัว', selected: false },
        { value: 'เนื้อหมู', selected: false },
        { value: 'เนื้อแกะ', selected: false },
        { value: 'ผัก', selected: false },
      ],
      brandFilterHandler: () => { filter.brand = (filters.brands.filter(item => item.selected).map(item => item.value) as any); },
      ageFilterHandler: () => { filter.age = (filters.ages.filter(item => item.selected).map(item => item.value) as any); },
      sizeFilterHandler: () => { filter.size = (filters.sizes.filter(item => item.selected).map(item => item.value) as any); },
      ingredientFilterHandler: () => { filter.ingredient = (filters.ingredients.filter(item => item.selected).map(item => item.value) as any); },
    });

    return {
      filter,
      filters,
    };
  },
});

export default list;
</script>

<style lang="scss" scoped>
// .list {}
</style>
