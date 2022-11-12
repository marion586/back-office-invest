import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "./style.css";
import store from "./store";
import "ant-design-vue/dist/antd.css";
import * as antIcons from "@ant-design/icons-vue";

// const getters = {
//   getNotes(state) {
//     return state.notes;
//   },
//   getTimestamps(state) {
//     return state.timestamps;
//   },
//   getNoteCount(state) {
//     return state.notes.length;
//   },
// };

// const store = Vuex.createStore({
//   state,
//   mutations,
//   actions,
//   getters,
// });
const app = createApp(App);

Object.keys(antIcons).forEach((key) => {
  app.component(key, antIcons[key]);
});
app.config.globalProperties.$antIcons = antIcons;
app.use(router);
app.use(store);
app.use(Antd).mount("#app");
