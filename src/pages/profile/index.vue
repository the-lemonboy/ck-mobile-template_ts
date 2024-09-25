<template>
  <Container pb-60>
    <div mx-auto pt-15 text-center text-16 text-dark dark:text-white>
      {{ t('profile.placeholder') }}
    </div>
    <div class="absolute bottom-28 left-1/2 w-3/4 -translate-x-1/2">
      <van-button round block type="primary" native-type="submit" :to="{ name: 'login' }">
        {{ t('login.title') }}
      </van-button>
    </div>
  </Container>
</template>
<script setup lang="ts">
definePage({
  name: 'profile',
  meta: {
    level: 1,
  },
});

const { t } = useI18n();
</script>
