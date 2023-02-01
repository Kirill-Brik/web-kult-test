import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useBagStore = defineStore("BagStore", () => {
  const bag = ref([]);

  const findProduct = computed((id) => {
    return bag.value.findIndex(id);
  });

  function addProduct(id) {
    bag.value.push(id);
  }

  function removeProduct(id) {
    const idx = bag.value.findIndex((product) => product.id === id);
    console.log(idx);
  }

  return { bag, findProduct, addProduct, removeProduct };
});
