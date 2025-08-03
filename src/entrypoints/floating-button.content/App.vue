<script lang="ts" setup>
const handleClick = () => {
  alert("下载功能正在开发中，敬请期待！");
};
</script>

<template>
  <div class="download_video_container">
    <div @click="handleClick" class="download_button" title="下载功能">下载1990</div>
  </div>
</template>

<style scoped>
.download_button {
  width: 100%;
  height: 30px;
}

.download_video_container {
  width: 200px;
  height: 200px;
  cursor: pointer;
  position: fixed;
  top: 100px;
  right: 10px;
  z-index: 1000;
  background-color: rgb(74, 17, 230);
}
</style>
