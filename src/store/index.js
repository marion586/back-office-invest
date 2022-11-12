import { createStore } from "vuex";
import * as TestModule from "./testModule";
const store = createStore({
  modules: {
    TestModule: {
      namespaced: true,
      ...TestModule,
    },
  },
});

export default store;
