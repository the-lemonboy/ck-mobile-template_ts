<script setup lang="ts">
defineProps({
  paddingX: {
    type: Number,
    default: 16,
  },
});
</script>

<template>
  <main
    class="absolute left-0 box-border w-full overflow-y-auto"
    :style="`padding-left: ${paddingX}px; padding-right: ${paddingX}px; height: calc(100% - 4rem); padding-top: 4rem;`"
  >
    <slot />
  </main>
</template>
