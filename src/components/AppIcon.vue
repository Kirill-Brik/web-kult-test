<script setup>
defineProps({
  iconName: { type: String, required: true },
  height: { type: String, required: true },
});
</script>
<template>
  <i :class="`icon-${iconName}`" :style="{ fontSize: height }"></i>
</template>
