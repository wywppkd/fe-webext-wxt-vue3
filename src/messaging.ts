import { defineExtensionMessaging } from "@webext-core/messaging";

interface ProtocolMap {
  getStringLength(s: string): number;
}

// 定义消息发送和接收的接口
export const { sendMessage, onMessage } = defineExtensionMessaging<ProtocolMap>();
