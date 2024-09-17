<template>
  <Container>
    <div class="mb-10 flex w-full justify-center">
      <Icon icon="fa6-solid:lemon" class="h-20 w-20 text-yellow-400" />
    </div>
    <div class="flex w-full flex-col justify-center">
      <div class="mb-4 flex h-12 w-full">
        <span
          class="flex h-full w-[12%] items-center justify-center rounded bg-white dark:bg-[#121212]"
        >
          <Icon icon="solar:user-broken" class="h-6 w-6 text-[#333333] dark:text-slate-50" />
        </span>
        <input
          v-model="username"
          placeholder="用户名"
          class="box-border h-full w-[88%] rounded border border-none border-gray-300 p-2 pl-0"
        />
      </div>
      <div class="mb-4 flex h-12 w-full">
        <span
          class="flex h-full w-[12%] items-center justify-center rounded bg-white dark:bg-[#121212]"
        >
          <Icon icon="mdi:password-outline" class="h-6 w-6 text-[#333333] dark:text-slate-50" />
        </span>
        <span class="flex h-full w-[88%]">
          <input
            ref="passwordInputRef"
            v-model="password"
            placeholder="密码"
            type="password"
            class="box-border h-full w-full rounded border border-none border-gray-300 p-2 pl-0"
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
        <van-checkbox v-model="remenberPasswordValue">记住密码</van-checkbox>
        <span class="text-blue-400">忘记密码?</span>
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
      <p class="mt-4 text-center text-gray-400">还有没有账号？/注册</p>
    </div>
    <div class="absolute bottom-1 left-1/2 -translate-x-1/2">
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
  </Container>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';

definePage({
  name: 'unocss',
  meta: {
    level: 2,
    title: '🎨  tailwindcss示例',
    i18n: 'home.tailwindcssExample',
  },
});
const { t } = useI18n();
const remenberPasswordValue = ref(false);
const ruleValue = ref(false);
const showPassword = ref(false);
const passwordInputRef = ref(null);
const username = ref('');
const password = ref('');
const validateLogin = ref(false);
function onHandlerShowPassword() {
  showPassword.value = !showPassword.value;
  if (passwordInputRef.value) {
    passwordInputRef.value.type = showPassword.value ? 'text' : 'password';
  }
}
watch([username, password], () => {
  if (username.value && password.value) {
    validateLogin.value = true;
  } else {
    validateLogin.value = false;
  }
});
function onHandlerLogin() {
  console.log('login');
}
</script>
<style scoped></style>
