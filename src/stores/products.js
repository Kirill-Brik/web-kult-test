import { defineStore } from "pinia";

export const useProductStore = defineStore("products", () => {
  const products = {};
  function increment() {
    products.valueOf++;
  }

  return { products, increment };
});
