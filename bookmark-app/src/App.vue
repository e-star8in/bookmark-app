<script lang="ts" setup>
import IconDelete from '@/icons/IconDelete.vue';
import IconEdit from '@/icons/iconEdit.vue';
import ProfileAvatar from '@/components/ProfileAvatar.vue';
import CategoryList from "@/components/CategoryList.vue";

</script>

<template>
  <main class="main">
    <nav class="nav">
      <ProfileAvatar/>
      <CategoryList/>
    </nav>
    <section class="content">
      <div class="content__header header">
        <div class="header__theme">Разработка</div>
        <div class="header__actions">
          <button class="btn">
            <IconDelete/>
          </button>
          <button class="btn">
            <IconEdit/>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.main {
  display: grid;
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 140px 12px 0;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;

  & .nav {
    grid-column: span 5;
  }

  & .content {
    grid-column: span 7;
  }

  & .enter {
    grid-column: span 12;
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
