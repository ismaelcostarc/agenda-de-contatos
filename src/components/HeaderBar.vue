<template>
  <header class="header">
    <img
      src="@/assets/img/ic-logo.png"
      srcset="@/assets/img/ic-logo@2x.png 2x, @/assets/img/ic-logo@3x.png 3x"
      class="header__logo"
    />
    <div class="header__search-bar">
      <input
        type="text"
        class="search-bar__input Text-Style"
        placeholder="Buscar"
      />
      <img
        src="@/assets/img/ic-search.png"
        srcset="
          @/assets/img/ic-search@2x.png 2x,
          @/assets/img/ic-search@3x.png 3x
        "
        class="search-bar__icon"
      />
    </div>
  </header>
</template>
<script>
export default {
  name: "HeaderBar",
};
</script>
<style lang="scss" scoped>
.header {
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  &__logo {
    width: 9.25rem;
    height: 2rem;
    margin: 0 14.25rem 0 0;
    object-fit: contain;
  }
}

.search-bar__input {
  width: 64.5rem;
  height: 2rem;
  padding: 0.438rem 0.5rem 0.375rem;
  border-radius: 4px;
  background-color: var(--pale-grey);
  border: none;
  outline: none;

  &::placeholder {
    color: var(--bluey-grey);
  }
}

.search-bar__icon {
  position: relative;
  left: -1.5rem;
}
</style>
