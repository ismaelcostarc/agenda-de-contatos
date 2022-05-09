import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);

const sortByAlphabeticalOrder = (a, b) => {
  const firstName = a.name.toUpperCase();
  const secondName = b.name.toUpperCase();

  return firstName > secondName ? 1 : secondName > firstName ? -1 : 0;
};

const newRandomColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

export default new Vuex.Store({
  state: {
    contacts: [],
  },
  getters: {},
  mutations: {
    ADD_CONTACT(state, data) {
      data.color = newRandomColor();

      if (this.state.contacts.length) {
        this.state.contacts = this.state.contacts.map((contact) => {
          contact.isLast = false;

          return contact;
        });
      }
      data.isLast = true;

      this.state.contacts.push(data);

      this.state.contacts.sort(sortByAlphabeticalOrder);
    },
    EDIT_CONTACT(state, data) {
      this.state.contacts[data.index].name = data.contact.name;
      this.state.contacts[data.index].email = data.contact.email;
      this.state.contacts[data.index].phone = data.contact.phone;
    },
    REMOVE_CONTACT(state, index) {
      this.state.contacts.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
  plugins: [vuexLocal.plugin],
});
