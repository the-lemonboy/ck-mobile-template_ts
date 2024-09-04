<template>
  <container>
    <login-in />
  </container>
</template>
<script setup lang="ts">
import loginIn from './loginIn.vue';

definePage({
  name: 'login',
  meta: {
    level: 0,
  },
});
</script>
<style scoped></style>
