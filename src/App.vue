<template>
  <div id="app">
    <div class="home">
      <header class="home__header">
        <img
          src="@/assets/img/ic-logo.png"
          srcset="
            @/assets/img/ic-logo@2x.png 2x,
            @/assets/img/ic-logo@3x.png 3x
          "
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
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  background-color: #f8f9fd;
}

.home__header {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}

img.header__logo {
  width: 9.25rem;
  height: 2rem;
  margin: 0 14.25rem 0 0;
  object-fit: contain;
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
