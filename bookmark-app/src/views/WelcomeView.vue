<script setup lang="ts">

</script>

<template>
  <div class="index">
    <h1 class="index__title">Добро пожаловать в Bookmarkly!</h1>
    <p class="index__description">Чтобы начать пользоваться выберите категорию закладок или создайте новую.</p>
  </div>
</template>

<style scoped lang="scss">
.index {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 24px;

  &__title {
    font-size: 24px;
    font-weight: 500;
    margin: 0;
  }

  &__description {
    text-align: center;
    margin: 0;
  }
}
</style>
