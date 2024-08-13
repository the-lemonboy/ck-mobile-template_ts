<template>
<container>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell v-for="item in list" :key="item" :title="item" />
  </van-list>
</van-pull-refresh>
</container>

</template>
<script setup lang="ts">
import {getList} from '@/api/service/unlimitList'
definePage({
  name:'unlimitedLists',
  meta: {
    level: 2,
    title: '无限加载',
    i18n: 'home.unlimitedLists',
  }
})
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const refreshing = ref(false);
    const query = reactive({
      page:1,
      limit:10,
    });
    const onLoad = () => {
      getList(query).then((res) => {
        if (refreshing.value) {
          list.value = [];
          refreshing.value = false;
        }
        list.value = list.value.concat(res.data);
        loading.value = false;
      })
    };

    const onRefresh = () => {
      // 清空列表数据
      finished.value = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      loading.value = true;
      onLoad();
    };
</script>
<style scoped></style>
