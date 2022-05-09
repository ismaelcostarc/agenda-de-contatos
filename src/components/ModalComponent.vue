<template>
  <Transition name="modal" appear>
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container">
          <div class="modal__header">
            <slot name="header"> Cabeçalho padrão </slot>
          </div>

          <div class="modal__body">
            <slot name="body"> Corpo padrão </slot>
          </div>

          <div class="modal__footer">
            <slot name="footer"> Rodapé Padrão </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
export default {
  name: "ModalComponent",
};
</script>
<style lang="scss" scoped>
.modal {
  &__mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &__container {
    margin: 0px auto;
    transition: all 0.3s ease;
    width: 27rem;
    border-radius: 16px;
    box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
    background-color: var(--white-two);
  }

  &__header {
    padding: 1rem;
    border-bottom: solid 1px #c0c3d2;
  }

  &__body {
    padding: 1.5rem;
  }

  &__footer {
    padding: 1rem;
    border-top: solid 1px #c0c3d2;
  }
}

/********** Transições ********/

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal__container,
.modal-leave-active .modal__container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
