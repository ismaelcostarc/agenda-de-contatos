<template>
  <div id="app">
    <contact-modal
      @close="closeModal"
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
        @newContactExpired="newContact = false"
        @showEditModal="editContact"
        @showRemoveModal="removeContact"
        :newContact="newContact"
        :filter="wordSearched"
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
import RemoveContactModal from "./partials/RemoveContactModal.vue";
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
      newContact: false,
      isEdition: false,
      contactIndex: 0,
      wordSearched: "",
    };
  },
  watch: {
    newContact(value) {},
  },
  computed: {
    ...mapState(["contacts"]),
  },
  methods: {
    editContact(index) {
      this.isEdition = true;
      this.contactIndex = index;
      this.showModal = true;
    },
    removeContact(index) {
      this.showRemoveModal = true;
      this.contactIndex = index;
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
