<script lang="ts" setup>
const { name } = defineProps<{ name: string }>();
</script>

<template>
  <div class="user">
    <div class="user__avatar">
      <img alt="" src="https://placehold.co/600x600?text=Hello+World" />
    </div>
    <div class="user__hello">
      Привет,
      <span class="user__name">{{ name }}!</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;

  &__avatar {
    overflow: hidden;
    width: 80px;
    border-radius: 50%;
    background-color: var(--color-primary-inactive);
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;

    > * {
      width: 80px;
      height: 80px;
      object-position: center;
      object-fit: cover;
    }
  }

  &__hello {
    font-size: 18px;
  }
  &__name {
    font-size: inherit;
    font-weight: 700;
  }
}
</style>
