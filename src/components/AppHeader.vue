<script setup>
import AppNav from "./AppNav.vue";
import AppSearch from "./AppSearch.vue";
import AppIcon from "./AppIcon.vue";
import { useBagStore } from "../stores/bagStore";

const bagStore = useBagStore();
</script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <img class="header__logo" src="../assets/logo.png" alt="Логотип" />
      <AppNav class="header__nav" />
      <AppSearch class="header__search" />
      <button class="header__bag">
        <AppIcon class="header__bag-icon" icon-name="bag" height="28px" />
        <span class="header__bag-counter">{{ bagStore.bag.length || "" }}</span>
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
    padding: 0 24px;
    width: 100%;
    max-width: 1216px;
  }

  &__logo {
    height: 48px;
  }

  &__nav {
    flex: 1 1 auto;
    margin: 0 48px;
    color: #343030;
  }

  &__search {
    margin: 0 33px;
  }

  &__bag {
    position: relative;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  &__bag-counter {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 24px;
    padding: 0 4px;
    min-width: 15px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: white;
    background-color: #403432;
    border-radius: 15px;
  }
}
</style>
