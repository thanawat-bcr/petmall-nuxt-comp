<template lang="pug">
.radio
  .container
    .flex.flex-col.gap-y-2.mt-8
      SoRadio(
        v-for="(op, index) in options"
        :key="op.value"
        v-model="index"
        :selected="index === selected"
        @select="(index) => selected = index"
      ) {{ op.name }}

    .my-8 

    .text-alert-700.my-2(
      v-for="op in options"
    ) {{ op }}

    .my-8 

    .text-green-700.my-2 {{ options[selected] }}
  
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api';

const radio = defineComponent({
  layout: 'primary',
  setup() {
    // SELECTED -> INDEX
    const selected = ref(0);
    
    // VALUE -> return
    // NAME -> LABEL [OPTIONAL]
    const options = reactive([
      { value: 'Value: 0', name: 'Choice 0' },
      { value: 'Value: 1', name: 'Choice 1' },
      { value: 'Value: 2', name: 'Choice 2' },
      { value: 'Value: 3', name: 'Choice 3' },
      { value: 'Value: 4', name: 'Choice 4' },
    ]);

    return { selected, options };
  },
});

export default radio;
</script>

<style lang="scss" scoped>
// .radio {}
</style>
