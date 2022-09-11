import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";

import "ant-design-vue/dist/antd.css";
import * as antIcons from "@ant-design/icons-vue";
const app = createApp(App);

Object.keys(antIcons).forEach((key) => {
  app.component(key, antIcons[key]);
});
app.config.globalProperties.$antIcons = antIcons;
app.use(router);
app.use(Antd).mount("#app");
