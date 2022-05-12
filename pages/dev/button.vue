<template lang="pug">
.button.flex.flex-col.gap-y-4.container
  SoButton(mode="main" size="md" leading="plus" trailing="arrow-right") Button
  SoButton(mode="soft" size="lg" leading="plus" trailing="arrow-right" block) Button
  SoButton(mode="outline" size="lg" leading="plus" trailing="arrow-right") Button
  SoButton(mode="text" size="sm" leading="plus" trailing="arrow-right") Button
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const button = defineComponent({
  layout: 'primary',
  // setup() {},
});

export default button;
</script>

<style lang="scss">
// .button {}
</style>
