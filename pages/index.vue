<template lang="pug">
.index.bg-white.w-screen.h-screen
  //- .flex.items-center.justify-center.w-8.h-8.bg-alert-900
    i.ph-smiley.text-xl.text-white
  .flex.gap-x-4
    SoButton(type="main" size="md" leading="plus" trailing="arrow-right") Button
    SoButton(type="soft" size="md" leading="plus" trailing="arrow-right" block) Button
    SoButton(type="outline" size="md" leading="plus" trailing="arrow-right") Button
    SoButton(type="text" size="md" leading="plus" trailing="arrow-right") Button
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