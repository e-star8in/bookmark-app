<script lang="ts" setup>

</script>

<template>
<button class="btn">
  <slot/>
</button>
</template>

<style lang="scss" scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  padding: 12px 20px;
  cursor: pointer;
  text-decoration: none;
  color: var(--color-bg);
  border: none;
  border-radius: 50rem;
  background-color: var(--color-primary);

  &:hover {
    transition: opacity 0.2s;
    opacity: 0.9;
  }
}
</style>
