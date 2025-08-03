<script lang="ts" setup>
const handleClick = () => {
  alert("下载功能正在开发中，敬请期待！");
};
</script>

<template>
  <div class="fixed bg-blue-300 cursor-pointer top-10 right-0 z-999999 rounded-md p-0.5 text-white">
    <div class="font-white" @click="handleClick">下载1990</div>
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
