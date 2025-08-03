<script lang="ts" setup>
import { ref } from "vue";

const formData = ref({
  city: "",
});

const handleSubmit = () => {
  // 这里可以添加查询天气的逻辑
};
</script>

<template>
  <div class="p-2">
    <input v-model="formData.city" class="border border-gray-300 rounded-md p-2" type="text" placeholder="城市" />
    <button class="bg-blue-500 text-white rounded-md p-2 m-auto mt-2 block" @click="handleSubmit">查询天气</button>
  </div>
</template>

<style scoped></style>
