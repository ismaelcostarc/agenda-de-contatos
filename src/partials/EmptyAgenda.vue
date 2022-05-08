<template>
  <div class="empty-agenda">
    <modal-component v-if="showModal" @close="showModal = false">
      <div slot="header">Criar novo contato</div>
      <div slot="body">
        <form class="new-contact__modal__form">
          <input-component
            label="Nome"
            id="name"
            v-model="name"
            block
          ></input-component>
          <input-component
            label="E-mail"
            id="email"
            v-model="email"
            block
          ></input-component>
          <input-component
            label="Telefone"
            id="phone"
            v-model="phone"
            v-mask="'(##) #####-####'"
          ></input-component>
        </form>
      </div>
      <div slot="footer" class="new-contact__modal__footer">
        <button-component type="secondary" :disabled="isFormEmpty"
          >Salvar</button-component
        >
        <link-component @clicked="showModal = false">Cancelar</link-component>
      </div>
    </modal-component>

    <img
      src="@/assets/img/ic-book.png"
      srcset="@/assets/img/ic-book@2x.png 2x, @/assets/img/ic-book@3x.png 3x"
      class="empty-agenda__book"
    />
    <span class="Text-Style">Nenhum contato foi criado ainda</span>
    <button-component @clicked="showModal = true">
      <div class="empty-agenda__new-contact-button">
        <img src="@/assets/img/ic-plus.svg" class="ic_plus" />
        <span>Criar contato</span>
      </div>
    </button-component>
  </div>
</template>
<script>
import ButtonComponent from "../components/ButtonComponent.vue";
import ModalComponent from "../components/ModalComponent.vue";
import LinkComponent from "../components/LinkComponent.vue";
import InputComponent from "../components/InputComponent.vue";

export default {
  name: "EmptyAgenda",
  components: {
    ButtonComponent,
    ModalComponent,
    LinkComponent,
    InputComponent,
  },
  data() {
    return {
      showModal: false,
      name: "",
      email: "",
      phone: "",
    };
  },
  computed: {
    isFormEmpty() {
      return !this.name && !this.email && !this.phone;
    },
  },
};
</script>
<style lang="scss" scoped>
.empty-agenda {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;

  &__book {
    width: 14.813rem;
    height: 12.5rem;
    margin: 0 0 1.5rem 0.063rem;
    object-fit: contain;
  }

  &__new-contact-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }
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
