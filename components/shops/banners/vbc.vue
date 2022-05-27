<template lang="pug">
.vbc-banner
  .flex.items-center(style="background-image: url('/vbc/banner.png'); background-position: center; height: 300px;")
    .container
      .grid-container-12.items-center
        .col-span-1
          .relative
            img(src="/shop/01.png")
            SoTag.absolute.bottom-0.transform-x-center
        .col-span-7
          .flex.flex-col.gap-y-1
            h6.text-white VBC Kit Tech
            .text-sm.text-white ชุดตรวจวัดคุณภาพน้ำสำหรับการเพาะเลี้ยงสัตว์น้ำ
        .col-span-2
          SoButton(size="md" block leading="book" mode="outline:white" @click="$router.push('/vbc/e-manual')") E-manual
        .col-span-2
          .flex.items-center.justify-between
            .w-px.h-12.bg-white
            .flex.flex-col.gap-y-1
              .flex.items-center.gap-x-1
                i.ph-tote-simple.text-md.text-white
                .text-sm.text-white {{ '100' }}
              .text-sm.text-white สินค้า
            .w-px.h-12.bg-white
            .flex.flex-col.gap-y-1
              .flex.items-center.gap-x-1
                i.ph-star.text-md.text-white
                .text-sm.text-white {{ '4.9' }}
              .text-sm.text-white คะแนน
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const VBCbanner = defineComponent({
  // setup() {},
});

export default VBCbanner;
</script>

<style lang="scss" scoped>
// .vbc-banner {}
</style>
