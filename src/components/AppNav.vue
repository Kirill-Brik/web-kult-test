<script setup>
import { RouterLink } from "vue-router";
import router from "@/router";

const links = router.getRoutes();
</script>
<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item" v-for="link in links" :key="link.path">
        <RouterLink active-class="nav__link_active" class="nav__link" :to="link.path">{{
          link.name
        }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
.nav {
  &__list {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    max-width: 519px;
    list-style-type: none;
  }

  &__link {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    text-decoration: none;
    color: inherit;

    &:hover {
      color: #9f9f9f;
    }

    &:active {
      color: inherit;
    }

    &_active {
      color: #9f9f9f;
    }
  }
}
</style>
