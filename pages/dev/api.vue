<template lang="pug">
LayoutPrimary.api
  .flex.flex-col.gap-y-4
    h1 hello {{ created }}
    SoButton(@click="callAPI") Click me
    p {{ user }}
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api';
import { userApi } from '@/api/user';

const api = defineComponent({
  setup() {
    const { getUser, getIsCreated } = userApi();
    const created = ref(false);
    const user = ref({});

    const callAPI = async () => {
      const res = await getIsCreated();
      created.value = res;
      const profile = await getUser();
      console.log(profile)
      user.value = profile;
    }

    return {
      created,
      user,
      callAPI,
    }
  },
});

export default api;
</script>

<style lang="scss" scoped>
// .api {}
</style>
