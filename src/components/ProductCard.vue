<script setup>
import AppImage from "./AppImage.vue";
import AppButton from "./AppButton.vue";
import AppIcon from "./AppIcon.vue";
import { useProductStore } from "@/stores/productStore";
import { computed } from "vue";

const props = defineProps({
  product: { type: Object, required: true },
});

const priceFormated = computed(() => {
  const str = String(props.product.price);
  const substr = str.slice(1).match(/\d{3}/g).join(" ");
  return str[0] + " " + substr + " $";
});

const productStore = useProductStore();
</script>
<template>
  <div class="card">
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
          :class="{ button_type_active: product.isBuying }"
          @click="productStore.changeBag(product.id)"
        >
          <AppIcon
            v-if="product.isBuying"
            class="card__button-icon"
            icon-name="check"
            :height="20"
          />
          {{ product.isBuying ? "Куплено" : "Купить" }}
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
