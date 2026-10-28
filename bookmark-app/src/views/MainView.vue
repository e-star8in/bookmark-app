<script setup lang="ts">

import CategoryList from "@/components/CategoryList.vue";
import ProfileAvatar from "@/components/ProfileAvatar.vue";
</script>

<template>
  <div class="app">
    <nav class="nav">
      <ProfileAvatar/>
      <CategoryList/>
    </nav>
    <main class="main">
      <RouterView/>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: grid;
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 140px 12px 0;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;

  & .nav {
    grid-column: span 3;
  }

  & .main {
    grid-column: span 9;
  }
}

.nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  gap: 40px;
}
</style>
