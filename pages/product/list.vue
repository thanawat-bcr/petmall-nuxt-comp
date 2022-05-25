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

  //- MAIN SECTION
  section.col-span-10.flex.flex-col.gap-y-4

    //- BRANDS HEADER
    .flex.justify-between.items-center
      .flex.gap-x-1
        .text-sm.text-gray-500 แบรนด์ที่เกี่ยวข้องกับ
        .text-sm.text-orange-800 "{{ 'อาหารสัตว์เลี้ยง' }}"
      .flex.gap-x-1.items-center.cursor-pointer
        .text-sm.text-orange-900 ร้านค้าอื่นๆ
        i.ph-caret-right.text-orange-900.text-md

    //- BRANDS CARD
    .flex.justify-between.px-8.py-4.bg-gray-opacity-8.rounded-sm
      .flex.items-center.gap-x-6
        .relative
          img(src="/shop/01.png")
          SoTag.absolute.bottom-0.transform-x-center
        .flex.flex-col.gap-y-1.justify-center
          h6.text-gray-500 Brand name
          .text-sm.text-gray-500 Account name
      .flex.items-center.gap-x-4
        .w-px.h-full.bg-gray-200
        .flex.flex-col.gap-y-1
          .flex.items-center.gap-x-1
            i.ph-tote-simple.text-md.text-orange-800
            .text-sm.text-orange-800 {{ '100' }}
          .text-sm.text-gray-500 สินค้า
        .w-px.h-full.bg-gray-200
        .flex.flex-col.gap-y-1
          .flex.items-center.gap-x-1
            i.ph-star.text-md.text-orange-800
            .text-sm.text-orange-800 {{ '4.9' }}
          .text-sm.text-gray-500 คะแนน

    //- ITEMS HEADER
    .flex.justify-between.items-center
      .flex.gap-x-1
        .text-sm.text-gray-500 ค้นหา
        .text-sm.text-orange-800 "{{ 'อาหารสัตว์เลี้ยง' }}"

    //- ITEMS SOPRTING
    .flex.justify-between.items-center
      .flex.items-center.gap-x-4
        h4.text-gray-500 {{ 'อาหารสัตว์เลี้ยง' }}
        .text-sm.text-gray-400.ml-1 เรียงโดย
        .flex.items-center.gap-x-4
          SoInput(
            size="sm"
            type="select"
            v-model="sort.date"
            :options="sorts.dates"
            placeholder="สินค้าล่าสุด"
          )
          SoInput(
            size="sm"
            type="select"
            v-model="sort.price"
            :options="sorts.prices"
            placeholder="ราคา"
          )
      .flex.items-center.gap-x-2
        .text-sm.text-gray-400 {{ pagination.current }} / {{ pagination.total }}
        .flex.gap-x-1
          SoButton(
            leading="caret-left"
            size="paginator"
            mode="text"
            :disabled="(pagination.current === 1)"
            @click="paginate(pagination.current - 1)"
          )
          SoButton(
            leading="caret-right"
            size="paginator"
            mode="text"
            :disabled="(pagination.current === pagination.total)"
            @click="paginate(pagination.current + 1)"
          )

    .grid.grid-cols-10.gap-4
      ProductItem.col-span-2(v-for="item in items" :key="item.id" :item="item")

    .flex.justify-center
      SoPaginator(
        :pagination="pagination"
        @paginate="paginate"
      )
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

    const sort = reactive({
      date: null,
      price: null,
    });
    const sorts = reactive({
      dates: [{ value: 'มากไปน้อย' }, { value: 'น้อยไปมาก' }],
      prices: [{ value: 'มากไปน้อย' }, { value: 'น้อยไปมาก' }],
    });

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

    const pagination = reactive({
      current: 1,
      total: 16,
    });
    const paginate = (page: number) => {
      pagination.current = page;
    };

    return {
      filter,
      filters,

      sort,
      sorts,

      items,

      pagination,
      paginate,
    };
  },
});

export default list;
</script>

<style lang="scss" scoped>
// .list {}
</style>
