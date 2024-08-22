<template>
  <container>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="listLoading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div v-for="(item, index) in listData" :key="index" :title="item" class="w-full rounded mt-5">
          <div class="flex">
            <div class="w-28 h-28 bg-blue-200 flex justify-center	items-center">{{ item.img }}</div>
          <div>{{ item.title }}</div>
          </div>
          
        </div>
      </van-list>
    </van-pull-refresh>
  </container>
</template>
<script setup lang="ts">
import { getList } from '@/api/service/unlimitList';
import { useInfiniteQuery, useQuery } from '@tanstack/vue-query';
definePage({
  name: 'unlimitedLists',
  meta: {
    level: 2,
    title: '无限加载',
    i18n: 'home.unlimitedLists',
  },
});
const finished = ref(false);
const refreshing = ref(false);
const query = reactive({
  page: 1,
  limit: 10,
});

const onLoad = () => {
  // if()
  query.page += 1;
  console.log(listData,"2323");
};
// const { data: listData, isLoading:listLoading } = useQuery({
//   queryKey: ['unlimitedLists'],
//   queryFn: async () => {
//     const res = await getList(query);
//     return res;
//   },
  
// });
const { data, fetchNextPage, hasNextPage, isFetchingNextPage,status} = useInfiniteQuery({
  queryKey: ['unlimitedLists'],
  queryFn: async (query) => getList(query),
  getNextPageParam: (lastPage,pages) => {
    if(lastPage.length < query.limit) {
      return false
    }
  }
})
const onRefresh = () => {
  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态

  query.page = 1;
};
</script>
<style scoped></style>
