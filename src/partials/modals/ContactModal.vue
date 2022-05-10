<template>
  <modal-component>
    <div slot="header">
      <template v-if="edit">Editar Contato</template>
      <template v-else>Criar novo contato</template>
    </div>
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
        @clicked="addContact"
        :disabled="isFormEmpty"
        type="secondary"
        >Salvar</button-component
      >
      <link-component @clicked="closeModal">Cancelar</link-component>
    </div>
  </modal-component>
</template>
<script>
import LinkComponent from "../../components/LinkComponent.vue";
import InputComponent from "../../components/InputComponent.vue";
import ButtonComponent from "../../components/ButtonComponent.vue";
import ModalComponent from "../../components/ModalComponent.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "ContactModal",
  components: {
    LinkComponent,
    InputComponent,
    ButtonComponent,
    ModalComponent,
  },
  props: {
    edit: {
      type: Boolean,
      required: false,
      default: false,
    },
    contactIndex: {
      type: Number,
      required: false,
      default: 0,
    },
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
  created() {
    if (this.edit) {
      const { name, email, phone } = this.contacts[this.contactIndex];
      this.contact = { name, email, phone };
    }
  },
  computed: {
    ...mapState(["contacts"]),
    isFormEmpty() {
      return !this.contact.name && !this.contact.email && !this.contact.phone;
    },
  },
  methods: {
    ...mapMutations(["ADD_CONTACT", "EDIT_CONTACT", "REMOVE_CONTACT"]),
    addContact() {
      if (this.edit) {
        const data = {
          contact: this.contact,
          index: this.contactIndex,
        };
        this.EDIT_CONTACT(data);
      } else {
        this.ADD_CONTACT(this.contact);
        this.$emit("newContact");
      }

      this.closeModal();
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss" scoped>
.new-contact__modal {
  &__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__footer {
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
