<template lang="pug">
.modal.container.py-12
  SoModalForgetPasswordRequest(
    ref="modal"
  )
  .flex.gap-x-4
    SoButton(@click="open") Open
    SoButton(@click="close") Close
  
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

const modal = defineComponent({
  setup() {

    // MODAL
    const modal = ref('');
    const open = () => (modal.value as any).open();
    const close = () => (modal.value as any).close();

    return {
      modal,
      open,
      close,
    };
    
  },
});

export default modal;
</script>

<style lang="scss" scoped>
// .modal {}
</style>
