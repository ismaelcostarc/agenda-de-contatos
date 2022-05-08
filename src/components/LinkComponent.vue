<template>
  <span @click="$emit('clicked')" class="link">
    <slot></slot>
  </span>
</template>
<script>
export default {
  name: "LinkComponent",
};
</script>
<style lang="scss" scoped>
.link {
  color: var(--red);
  margin: 0.75rem 1.375rem 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
}
</style>
