<template lang="pug">
section.banner.container.relative
  img(src="/ads/sopet/banner.png").rounded-lg
  .banner-text.flex.flex-col.gap-y-6
    h4.en.font-extrabold SOPET.CO
    .text-lg
      span ปรึกษาและรับคำแนะนำจาก
      br
      span สัตวแพทย์ผู้เชี่ยวชาญผ่าน
      br
      span แพลตฟอร์ม SOPet
    SoButton(mode="main" trailing="arrow-right") ไปยัง SOPet
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const Banner = defineComponent({
  // setup() {},
});

export default Banner;
</script>

<style lang="scss" scoped>
.banner {
  .banner-text {
    @apply absolute;
    top: 50%;
    left: 96px;
    transform: translateY(-50%);
  }
}
</style>
