import App from "./App.vue";

export default defineContentScript({
  matches: ["*://*.baidu.com/*"],
  registration: "manifest",
  cssInjectionMode: "ui",
  async main(ctx) {
    console.log(ctx);
    await renderingUI(ctx);
  },
});

const renderingUI = async (ctx: any) => {
  const ui = await createShadowRootUi(ctx, {
    name: "video-download-ui",
    position: "overlay",
    anchor: "body",
    onMount: (container) => {
      const app = createApp(App);
      app.mount(container);
      return app;
    },
    onRemove: (app) => {
      app?.unmount();
    },
  });
  ui.mount();
};
