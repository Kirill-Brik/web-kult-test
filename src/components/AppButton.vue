<script setup>
import AppLoader from "./AppLoader.vue";
defineProps({
  isLoad: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <button class="button">
    <AppLoader v-if="isLoad" class="button__loader" />
    <div class="button__content" :class="{ button__content_hidden: isLoad }">
      <slot></slot>
    </div>
  </button>
</template>
<style lang="scss" scoped>
.button {
  position: relative;
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: #f4f6f9;
  background: #403432;
  border: none;

  &:hover {
    background: #776763;
  }
  &:active,
  &_type_active {
    background: #5b3a32;
  }

  &:disabled {
    background: #c1b4b1;
  }

  &__loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__content {
    display: flex;
    align-items: flex-start;

    &_hidden {
      visibility: hidden;
    }
  }
}
</style>
