<script setup>
import AppNav from "./AppNav.vue";
import AppSearch from "./AppSearch.vue";
import AppIcon from "./AppIcon.vue";
</script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <img class="header__logo" src="../assets/logo.png" alt="Логотип" />
      <AppNav class="header__nav" />
      <AppSearch class="header__search" />
      <button class="header__bug">
        <AppIcon class="header__icon" icon-name="bag" :height="28" />
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  padding: 24px 0;
  border-bottom: 1px solid #e1e1e1;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 24px;
    width: 100%;
    max-width: 1216px;
  }

  &__logo {
    height: 48px;
  }

  &__nav {
    margin: 0 48px;
    flex: 1 1 auto;
  }

  &__search {
    margin: 0 33px;
  }

  &__bug {
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
  }
}
</style>
