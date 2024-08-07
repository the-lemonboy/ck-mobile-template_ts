<template>
   <Container>
<div>{{ TableData.data }}</div>
   </Container>

</template>
<script setup lang="ts">
import { queryTest } from '@/api'
import { useQuery } from '@tanstack/vue-query'

defineOptions({
  name: 'ImitateHttp',
});
definePage({
  name: 'imitateHttp',
  meta: {
    level: 2,
    title: '🌐 ImitateHttp 指南',
    i18n: 'home.imitateHttp',
  },
});
const TableData = ref([]);
watch(TableData, (val) => {
  if (val) {
    console.log(val);
  }
});

onMounted(() => {
  const { data:testdata } = useQuery({
    queryKey: ['todos'],
    queryFn: async ()=>{
      const data = await queryTest()
      return data

    }
  });
});

// 假设 queryTest 是你的
</script>
<style scoped></style>
