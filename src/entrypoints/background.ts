import { onMessage } from "@/messaging";

export default defineBackground(() => {
  console.log("Background script loaded!");

  // 监听指定消息, 计算字符串长度
  onMessage("getStringLength", (message) => {
    return message.data.length;
  });
});
