<template>
  <container>
    <div class="mb-4">
      <span class="text-base font-bold">iconify海量资源: </span>
      <a
        class="text-blue-400"
        target="_blank"
        href="https://icon-sets.iconify.design/?category=General"
        >https://icon-sets.iconify.design/?category=General</a
      >
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div class="flex aspect-square w-full items-center justify-center bg-blue-200">
        <Icon icon="teenyicons:search-outline" class="h-1/2 w-1/2"></Icon>
      </div>
      <div class="flex aspect-square w-full items-center justify-center bg-blue-200">
        <Icon icon="tdesign:arrow-down-circle" class="h-1/2 w-1/2"></Icon>
      </div>
      <div class="flex aspect-square w-full items-center justify-center bg-blue-200">
        <Icon icon="tdesign:address-book" class="h-1/2 w-1/2"></Icon>
      </div>
      <div class="flex aspect-square w-full items-center justify-center bg-blue-200">
        <Icon icon="tdesign:folder-add" class="h-1/2 w-1/2"></Icon>
      </div>
      <div class="flex aspect-square w-full items-center justify-center bg-blue-200">
        <Icon icon="ei:like" class="h-1/2 w-1/2"></Icon>
      </div>
      <div class="flex aspect-square w-full items-center justify-center bg-blue-200">
        <Icon icon="ei:sc-github" class="h-1/2 w-1/2"></Icon>
      </div>
      <div class="flex aspect-square w-full items-center justify-center bg-blue-200">
        <Icon icon="ei:image" class="h-1/2 w-1/2"></Icon>
      </div>
      <div class="flex aspect-square w-full items-center justify-center bg-blue-200">
        <Icon icon="ic:baseline-account-circle" class="h-1/2 w-1/2"></Icon>
      </div>
      <div class="flex aspect-square w-full items-center justify-center bg-blue-200">
        <Icon icon="ic:baseline-alarm-on" class="h-1/2 w-1/2"></Icon>
      </div>
      <div class="flex aspect-square w-full items-center justify-center bg-blue-200">
        <Icon icon="mingcute:play-fill" class="h-1/2 w-1/2"></Icon>
      </div>
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
});
</script>
<style scoped></style>
