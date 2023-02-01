import { defineStore } from "pinia";
import { computed, ref } from "vue";
import data from "@/assets/mock.json";

export const useProductStore = defineStore("ProductStore", () => {
  const products = ref(data);
  const filter = ref({ name: "" });

  const searchByName = computed(() => {
    return products.value.filter((product) =>
      product.name.toLowerCase().startsWith(filter.value.name.toLowerCase())
    );
  });

  return { products, filter, searchByName };
});
