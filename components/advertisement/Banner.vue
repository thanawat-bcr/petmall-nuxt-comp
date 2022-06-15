<template lang="pug">
section.banner.relative(class="h-44 md:h-56 lg:h-80")
  img(src="/ads/sopet/banner.png").h-full.rounded-lg.object-cover.object-right
  .banner-text.flex.flex-col.gap-y-2
    h4(class="text-h6 md:text-h4").en.font-extrabold SOPET.CO
    div(class="text-xs md:text-sm lg:text-lg")
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
  &::after {
    content: '';
    @apply absolute inset-0 pointer-events-none block md:hidden;
    background: linear-gradient(342.02deg, #68AFAB 12.5%, #C8E8E2 63.64%, #FFE8E1 113.93%);
    background-blend-mode: multiply;
    mix-blend-mode: multiply;
  }
  .banner-text {
    @apply absolute ml-8 md:ml-12 lg:ml-16 z-10;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
