<template>
  <Container class="h-screen">
    <div>这是logo</div>
    <div class="flex w-full flex-col justify-center">
      <input placeholder="用户名" class="w-9/10 mb-4 h-16 p-4" />
      <input placeholder="密码" class="w-9/10 h-16 p-4" />
    </div>
  </Container>
</template>
<script setup lang="ts">
definePage({
  name: 'unocss',
  meta: {
    level: 2,
    title: '🎨  tailwindcss示例',
    i18n: 'home.tailwindcssExample',
  },
});
</script>
<style scoped></style>
