<script setup>
import AppImage from "./AppImage.vue";
</script>
<template>
  <div class="card">
    <AppImage class="card__image" src="" alt="" :height="160" />
    <h2 class="card__name"></h2>
    <h3 class="card__author"></h3>
    <div class="card__bottom">
      <div class="card__pricelist">
        <span class="card__discount"></span>
        <p class="card__price"></p>
      </div>
      <button class="card__button">Купить</button>
    </div>
  </div>
</template>
