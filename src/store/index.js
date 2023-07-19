import { createStore } from "vuex";

export default createStore({
  state: {
    activeTheme: "" || "thunder",
  },
  getters: {
    activeTheme(state) {
      return state.activeTheme;
    },
  },
  mutations: {
    setActiveTheme(state, themeName) {
      state.activeTheme = themeName;
    },
  },
  actions: {
    updateActiveTheme({ commit }, themeName) {
      commit("setActiveTheme", themeName);
    },
  },
});
