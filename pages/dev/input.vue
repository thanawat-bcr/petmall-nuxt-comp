<template lang="pug">
.container
  SoForm.input(@submit="submit")
    .form--group
      .form--row
        SoInput(
          v-model="user.email"
          placeholder="email"
          leading="smiley"
          type="email"
          rules="required|email"
        )
        SoInput(
          v-model="user.password"
          placeholder="password"
          rules="required"
          type="password"
        )
      .form--row
        SoButton(type="submit" block) Submit
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const input = defineComponent({
  layout: 'main',
  setup() {
    const user = reactive({
      email: '',
      password: '',
    });

    const submit = () => {
      console.log(user);
    };

    return {
      user,
      submit,
    };
  },
});

export default input;
</script>

<style lang="scss">
// .input {}
</style>
