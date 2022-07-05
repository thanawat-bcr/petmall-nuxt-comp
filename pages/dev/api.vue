<template lang="pug">
LayoutPrimary.api
  .flex.flex-col.gap-y-4
    h1 hello {{ created }}
    SoButton(@click="callAPI") Click me
    SoButton(@click="fetching") UseAxios
    p {{ user }}
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api';
import { userApi } from '@/api/user';
import { axios } from '@/use/useAxios';

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

    const fetching = async () => {
      try {
        const res = await axios.get('/user/me');
        console.log(res);
      }catch(err) {
        console.log(err);
      }
    }

    return {
      created,
      user,
      callAPI,

      fetching,
    }
  },
});

export default api;
</script>

<style lang="scss" scoped>
// .api {}
</style>
