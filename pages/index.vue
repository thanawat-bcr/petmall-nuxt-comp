<template lang="pug">
.index.bg-gray-200.w-screen.h-screen
  SoButton(type="main" size="lg") Hello
  SoButton(type="main" size="md") Hello
  SoButton(type="main" size="sm") Hello
  SoButton(type="main") Hello
  //- Vee Validate Tester
  //- ValidationObserver
    ValidationProvider(rules="required|email" v-slot="{ errors }")
      input.bg-green-200(v-model="user.email" type="email" name="email" placeholder="email")
      span {{ errors[0] }}
  //- CommonForm(@submit="submit")
    .form--group
      .form--row
        CommonInput(
          v-model="user.email"
          :icon="'/icons/mail.svg'"
          placeholder="Email"
          rules="required|email"
        ) Email
        CommonInput(
          v-model="user.password"
          placeholder="Password"
          rules="required"
          type="password"
        ) Password
      .form--row
        input(type="submit" value="Submit")
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const index = defineComponent({
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

export default index;
</script>

<style lang="scss">
.index {
  @apply container mx-auto;
}
</style>