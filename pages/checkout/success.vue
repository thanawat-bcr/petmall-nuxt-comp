<template lang="pug">
LayoutPrimary.checkout(title="ทำการสั่งซื้อ" color profile)
  .flex.flex-col.gap-y-12
    //- SUCCESS STATE
    SoState(
      img="/success/purchase.png"
      title="การสั่งซื้อสำเร็จ!"
      subtitle="สามารถตรวจสอบข้อมูลเพิ่มเติมได้ที่หน้า การสั่งซื้อของฉัน"
      primary="ไปหน้า การสั่งซื้อของฉัน"
      @primaryHandler="$router.push('/profile/purchase')"
      secondary="ช้อปสินค้าต่อเลย"
      @secondaryHandler="$router.push('/')"
    )

    ProductSuggestion
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const success = defineComponent({
  // setup() {},
});

export default success;
</script>

<style lang="scss" scoped>
// .success {}
</style>
