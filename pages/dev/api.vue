<template lang="pug">
LayoutPrimary.api
  .flex.flex-col.gap-y-4
    h1 hello {{ created }}
    SoButton(@click="callAPI") Click me
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { userApi } from '@/api/user';

const api = defineComponent({
  setup() {
    const { isCreated } = userApi();
    const created = ref(false);

    const callAPI = async () => {
      const res = await isCreated();
      created.value = res.data;
    }

    return {
      created,
      callAPI,
    }
  },
});

export default api;
</script>

<style lang="scss" scoped>
// .api {}
</style>
