import { defineStore } from "pinia";
import { computed, ref } from "vue";
import data from "@/assets/mock.json";

export const useProductStore = defineStore("ProductStore", () => {
  data.forEach((product) => {
    product.isBuying = false;
  });
  const products = ref(data);

  const productsInBag = computed(() => {
    return products.value.filter((product) => product.isBuying);
  });

  function changeBag(id) {
    const product = products.value.find((product) => product.id === id);
    product.isBuying = !product.isBuying;
  }

  return { products, productsInBag, changeBag };
});
