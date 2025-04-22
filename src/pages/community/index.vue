<template>
  <div>
    <waterfall></waterfall>
  </div>
</template>
<script setup lang="ts">
import waterfall from './waterfall.vue';
definePage({
  name: 'community',
  meta: {
    level: 1,
  },
});

const { t } = useI18n();
</script>
