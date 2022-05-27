<template lang="pug">
.index.flex.flex-col.gap-y-8

  SoBreadcrumb(
    :breadcrumbs="breadcrumbs"
  )

  .grid-container-12
    .col-span-4.rounded-lg.bg-opacity-8.cursor-pointer(
      v-for="manual in manuals"
      :key="manual.id"
      @click="$router.push(`/vbc/e-manual/${manual.id}`)"
    )
      .flex.items-center
        .grid-container-4
          .col-span-1.p-2: img(:src="manual.img")
          .col-span-3.flex.items-center.justify-between
            .flex.flex-col.gap-y-1
              h6.text-gray-500 {{ manual.name }}
              .text-sm.text-gray-500 คู่มือการใช้อิเล็กทรอนิกส์
            i.ph-caret-right.text-gray-500.text-lg.mr-4
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const index = defineComponent({
  layout: 'primary',
  mounted() {
    this.$nuxt.$emit('setLayout', { banner: 'vbc' });
  },
  setup() {
    const breadcrumbs = reactive([
      { name: 'สินค้าทั้งหมด', to: '/vbc' },
      { name: 'E-manual', to: null },
    ]);
    const manuals = reactive([
      { id: 1, name: 'PH', img: '/product/item/01.png' },
      { id: 2, name: 'CHLORINE', img: '/product/item/02.png' },
      { id: 3, name: 'PHOSPHATE', img: '/product/item/03.png' },
      { id: 4, name: 'ALKALINITY', img: '/product/item/04.png' },
      { id: 5, name: 'NITRITE', img: '/product/item/05.png' },
      { id: 6, name: 'AMMONIUM', img: '/product/item/06.png' },
    ])

    return {
      breadcrumbs,
      manuals,
    };
  },
});

export default index;
</script>

<style lang="scss" scoped>
// .index {}
</style>
