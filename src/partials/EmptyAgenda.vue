<template>
  <div class="empty-agenda">
    <img src="@/assets/img/ic-book.svg" class="empty-agenda__book" />

    <span class="Text-Style">Nenhum contato foi criado ainda</span>

    <button-component @clicked="$emit('newContact')">
      <div class="empty-agenda__new-contact-button">
        <img src="@/assets/img/ic-plus.svg" class="ic_plus" />
        <span>Criar contato</span>
      </div>
    </button-component>
  </div>
</template>
<script>
import ButtonComponent from "../components/ButtonComponent.vue";

export default {
  name: "EmptyAgenda",
  components: {
    ButtonComponent,
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
</style>
