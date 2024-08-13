<template>
     <container>
        <div class="grid grid-cols-3 gap-4">
            <div class="w-28 h-28 bg-blue-200 flex justify-center	items-center"><Icon icon="teenyicons:search-outline" class="w-8 h-8 "></Icon></div>
            <div class="w-28 h-28 bg-blue-200 flex justify-center	items-center"><Icon icon="tdesign:arrow-down-circle" class="w-8 h-8 "></Icon></div>
            <div class="w-28 h-28 bg-blue-200 flex justify-center	items-center"><Icon icon="tdesign:address-book" class="w-8 h-8 "></Icon></div>
            <div class="w-28 h-28 bg-blue-200 flex justify-center	items-center"><Icon icon="tdesign:folder-add" class="w-8 h-8 "></Icon></div>
            <div class="w-28 h-28 bg-blue-200 flex justify-center	items-center"><Icon icon="ei:like" class="w-8 h-8 "></Icon></div>
            <div class="w-28 h-28 bg-blue-200 flex justify-center	items-center"><Icon icon="ei:sc-github" class="w-8 h-8 "></Icon></div>
            <div class="w-28 h-28 bg-blue-200 flex justify-center	items-center"><Icon icon="ei:image" class="w-8 h-8 "></Icon></div>
        </div>
     </container>
</template>

<script setup lang="ts">
 import { Icon } from '@iconify/vue';
definePage({
  name: 'iconify',
  meta: {
    level: 2,
    title: 'iconify',
    i18n: 'home.iconify',
  },
})
   
</script>
<style scoped>
</style>
