<template lang="pug">
.checkbox
  .container
    .flex.flex-col.gap-y-2
      SoCheckbox(
        v-for="ch in checkboxes"
        :key="ch.value"
        v-model="ch.selected"
      ) {{ ch.name }}

    .my-8 

    .text-alert-700.my-2(
      v-for="ch in checkboxes"
    ) {{ ch }}

    .my-8 

    .text-green-700.my-2(
      v-for="sl in selected"
    ) {{ sl.value }}
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from '@nuxtjs/composition-api';

const checkbox = defineComponent({
  layout: 'primary',
  setup() {
    const selected = computed(() => checkboxes.filter(ch => ch.selected));
    
    // USE VALUE -> return
    // USE NAME -> LABEL
    // USE SELECTED -> TOGGLE SELECT
    const checkboxes = reactive([
      { value: 0, name: 'Choice 0', selected: false },
      { value: 1, name: 'Choice 1', selected: true },
      { value: 2, name: 'Choice 2', selected: false },
      { value: 3, name: 'Choice 3', selected: true },
      { value: 4, name: 'Choice 4', selected: false },
    ]);

    const selectHandler = (value: any) => { console.log(value); };

    return { selected, checkboxes, selectHandler };
  },
});

export default checkbox;
</script>

<style lang="scss" scoped>
// .checkbox {}
</style>
