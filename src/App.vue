<script setup>
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>
<template>
  <AppHeader />
  <main class="main">
    <RouterView />
  </main>
  <AppFooter />
</template>
<style lang="scss" scoped>
.main {
  flex: 1 1 auto;
}
</style>
