<template>
  <div class="input__container">
    <label :for="'input-' + id" class="input__label">{{ label }}</label>
    <input
      @input="handleInput"
      :id="'input-' + id"
      :value="value"
      :class="{ 'input--block': block }"
      class="input"
      type="text"
    />
  </div>
</template>
<script>
export default {
  name: "InputComponent",
  props: {
    label: {
      type: String,
      required: true,
    },
    block: {
      type: Boolean,
      required: false,
      default: false,
    },
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
  },
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
<style lang="scss" scoped>
.input {
  width: 8rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: solid 1px #c0c3d2;

  &__container {
    display: flex;
    flex-direction: column;
  }

  &--block {
    width: initial;
  }

  &__label {
    margin: 0.25rem 0;
    font-size: 0.875rem;
  }

  &:focus {
    outline: none;
  }
}
</style>
