<template>
  <Container>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="waterfall-container">
          <div class="waterfall-column">
            <div v-for="(item, index) in leftItems" :key="index" class="waterfall-item">
              <van-image
                :src="item.image"
                fit="cover"
                :alt="item.title"
                @click="item.type === 'video' ? playVideo(item) : null"
              >
                <template #error>
                  <van-icon name="photo-fail" />
                </template>
              </van-image>
              <span v-if="item.type === 'video'" class="absolute right-2 top-2 h-4 w-4 rounded">
                <Icon icon="carbon:play-filled" class="h-full w-full"></Icon
              ></span>
              <div class="item-content">
                <h3 class="item-title">{{ item.title }} </h3>
                <p class="item-description">{{ item.description }} </p>
                <div class="mt-2 flex items-center justify-between  w-full">
                  <span class="flex items-center">
                    <van-image
                      :src="item.avatar"
                      fit="cover"
                      :alt="item.title"
                      width="18"
                      height="18"
                      round
                    >
                      <template #error>
                        <van-icon name="photo-fail" />
                      </template>
                    </van-image>
                    <span class="ml-1 text-gray-400 text-xs">{{ item.username }} </span>
                  </span>
                  <span class="flex items-center">
                    <Icon icon="ant-design:like-twotone" class="h-full w-full"></Icon>
                    <span class="text-xs ml-1 text-gray-400">{{item.likes}}</span>
                  </span>
                </div>
              </div>
              <van-popup
                closeable
                close-icon-position="top-left"
                v-if="item.type === 'video' && currentVideo === item"
                v-model:show="showVideo"
                position="center"
                class="video-popup"
                @closed="destroyVideo"
              >
                <video :src="item.videoUrl" controls class="video-player" @click.stop></video>
              </van-popup>
            </div>
          </div>
          <div class="waterfall-column">
            <div v-for="(item, index) in rightItems" :key="index" class="waterfall-item">
              <van-image
                :src="item.image"
                fit="cover"
                :alt="item.title"
                @click="item.type === 'video' ? playVideo(item) : null"
              >
                <template #error>
                  <van-icon name="photo-fail" />
                </template>
              </van-image>
              <span v-if="item.type === 'video'" class="absolute right-2 top-2 h-4 w-4 rounded">
                <Icon icon="carbon:play-filled" class="h-full w-full"></Icon
              ></span>
              <div class="item-content">
                <h3 class="item-title">{{ item.title }} </h3>
                <p class="item-description">{{ item.description }} </p>
                <div class="mt-2 flex items-center justify-between  w-full">
                  <span class="flex items-center">
                    <van-image
                      :src="item.avatar"
                      fit="cover"
                      :alt="item.title"
                      width="18"
                      height="18"
                      round
                    >
                      <template #error>
                        <van-icon name="photo-fail" />
                      </template>
                    </van-image>
                    <span class="ml-1 text-gray-400 text-xs">{{ item.username }} </span>
                  </span>
                  <span class="flex items-center">
                    <Icon icon="ant-design:like-twotone" class="h-full w-full"></Icon>
                    <span class="text-xs ml-1 text-gray-400">{{item.likes}}</span>
                  </span>
                </div>
              </div>
              <van-popup
                closeable
                close-icon-position="top-left"
                v-if="item.type === 'video' && currentVideo === item"
                v-model:show="showVideo"
                position="center"
                class="video-popup"
                @closed="destroyVideo"
              >
                <video :src="item.videoUrl" controls class="video-player" @click.stop></video>
              </van-popup>
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </Container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

import { Icon } from '@iconify/vue';

import LoginService from '@/api/service/user';

import { faker } from '@faker-js/faker/locale/zh_CN';

definePage({
  name: 'waterfall',
  meta: {
    level: 1,
  },
});

const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
const showVideo = ref(false);
const currentVideo = ref<WaterfallItem | null>(null);
const items = ref<WaterfallItem[]>([]);

// 分配左右两列数据
const leftItems = computed(() => items.value.filter((_, index) => index % 2 === 0));
const rightItems = computed(() => items.value.filter((_, index) => index % 2 === 1));

// 加载更多数据
const onLoad = async () => {
  loading.value = true;
  const newItems = (await LoginService.GetCommunity()).data.data;
  items.value.push(...newItems);
  loading.value = false;
  if (items.value.length >= 50) {
    finished.value = true;
  }
};

// 下拉刷新
const onRefresh = () => {
  finished.value = false;
  items.value = [];
  refreshing.value = false;
  onLoad();
};

// 播放视频
const playVideo = (item: WaterfallItem) => {
  if (item.type === 'video' && item.videoUrl) {
    currentVideo.value = item;
    showVideo.value = true;
  }
};

const destroyVideo = () => {
  currentVideo.value = null;
  showVideo.value = false;
};
</script>

<style scoped lang="scss">
.waterfall-container {
  display: flex;
  gap: 8px;
  padding: 8px;
}

.waterfall-column {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
}

.waterfall-item {
  position: relative;
  overflow: hidden;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);

  :deep(.van-image) {
    width: 100%;
    cursor: pointer;
    aspect-ratio: 3/4;
  }

  .item-content {
    padding: 8px;

    .item-title {
      display: -webkit-box;
      margin-bottom: 4px;
      overflow: hidden;
      font-weight: bold;
      font-size: 14px;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .item-description {
      display: -webkit-box;
      overflow: hidden;
      color: #666;
      font-size: 12px;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}

.video-popup {
  width: 90vw;
  height: auto;
  background: transparent;

  .video-player {
    width: 100%;
    height: auto;
    max-height: 80vh;
  }
}

:deep(.van-pull-refresh) {
  min-height: calc(100vh - 100px);
}
</style>
