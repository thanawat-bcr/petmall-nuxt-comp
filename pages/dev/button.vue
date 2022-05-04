<template lang="pug">
.button.flex.flex-col.gap-y-4.container
  SoButton(type="main" size="md" leading="plus" trailing="arrow-right") Button
  SoButton(type="soft" size="md" leading="plus" trailing="arrow-right" block) Button
  SoButton(type="outline" size="md" leading="plus" trailing="arrow-right") Button
  SoButton(type="text" size="md" leading="plus" trailing="arrow-right") Button
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const button = defineComponent({
  // setup() {},
});

export default button;
</script>

<style lang="scss">
// .button {}
</style>
