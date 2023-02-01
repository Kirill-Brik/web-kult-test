<script setup>
import ProductCard from "./ProductCard.vue";
import { computed } from "vue";
import { useProductStore } from "@/stores/productStore";

const productStore = useProductStore();

const productList = computed(() => {
  return productStore.filter.name ? productStore.searchByName : productStore.products;
});
const titleText = computed(() => {
  return productList.value.length > 0 ? "Картины эпохи Возрождения" : "К сожелению ничего не нашли";
});
</script>
<template>
  <section class="gallary">
    <h1 class="gallary__title">{{ titleText }}</h1>
    <ul class="gallary__list">
      <li class="gallary__item" v-for="product in productList" :key="product.id">
        <ProductCard :product="product" />
      </li>
    </ul>
  </section>
</template>
<style lang="scss" scoped>
@use "@/assets/const" as *;

.gallary {
  margin: 0 auto;
  padding: 0 24px;
  max-width: 1216px;

  &__title {
    margin: 0;
    padding: 45px 0 49px;
    @extend %h1;
    color: #343030;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 32px;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
}
</style>
