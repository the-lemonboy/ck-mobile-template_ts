<template>
  <Container>
    <div class="data-label">
      {{ $t('mock.fromAsyncData') }}
    </div>

    <div class="data-content bg-white dark:bg-[--van-background-2]">
      <div v-if="messages">
        {{ messages }}
      </div>
      <VanEmpty v-else :description="$t('mock.noData')" />
    </div>

    <van-space class="m-10" direction="vertical" fill>
      <VanButton type="primary" round block @click="pull">
        {{ $t('mock.pull') }}
      </VanButton>
      <VanButton type="default" round block @click="messages = ''">
        {{ $t('mock.reset') }}
      </VanButton>
    </van-space>
  </Container>
</template>
<script setup lang="ts">
import { GetMockData } from '@/api/service/mockApi';

definePage({
  name: 'mock',
  meta: {
    level: 2,
    title: '💿 Mock 指南',
    i18n: 'home.mockGuide',
  },
});

const messages = ref<string>('');

function pull() {
  GetMockData().then((res) => {
    console.log(res);
    messages.value = res.data.content;
  });
}
</script>
<style lang="less" scoped>
.data-label {
  color: #969799;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-top: 10px;
}

.data-content {
  height: 300px;
  padding: 20px;
  line-height: 30px;
  margin-top: 20px;
  font-size: 16px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
