<template>
  <Container>
    <login-in />
  </Container>
</template>
<script setup lang="ts">
import loginIn from './loginIn.vue';

definePage({
  name: 'login',
  meta: {
    level: 2,
    title: '登录',
    i18n: 'login.title',
  },
});
</script>
<style scoped></style>
