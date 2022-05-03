<template lang="pug">
.common-form
  ValidationObserver(v-slot="{ invalid, handleSubmit }")
    form(@submit.prevent="handleSubmit(onSubmit)")
      slot
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const CommonForm = defineComponent({
  setup(props, ctx) {
    const onSubmit = () => { ctx.emit('submit'); };

    return {
      onSubmit,
    };
  },
});

export default CommonForm;
</script>

<style lang="scss">
.common-form {
  .form--group {
    @apply flex flex-col my-2;
    .form--row {
      @apply flex my-1;
      .common-input {
        @apply flex-1 mx-2;
      }
    }
  }
}
</style>
