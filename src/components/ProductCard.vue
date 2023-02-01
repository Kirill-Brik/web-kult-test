<script setup>
import AppImage from "./AppImage.vue";
import AppButton from "./AppButton.vue";
import AppIcon from "./AppIcon.vue";
import { useBagStore } from "../stores/bagStore";
import { computed, ref } from "vue";

const props = defineProps({
  product: { type: Object, required: true },
});
const bagStore = useBagStore();

const load = ref(false);
const inBag = ref(bagStore.isProductInBag(props.product.id));

const priceFormated = computed(() => {
  const str = String(props.product.price);
  const substr = str.slice(1).match(/\d{3}/g).join(" ");
  return str[0] + " " + substr + " $";
});

async function buy() {
  load.value = true;
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
      if (res.ok) return res.json();
      else throw new Error(res.status);
    })
    .then((data) => {
      let str = "Success:\n";
      for (let key in data) {
        str += `${key}: ${data[key]};\n`;
      }
      if (inBag.value) {
        bagStore.removeProduct(props.product.id);
      } else {
        bagStore.addProduct(props.product);
      }
<<<<<<< HEAD
      inBag.value = !inBag.value;
=======
>>>>>>> e02d8b18272d83cba4e4d036558a4bda4e9eb821
      return str;
    })
    .catch((err) => {
      return `Error:\n ${err.message}`;
    })
    .finally(() => {
      load.value = false;
    });
<<<<<<< HEAD
=======
  inBag.value = !inBag.value;
>>>>>>> e02d8b18272d83cba4e4d036558a4bda4e9eb821
  alert(data);
}
</script>
<template>
  <div class="card" :class="{ card_disabled: !product.price }">
    <AppImage
      class="card__image"
      :src="product.imgUrl"
      :alt="product.name"
      :aspect-ratio="160 / 280"
    />
    <div class="card__content">
      <h2 class="card__name">«{{ product.name }}»</h2>
      <h3 class="card__author">{{ product.author }}</h3>
      <div class="card__bottom">
        <div class="card__pricelist">
          <span v-if="product.noDiscount" class="card__no-discount">
            {{ priceFormated }}
          </span>
          <p class="card__price">
            {{ product.price ? priceFormated : "Продана на аукционе" }}
          </p>
        </div>
        <AppButton
          v-if="product.price"
          class="card__button"
          :class="{ button_type_active: inBag }"
          @click="buy"
          :is-load="load"
        >
          <AppIcon v-if="inBag" class="card__button-icon" icon-name="check" height="20px" />
          {{ inBag ? "Куплено" : "Купить" }}
        </AppButton>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/const" as *;
.card {
  display: flex;
  flex-direction: column;

  height: 100%;
  border: 1px solid #e1e1e1;

  &_disabled {
    opacity: 0.5;
  }

  &__image {
    border-bottom: 1px solid #e7e7e7;
  }

  &__content {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    margin: 20px 24px 24px;
    color: #343030;
  }

  &__name {
    margin: 0;
    @extend %h2;
  }

  &__author {
    flex: 1 1 auto;
    margin: 0;
    @extend %h2;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__pricelist {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 48px;
  }

  &__price {
    margin: 0;
    @extend %h3;
  }

  &__no-discount {
    @extend %h6;
    text-decoration-line: line-through;
    color: #a0a0a0;
  }

  &__button {
    padding: 14px 8px 13px;
    width: 112px;
  }

  &__button-icon {
    margin-right: 4px;
  }
}
</style>
