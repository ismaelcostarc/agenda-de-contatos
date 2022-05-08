import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: [],
  },
  getters: {},
  mutations: {
    ADD_CONTACT(state, data) {
      data.color = Math.floor(Math.random() * 16777215).toString(16);
      this.state.contacts.push(data);
    },
    REMOVE_CONTACT(state, index) {
      this.state.contacts.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
});
