<template lang="pug">
aside.filter.w-full.h-full.flex.flex-col.gap-y-6

  SoForm(@submit="submit")
    .flex.flex-col.gap-y-6
      section.flex.flex-col.gap-y-2(v-if="filter.animals.length > 0")
        h6.text-h6.text-gray-500 ประเภทสัตว์
        .flex.flex-col.gap-y-2
          SoCheckbox(
            v-for="op in animalOptions"
            :key="op.value"
            v-model="op.selected"
            @input="submit"
          ) {{ op.value }}

      section.flex.flex-col.gap-y-2(v-if="filter.categories.length > 0")
        h6.text-h6.text-gray-500 หมวดหมู่ที่เกี่ยวข้อง
        .flex.flex-col.gap-y-2
          SoCheckbox(
            v-for="op in categoryOptions"
            :key="op.value"
            v-model="op.selected"
            @input="submit"
          ) {{ op.value }}

      section.flex.flex-col.gap-y-2
        h6.text-h6.text-gray-500 ช่วงราคา
        .flex.flex-col.gap-y-6
          .flex.gap-x-1.items-center
            .text-sm.text-gray-500 ตั้งแต่:
            SoInput(
              type="number"
              v-model="price.from"
              :placeholder="0"
              :rules="`${price.to ? 'maxValue:' + price.to : ''}`"
            )
          .flex.gap-x-1.items-center
            .text-sm.text-gray-500 จนถึง:
            SoInput(
              type="number"
              v-model="price.to"
              :placeholder="0"
              :rules="`${price.from ? 'minValue:' + price.from : ''}`"
            )
        .flex.flex-col.gap-y-2.mt-6
          SoButton(block size="sm" type="submit") ค้นหา

      section.flex.flex-col.gap-y-2
        h6.text-h6.text-gray-500 คะแนนรีวิว  (ขึ้นไป)
        .flex.gap-x-1.items-center
          i.text-warn-400.text-xl.cursor-pointer(
            v-for="(star, i) in 5"
            :key="star"
            :class="`${score < star ? 'ph-star' : 'ph-star-fill'}`"
            class="hover:text-warn-900"
            @click="score = star; submit();"
          )
          i.text-gray-500.text-xl.cursor-pointer.ph-x.ml-auto.cursor-pointer(@click="score = 0; submit();")

      section.flex.flex-col.gap-y-2
        h6.text-h6.text-gray-500.mb-2 เรียงโดย
        .text-sm.text-gray-500 สินค้าล่าสุด
        SoInput(
          size="sm"
          type="select"
          v-model="sort.createdAt"
          :options="[{ name: 'มากไปน้อย', value: 'DESC' }, { name: 'น้อยไปมาก', value: 'ASC' }]"
          placeholder="สินค้าล่าสุด"
          @input="submit"
        )
        .text-sm.text-gray-500 ราคา
        SoInput(
          size="sm"
          type="select"
          v-model="sort.price"
          :options="[{ name: 'มากไปน้อย', value: 'DESC' }, { name: 'น้อยไปมาก', value: 'ASC' }]"
          placeholder="ราคา"
          @input="submit"
        )
      .flex.flex-col.gap-y-2
        SoButton(block size="sm" mode="outline" @click="clearFilter") ลบทั้งหมด

</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, useRoute, useRouter, watchEffect } from '@nuxtjs/composition-api';
import { Filter, DEFAULT_FILTER } from '@/type/filter'

const filter = defineComponent({
  props: {
    filter: {
      type: Object as () => Filter,
      default: () => DEFAULT_FILTER,
    },
  },
  setup(props: any, ctx: any) {
    const animalOptions = ref([])
    const categoryOptions = ref([])
    const filtered = computed(() => ({
      animals: animalOptions.value?.filter((op: any) => op.selected).map((op: any) => op.value),
      categories: categoryOptions.value?.filter((op: any) => op.selected).map((op: any) => op.value),
    }));
    const search: any = ref('');
    const price: any = reactive({
      from: '', to: ''
    })
    const score: any = ref(0);
    const sort: any = reactive({
      createdAt: '',
      price: '',
    });

    const route = useRoute();
    const router = useRouter();
    watchEffect(() => {
      // console.log(route.value.query)
      const animals = (route.value.query.animals as string)?.split(',') || []
      const categories = (route.value.query.categories as string)?.split(',') || []
      const keyword = route.value.query.search || '';
      const from = route.value.query.from
      const to = route.value.query.to
      const star = route.value.query.score || 0
      const sortCreatedAt = route.value.query.createdAt || ''
      const sortPrice = route.value.query.price || ''
      if (!keyword) {
        router.push('/');
        return;
      }
      animalOptions.value = props.filter?.animals?.map((op: any) => {
        if (animals.findIndex((item: string) => item === op) > -1) return { value: op, name: op, selected: true }
        return { value: op, name: op, selected: false }
      })
      categoryOptions.value = props.filter?.categories?.map((op: any) => {
        if (categories.findIndex((item: string) => item === op) > -1) return { value: op, name: op, selected: true }
        return { value: op, name: op, selected: false }
      })

      search.value = keyword;
      price.from = from;
      price.to = to;
      score.value = star;
      sort.createdAt = sortCreatedAt
      sort.price = sortPrice
    });

    onMounted(() => submit())

    const submit = () => {
      const filter = [
        filtered.value.animals.length > 0 ? '&animals=' + filtered.value.animals : '',
        filtered.value.categories.length > 0 ? '&categories=' + filtered.value.categories : '',

        search.value ? '&search=' + search.value : '',
        price.from ? '&from=' + price.from : '',
        price.to ? '&to=' + price.to : '',
        score.value > 0 ? '&score=' + score.value : '',

        sort.createdAt ? '&createdAt=' + sort.createdAt : '',
        sort.price ? '&price=' + sort.price : '',
      ]

      const query = filter.join('').replace('&', '?');
      const body = {
        sort: {
          price: sort.price || undefined,
          createdAt: sort.createdAt || undefined,
        },
        filter: {
          brand: undefined,
          search: search.value,
          animals: filtered.value.animals,
          categories: filtered.value.categories,
          // price: { from: Number(price.from) || undefined, to: Number(price.to) || undefined },
          price: { from: Number(price.from) || 0, to: Number(price.to) || 99999 },
          review: Number(score.value) || 0,
        }
      };

      history.pushState({}, '', query || route.value.path);

      ctx.emit('filterHandler', body);
    }

    const clearFilter = () => {
      history.pushState({}, '', '?search=' + search.value);
      animalOptions.value = props.filter?.animals?.map((op: any) => ({value: op, name: op, selected: false}))
      categoryOptions.value = props.filter?.categories?.map((op: any) => ({value: op, name: op, selected: false}))
      price.from = '';
      price.to = '';
      score.value = 0;
      sort.createdAt = '';
      sort.price = '';

      const body = {
        sort: {
          price: undefined,
          createdAt: undefined,
        },
        filter: {
          brand: undefined,
          search: search.value ,
          animals: [],
          categories: [],
          price: undefined,
          review: 0,
        }
      };

      ctx.emit('filterHandler', body);
    }

    return {
      animalOptions,
      categoryOptions,
      filtered,

      search,
      price,
      score,
      sort,

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
