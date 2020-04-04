import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    calculated_data: []
  },
  mutations: {
    SET_DATA(state, payload) {
      state.calculated_data.push(payload);
    }
  },
  actions: {
    get_data({ commit }, payload) {
      commit("SET_DATA", payload);
    }
  },
  modules: {}
});
