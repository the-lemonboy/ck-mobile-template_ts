<script setup lang="ts">
defineOptions({
  name: 'KeepAlive',
});

definePage({
  name: 'KeepAlive',
  meta: {
    level: 2,
    title: '🧡 KeepAlive',
    i18n: 'home.keepAlive',
    keepAlive: true,
  },
});
const value = ref(1);
</script>

<template>
  <Container>
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
      <p>{{ $t('keepAlive.label') }}</p>
      <van-stepper v-model="value" />
    </div>
  </Container>
</template>
