<template>
  <div id="app">
    <contact-modal v-if="showModal" @close="showModal = false"></contact-modal>

    <div class="home">
      <header-bar @newContact="showModal = true" />
      <empty-agenda @newContact="showModal = true" v-if="!contacts.length" />
      <contacts-list
        :newContact="newContact"
        @newContactExpired="newContact = false"
        @showEditModal="showEditModal"
        v-else
      />
    </div>
  </div>
</template>

<script>
import HeaderBar from "./partials/HeaderBar.vue";
import EmptyAgenda from "./partials/EmptyAgenda.vue";
import ContactModal from "./partials/ContactModal.vue";
import ContactsList from "./partials/ContactsList.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    HeaderBar,
    EmptyAgenda,
    ContactModal,
    ContactsList,
  },
  data() {
    return {
      showModal: false,
      contact: {
        name: "",
        email: "",
        phone: "",
      },
      newContact: false,
    };
  },
  watch: {
    newContact(value) {
      //console.log(value);
    },
  },
  computed: {
    ...mapState(["contacts"]),
    isFormEmpty() {
      return !this.contact.name && !this.contact.email && !this.contact.phone;
    },
  },
  methods: {
    ...mapMutations(["ADD_CONTACT", "REMOVE_CONTACT"]),
    addContact() {
      this.ADD_CONTACT(this.contact);
      this.contact = {
        name: "",
        email: "",
        phone: "",
      };
      this.showModal = false;
      this.newContact = true;
    },
    showEditModal() {},
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  background-color: #f8f9fd;
}
</style>
