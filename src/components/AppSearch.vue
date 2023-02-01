<script setup>
import AppButton from "./AppButton.vue";
</script>
<template>
  <div class="search">
    <input
      class="search__field"
      type="search"
      name="header-search"
      id="header-search"
      placeholder="Поиск по названию картины"
    />
    <AppButton class="search__button" type="submit">Найти</AppButton>
  </div>
</template>

<style lang="scss" scoped>
.search {
  display: flex;

  &__field {
    padding: 13px 16px 14px;
    width: 294px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #343030;
    border: 1px solid #e1e1e1;
    outline: none;

    &::placeholder {
      color: #9f9f9f;
    }
  }

  &__button {
    padding: 13px 36px 14px;
  }
}
</style>
