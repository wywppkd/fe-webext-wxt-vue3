<script lang="ts" setup>
import { ref } from "vue";
import { sendMessage } from "@/messaging";
const inputText = ref("");

const handleClick = async () => {
  // 发送指定消息类型
  const length = await sendMessage("getStringLength", inputText.value);
  alert(length);
};
</script>

<template>
  <div class="fixed bg-blue-300 cursor-pointer top-10 right-0 z-999999 rounded-md p-0.5 text-white">
    <input class="bg-blue-500 text-white" type="text" @keydown.enter="handleClick" v-model="inputText" />
    <div class="font-white" @click="handleClick">计算长度</div>
  </div>
</template>

<style scoped>
/* .download_video_container {
  width: 200px;
  height: 200px;
  cursor: pointer;
  position: fixed;
  top: 100px;
  right: 10px;
  z-index: 1000;
  background-color: rgb(74, 17, 230);
} */
</style>
