<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  aspectRatio: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <div class="image" :style="{ paddingTop: aspectRatio * 100 + '%' }">
    <img class="image__content" :src="src" :alt="alt" />
  </div>
</template>
<style lang="scss" scoped>
.image {
  position: relative;
  height: 0;
  width: 100%;

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
