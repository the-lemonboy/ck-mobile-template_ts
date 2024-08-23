<template>
  <container>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="listLoading"
        :finished="finished"
        finished-text="没有更多了"
        @load="fetchNextPage"
      >
        <div
          v-for="(item, index) in listData"
          :key="index"
          :title="item"
          class="mt-5 w-full rounded"
        >
          <div class="flex">
            <div class="flex h-28 w-28 items-center justify-center bg-blue-200">{{ item.img }}</div>
            <div>{{ item.title }}</div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </container>
</template>
<script setup lang="ts">
import { getList } from '@/api/service/unlimitList';
import { useInfiniteQuery, InfiniteQueryPageParam } from 'react-query';
definePage({
  name: 'unlimitedLists',
  meta: {
    level: 2,
    title: '无限加载',
    i18n: 'home.unlimitedLists',
  },
});
type ListItem = {
  id: number;
  name: string;
  // 其他字段...
};

type QueryResponse = {
  data: ListItem[];
  // 其他响应字段...
};
const finished = ref(false);
const refreshing = ref(false);
const query = reactive({
  page: 1,
  limit: 10,
});

// const fetchNextPage = () => {
//   // if()
//   const data = getList(query);
//   return data
// };
// const { data: listData, isLoading:listLoading } = useQuery({
//   queryKey: ['unlimitedLists'],
//   queryFn: async () => {
//     const res = await getList(query);
//     return res;
//   },

// });
const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
  queryKey: ['unlimitedLists'],
  queryFn: async ({ pageParam = 1 }) => {
    const res = await getList({ ...query, page: pageParam });
    return res;
  },
  getNextPageParam: (lastPage:any, allPages:any) => {
    // lastPage 和 allPages 的类型已经推断为 QueryResponse 和 QueryResponse[]
    if (lastPage.data.length < query.limit) {
      return false;
    }
    return allPages.length + 1;
  },
});
const onRefresh = () => {
  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态

  query.page = 1;
};
</script>
<style scoped></style>
