<template lang="pug">
LayoutPrimary.addresses(color)
  .flex.flex-col.gap-y-8

    .so-grid

      section(class="hidden md:block col-span-4 md:col-span-2 lg:col-span-3")
        HeaderProfileSidenav

      section.flex.flex-col.gap-y-8(class="col-span-4 md:col-span-6 lg:col-span-9")
        //- HEADER
        .flex.justify-between
          .flex.flex-col.gap-y-1
            h4.text-gray-500(class="text-h5 lg:text-h4") ที่อยู่ของฉัน
            .text-gray-500(class="text-sm lg:text-md") เพิ่มที่อยู่สำหรับส่งสินค้าของคุณ
          SoButton(size="sm" leading="plus" @click="$router.push('/profile/address/new')") เพิ่มที่อยู่
        .line.w-full.h-px.bg-gray-200

        //- BODY
        section.flex.flex-col.gap-y-4(v-if="addresses.length > 0")
          AddressProfile(
            v-for="address in addresses"
            :key="address.id"
            :address="address"
          )
        //- EMPTY STATE
        section.flex.flex-col.gap-y-4(v-else)
          .bg-gray-100.flex.items-center.justify-center.py-12.rounded-lg
            .text-md.text-gray-500 คุณยังไม่ได้เพิ่มที่อยู่ในการจัดส่ง

</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, Ref, useRouter } from '@nuxtjs/composition-api';
import { getAddresses } from '@/api/index';

const addresses = defineComponent({
  setup() {
    const router = useRouter();
    const addresses = ref([]);
    onMounted(async () => {
      const data = await getAddresses();
      // Sort put default on first index
      addresses.value = data.sort((a: any, b: any) => (a.default === b.default) ? 0 : a.default ? -1 : 1);
    })

    return {
      addresses,
    }
  },
});

export default addresses;
</script>

<style lang="scss" scoped>
// .addresses {}
</style>
