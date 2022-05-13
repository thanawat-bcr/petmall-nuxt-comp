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
        SoInput(
          type="select"
          v-model="user.sex"
          :options="options"
          rules="required"
          placeholder="เพศ"
        )
      .form--row
        SoButton(type="submit" block) Submit
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const input = defineComponent({
  layout: 'primary',
  setup() {
    const user = reactive({
      email: '',
      password: '',
      sex: '',
    });
    
    // VALUE -> RETURN
    // NAME -> OPTION LABEL
    const options = reactive([
      { value: 'M', name: 'ชาย' },
      { value: 'F', name: 'หญิง' },
      { value: 'O', name: 'อื่นๆ' },
    ]);

    const submit = () => {
      console.log(user);
    };

    return {
      user,
      options,
      submit,
    };
  },
});

export default input;
</script>

<style lang="scss">
// .input {}
</style>
