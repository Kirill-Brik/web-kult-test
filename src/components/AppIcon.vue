<script setup>
const props = defineProps({
  iconName: { type: String, required: true },
  height: { type: Number, required: true },
});
</script>
<template>
  <i :class="`icon-${iconName}`" :style="{ fontSize: height + 'px' }"></i>
</template>
