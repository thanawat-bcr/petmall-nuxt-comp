<template lang="pug">
.radio
  .container
    SoRadio.flex.flex-col.gap-y-8.mt-8(
      :options="options"
      v-model="user.radio"
    )

    .my-8 

    .text-green-700.my-2 {{ user.radio }}
  
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api';

const radio = defineComponent({
  layout: 'primary',
  setup() {
    const user = reactive({
      radio: 0,
    });
    
    // VALUE -> return
    // NAME -> LABEL [OPTIONAL]
    const options = reactive([
      { value: 0, name: 'Choice 0' },
      { value: 1, name: 'Choice 1' },
      { value: 2, name: 'Choice 2' },
      { value: 3, name: 'Choice 3' },
      { value: 4, name: 'Choice 4' },
    ]);

    return { options, user };
  },
});

export default radio;
</script>

<style lang="scss" scoped>
// .radio {}
</style>
