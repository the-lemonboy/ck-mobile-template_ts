<script setup lang="ts">
definePage({
  name: 'unocss',
  meta: {
    level: 2,
    title: '🎨  tailwindcss示例',
    i18n: 'home.tailwindcssExample',
  },
})
</script>

<template>
  <Container>
    <h1 class="text-2xl text-blue-300" dark:text-white>
      Hello, tailwindcss!
    </h1>

    <p class="mt-4 text-gray-700 dark:text-green-300">
      This is a simple example of tailwindcss示例 in action.
    </p>

    <button class="btn">
      Button
    </button>
  </Container>
</template>
