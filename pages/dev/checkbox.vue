<template lang="pug">
.checkbox
  .container
    .flex.flex-col.gap-y-2
      SoCheckbox(
        v-for="op in options"
        :key="op.value"
        v-model="op.selected"
      ) {{ op.name }}

    .my-8 

    .text-alert-700.my-2(
      v-for="op in options"
    ) {{ op }}

    .my-8 

    .text-green-700.my-2(
      v-for="sl in selected"
    ) {{ sl }}
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from '@nuxtjs/composition-api';

const checkbox = defineComponent({
  layout: 'primary',
  setup() {
    const selected = computed(() => options.filter(op => op.selected));
    
    // VALUE -> return
    // NAME -> LABEL [OPTIONAL]
    // SELECTED
    const options = reactive([
      { value: 0, name: 'Choice 0', selected: false },
      { value: 1, name: 'Choice 1', selected: true },
      { value: 2, name: 'Choice 2', selected: false },
      { value: 3, name: 'Choice 3', selected: true },
      { value: 4, name: 'Choice 4', selected: false },
    ]);

    return { selected, options };
  },
});

export default checkbox;
</script>

<style lang="scss" scoped>
// .checkbox {}
</style>
