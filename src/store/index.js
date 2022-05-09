import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);

const sortByAlphabeticalOrder = (a, b) => {
  return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
};

export default new Vuex.Store({
  state: {
    contacts: [],
  },
  getters: {},
  mutations: {
    ADD_CONTACT(state, data) {
      data.color = Math.floor(Math.random() * 16777215).toString(16);

      /*       if (this.state.contacts.length) {
        this.state.contacts = this.state.contacts.map((contact) => {
          contact.isLast = false;
        });
      }
      data.isLast = true; */

      this.state.contacts.push(data);

      this.state.contacts.sort(sortByAlphabeticalOrder);
    },
    EDIT_CONTACT(state, data) {
      data.contact.color = Math.floor(Math.random() * 16777215).toString(16);

      this.state.contacts[data.index] = data.contact;
    },
    REMOVE_CONTACT(state, index) {
      this.state.contacts.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
  plugins: [vuexLocal.plugin],
});
