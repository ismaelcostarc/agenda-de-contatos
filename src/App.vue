<template>
  <div id="app">
    <modal-component v-if="showModal" @close="showModal = false">
      <div slot="header">Criar novo contato</div>
      <div slot="body">
        <form class="new-contact__modal__form">
          <input-component
            label="Nome"
            id="name"
            v-model="contact.name"
            block
          ></input-component>
          <input-component
            label="E-mail"
            id="email"
            v-model="contact.email"
            block
          ></input-component>
          <input-component
            label="Telefone"
            id="phone"
            v-model="contact.phone"
            v-mask="'(##) #####-####'"
          ></input-component>
        </form>
      </div>
      <div slot="footer" class="new-contact__modal__footer">
        <button-component
          type="secondary"
          :disabled="isFormEmpty"
          @clicked="addContact"
          >Salvar</button-component
        >
        <link-component @clicked="showModal = false">Cancelar</link-component>
      </div>
    </modal-component>

    <div class="home">
      <header-bar />
      <empty-agenda @newContact="showModal = true" v-if="!contacts.length" />
      <contacts-list v-else />
    </div>
  </div>
</template>

<script>
import HeaderBar from "./partials/HeaderBar.vue";
import EmptyAgenda from "./partials/EmptyAgenda.vue";
import ModalComponent from "./components/ModalComponent.vue";
import LinkComponent from "./components/LinkComponent.vue";
import InputComponent from "./components/InputComponent.vue";
import ButtonComponent from "./components/ButtonComponent.vue";
import ContactsList from "./partials/ContactsList.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    HeaderBar,
    EmptyAgenda,
    ModalComponent,
    LinkComponent,
    InputComponent,
    ButtonComponent,
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
    };
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
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  background-color: #f8f9fd;
}

.new-contact__modal__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.new-contact__modal__footer {
  display: flex;
  flex-direction: row-reverse;
}
</style>
