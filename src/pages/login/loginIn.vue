<template>
  <!-- <Container> -->
  <div class="">
    <div class="mb-10 mt-10 flex w-full justify-center">
      <Icon icon="fa6-solid:lemon" class="h-20 w-20 text-yellow-400" />
    </div>
    <div class="flex w-full flex-col justify-center">
      <div class="mb-4 flex h-12 w-full">
        <span
          class="flex h-full w-[12%] items-center justify-center rounded-l bg-white dark:bg-[#121212]"
        >
          <Icon icon="solar:user-broken" class="h-6 w-6 text-[#333333] dark:text-slate-50" />
        </span>
        <input
          ref="usernameInputRef"
          v-model="username"
          placeholder="用户名"
          class="box-border h-full w-[88%] rounded-r border border-none border-gray-300 p-2 pl-0"
        />
      </div>
      <div class="mb-4 flex h-12 w-full">
        <span
          class="flex h-full w-[12%] items-center justify-center rounded-l bg-white dark:bg-[#121212]"
        >
          <Icon icon="mdi:password-outline" class="h-6 w-6 text-[#333333] dark:text-slate-50" />
        </span>
        <span class="flex h-full w-[88%]">
          <input
            ref="passwordInputRef"
            v-model="password"
            placeholder="密码"
            type="password"
            class="box-border h-full w-full rounded-r border border-none border-gray-300 p-2 pl-0"
          />
          <span class="flex items-center bg-white dark:bg-[#121212]" @click="onHandlerShowPassword">
            <Icon
              v-if="showPassword"
              icon="fluent:eye-32-regular"
              class="mr-2 h-6 w-6 text-[#333333] dark:text-slate-50"
            />
            <Icon
              v-else
              icon="ph:eye-closed-light"
              class="mr-2 h-6 w-6 text-[#333333] dark:text-slate-50"
            />
          </span>
        </span>
      </div>
      <div class="flex justify-between">
        <van-checkbox v-model="rememberPasswordValue">记住密码</van-checkbox>
        <span class="text-base text-blue-400">忘记密码?</span>
      </div>
      <div class="mt-10">
        <van-checkbox v-model="ruleValue">我已阅读并同意</van-checkbox>
      </div>
      <button
        class="mt-4 h-12 rounded bg-yellow-400 text-white"
        :class="validateLogin ? 'opacity-100' : 'opacity-50'"
        :disabled="!validateLogin"
        @click="onHandlerLogin"
        >{{ t('login.title') }}</button
      >
      <p class="mt-4 text-center text-xs text-gray-400">还有没有账号？/注册</p>
    </div>
    <div class="absolute bottom-[5%] left-1/2 -translate-x-1/2">
      <p class="text-center text-gray-400">其他登录方式</p>
      <div class="mt-2 flex w-full justify-center">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-[#00C824]">
          <Icon icon="tdesign:logo-wechat" class="h-1/2 w-1/2 text-white" />
        </div>
        <div class="mx-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1196DB]">
          <Icon icon="basil:qq-solid" class="h-1/2 w-1/2 text-white" />
        </div>
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-[#323232]">
          <Icon icon="tdesign:logo-apple-filled" class="h-1/2 w-1/2 text-white" />
        </div>
      </div>
    </div>
  </div>
  <!-- </Container> -->
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';

import { useLoginStore } from '@/stores/modules/user';
import Validator from '@/utils/loginValidator';

definePage({
  name: 'unocss',
  meta: {
    level: 2,
    title: '🎨 tailwindcss示例',
    i18n: 'home.tailwindcssExample',
  },
});

const { t } = useI18n();
const rememberPasswordValue = ref(false);
const ruleValue = ref(false);
const showPassword = ref(false);
const passwordInputRef = ref<HTMLInputElement | null>(null);
const usernameInputRef = ref<HTMLInputElement | null>(null);
const username = ref('');
const password = ref('');
const validateLogin = computed(() => !!(username.value && password.value));

const onHandlerShowPassword = () => {
  showPassword.value = !showPassword.value;
  if (passwordInputRef.value) {
    passwordInputRef.value.type = showPassword.value ? 'text' : 'password';
  }
};
const validateFunc = () => {
  const validator = new Validator();

  if (usernameInputRef.value) {
    validator.add(usernameInputRef.value, [{ strategy: 'isEmpty', errorMsg: '用户名不能为空' }]);
  }

  if (passwordInputRef.value) {
    validator.add(passwordInputRef.value, [{ strategy: 'isEmpty', errorMsg: '密码不能为空' }]);
  }

  return validator.start();
};

const loginStore = useLoginStore();

async function onHandlerLogin() {
  const validationError = validateFunc();

  if (validationError) {
    console.error(validationError);
    return;
  }

  try {
    await loginStore.GetUserInfo(username.value, password.value);
  } catch (error) {
    console.error('登录失败', error);
  }
}
</script>
<style scoped></style>
