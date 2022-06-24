<template lang="pug">
.flex.flex-col.px-4.rounded-lg.gap-y-2(@click="$emit('select', address.id)")
  .flex.justify-between
    .flex.flex-col.gap-y-2
      .flex.items-center.gap-x-3
        .text-md.text-gray-500.font-bold {{ address.name }}
        SoTag(v-if="address.default" :rounded="true") ค่าเริ่มต้น
      .text-md.text-gray-500 {{ address.phone }}
    .flex.flex-col.items-end.gap-y-2
      .flex.items-center.gap-x-3
        .text-md.text-gray-500.underline.cursor-pointer(
          class="hidden md:block"
          @click.stop="$emit('edit', address.id)"
        ) แก้ไข
        .text-md.text-gray-500.underline.cursor-pointer(
          @click.stop="$emit('delete', address.id)"
        ) ลบ
      span(class="hidden md:block")
        SoButton(
          size="sm"
          mode="outline"
          :disabled="address.default"
          @click="$emit('updateDefault', address.id)"
        ) ตั้งเป็นค่าเริ่มต้น
  .text-sm.text-gray-500.truncate(class="w-full md:w-3/4") {{ address.address }}
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const AddressCard = defineComponent({
  props: {
    address: {},
  },
  // setup() {},
});

export default AddressCard;
</script>

<style lang="scss" scoped>
// .address-card {}
</style>
