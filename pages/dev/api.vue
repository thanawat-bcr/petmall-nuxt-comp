<template lang="pug">
LayoutPrimary.api
  .flex.flex-col.gap-y-4
    SoButton(@click="fetching") UseAxios
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api';
import { axios } from '@/use/useAxios';

const api = defineComponent({
  setup() {
    const fetching = async () => {
      try {
        const res = await axios.get('/user/me');
        console.log(res);
      }catch(err) {
        console.log(err);
      }
    }

    return {
      fetching,
    }
  },
});

export default api;
</script>

<style lang="scss" scoped>
// .api {}
</style>
