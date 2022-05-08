<template>
  <button
    class="button"
    :class="{
      'button--primary': type === 'primary',
      'button--secondary': type === 'secondary',
      'button--disabled': disabled,
    }"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "ButtonComponent",
  props: {
    type: {
      type: String,
      required: false,
      default: "primary",
    },
  },
};
</script>
<style lang="scss" scoped>
.button {
  width: 9rem;
  height: 2.5rem;
  padding: 0.75rem 1.375rem 0.75rem 1rem;
  border-radius: 20px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16),
    0 0 0 0.5px var(--black-8), inset 0 0 0 0.5px var(--black-8),
    0 2px 4px 0.5px rgba(0, 0, 0, 0.16);
  border: none;
  cursor: pointer;
  font-size: 0.875rem;

  &--primary {
    background-color: var(--light-yellowish-green);
    color: var(--red);
  }

  &--secondary {
    background-color: var(--red);
    color: var(--white-two);
  }

  &--disabled {
    opacity: 0.32;
  }
}
</style>
