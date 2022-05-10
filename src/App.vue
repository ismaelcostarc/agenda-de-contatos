<template>
  <div id="app">
    <contact-modal
      @close="closeModal"
      @newContact="isNewContact = true"
      :edit="isEdition"
      :contactIndex="contactIndex"
      v-if="showModal"
    ></contact-modal>

    <remove-contact-modal
      @close="closeModal"
      :contactIndex="contactIndex"
      v-if="showRemoveModal"
    ></remove-contact-modal>

    <div class="home">
      <header-bar @newContact="showModal = true" @searchWord="searchWord" />
      <empty-agenda @newContact="showModal = true" v-if="!contacts.length" />
      <contacts-list
        @newContactExpired="isNewContact = false"
        @showEditModal="editContact"
        @showRemoveModal="removeContact"
        :isNewContact="isNewContact"
        :filter="wordSearched"
        v-else
      />
    </div>
  </div>
</template>

<script>
import HeaderBar from "./partials/HeaderBar.vue";
import EmptyAgenda from "./partials/EmptyAgenda.vue";
import ContactModal from "./partials/modals/ContactModal.vue";
import ContactsList from "./partials/ContactsList.vue";
import RemoveContactModal from "./partials/modals/RemoveContactModal.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    HeaderBar,
    EmptyAgenda,
    ContactModal,
    ContactsList,
    RemoveContactModal,
  },
  data() {
    return {
      showModal: false,
      showRemoveModal: false,
      isNewContact: false,
      isEdition: false,
      contactIndex: 0,
      wordSearched: "",
    };
  },
  computed: {
    ...mapState(["contacts"]),
  },
  methods: {
    editContact(index) {
      this.contactIndex = index;
      this.showModal = true;
      this.isEdition = true;
    },
    removeContact(index) {
      this.contactIndex = index;
      this.showRemoveModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.showRemoveModal = false;
      this.isEdition = false;
    },
    searchWord(word) {
      this.wordSearched = word;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  background-color: #f8f9fd;
}
</style>
