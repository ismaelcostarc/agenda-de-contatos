<template>
  <modal-component @close="$emit('close')">
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
      <link-component @clicked="$emit('close')">Cancelar</link-component>
    </div>
  </modal-component>
</template>
<script>
import LinkComponent from "../components/LinkComponent.vue";
import InputComponent from "../components/InputComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import ModalComponent from "../components/ModalComponent.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "ContactModal",
  components: {
    LinkComponent,
    InputComponent,
    ButtonComponent,
    ModalComponent,
  },
  data() {
    return {
      contact: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  computed: {
    isFormEmpty() {
      return !this.contact.name && !this.contact.email && !this.contact.phone;
    },
  },
  methods: {
    ...mapMutations(["ADD_CONTACT", "REMOVE_CONTACT"]),
    addContact() {
      this.ADD_CONTACT(this.contact);
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss" scoped>
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
