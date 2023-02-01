import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useBagStore = defineStore("BagStore", () => {
  const bag = ref([]);

  const bagLocalStorage = localStorage.getItem("Bag");
  if (bagLocalStorage) {
    bag.value = JSON.parse(bagLocalStorage)._value;
  }

  function addProduct(product) {
    bag.value.push(product);
  }

  function removeProduct(id) {
    const idx = bag.value.findIndex((product) => product.id === id);
    bag.value.splice(idx, 1);
  }

  function isProductInBag(id) {
    const idx = bag.value.findIndex((product) => product.id === id);
    return idx !== -1 ? true : false;
  }
  watch(
    () => bag,
    (state) => {
      localStorage.setItem("Bag", JSON.stringify(state));
    },
    { deep: true }
  );

  return { bag, addProduct, removeProduct, isProductInBag };
});
