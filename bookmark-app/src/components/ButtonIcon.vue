<script setup lang="ts">
const {size = 32} = defineProps<{ size?: number }>()
</script>

<template>
  <button class="btn" :style="{width: `${size}px`, height: `${size}px`}">
    <slot/>
  </button>

</template>

<style scoped lang="scss">
.btn {
  font-size: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
  transition: opacity 0.2s;
  border: none;
  border-radius: 50%;
  background: none;

  &:hover {
    opacity: 0.9;
    transition: opacity 0.2s;
  }
}
</style>
