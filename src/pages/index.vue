<template>
  <Container>
    <VanCellGroup inset>
      <VanCell center :title="t('home.darkMode')">
        <template #right-icon>
          <VanSwitch
            v-model="checked"
            size="20px"
            aria-label="on/off Dark Mode"
            @click="toggle()"
          />
        </template>
      </VanCell>
      <VanCell
        is-link
        :title="t('home.language')"
        :value="language"
        @click="showLanguagePicker = true"
      />
      <!-- eslint-disable-next-line vue/no-v-model-argument -->
      <van-popup v-model:show="showLanguagePicker" position="bottom">
        <van-picker
          v-model="languageValues"
          :columns="languageColumns"
          @confirm="onLanguageConfirm"
          @cancel="showLanguagePicker = false"
        />
      </van-popup>

      <span v-for="item in menuItems" :key="item.route">
        <VanCell :title="item.title" :to="item.route" is-link />
      </span>
    </VanCellGroup>
  </Container>
</template>
<script setup lang="ts">
import useAppStore from '@/stores/modules/app';
import { languageColumns, locale } from '@/utils/i18n';

import type { PickerColumn } from 'vant';

definePage({
  name: 'home',
  meta: {
    level: 1,
  },
});

const appStore = useAppStore();
const checked = ref<boolean>(isDark.value);

watch(
  () => isDark.value,
  (newMode) => {
    checked.value = newMode;
  },
  { immediate: true },
);

function toggle() {
  toggleDark();
  appStore.switchMode(isDark.value ? 'dark' : 'light');
}

const { t } = useI18n();

const showLanguagePicker = ref(false);
const languageValues = ref<Array<string>>([locale.value]);
const language = computed(() => languageColumns.find((l) => l.value === locale.value).text);

function onLanguageConfirm(event: { selectedOptions: PickerColumn }) {
  locale.value = event.selectedOptions[0].value as string;
  showLanguagePicker.value = false;
}

const menuItems = computed(() => [
  { title: t('home.mockGuide'), route: 'mock' },
  { title: t('home.echartsDemo'), route: 'charts' },
  { title: t('home.tailwindcssExample'), route: 'tailwindcss' },
  { title: t('home.persistPiniaState'), route: 'counter' },
  { title: t('home.404Demo'), route: 'unknown' },
  { title: t('home.keepAlive'), route: 'keepalive' },
  { title: t('home.unlimitedLists'), route: 'unlimitedLists' },
  { title: t('home.iconify'), route: 'iconify' },
]);
</script>
