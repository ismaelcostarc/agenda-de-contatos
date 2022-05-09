<template>
  <modal-component @close="$emit('close')">
    <div slot="header">Excluir Contato</div>
    <div slot="body">Deseja realmente excluir o contato?</div>
    <div slot="footer" class="new-contact__modal__footer">
      <button-component type="secondary" @clicked="removeContact"
        >Excluir</button-component
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
  name: "RemoveContactModal",
  components: {
    LinkComponent,
    InputComponent,
    ButtonComponent,
    ModalComponent,
  },
  props: {
    contactIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["REMOVE_CONTACT"]),
    removeContact() {
      this.REMOVE_CONTACT(this.contactIndex);
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss" scoped>
.new-contact__modal__footer {
  display: flex;
  flex-direction: row-reverse;
}
</style>
