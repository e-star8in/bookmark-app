<script lang="ts" setup>
import IconAdd from '@/icons/iconAdd.vue';
import IconDelete from '@/icons/IconDelete.vue';
import IconEdit from '@/icons/iconEdit.vue';
import ProfileAvatar from '@/components/ProfileAvatar.vue';
import { onMounted, ref } from 'vue';
import { API_ROUTES } from '@/api.ts';
import type { Profile } from '@/interfaces/profile.ts';

const profile = ref<Profile>();

async function fetchProfile() {
  const data = await fetch(API_ROUTES.profile);
  profile.value = (await data.json()) as Profile;
}

onMounted(() => {
  fetchProfile();
});
</script>

<template>
  <main class="main">
    <nav class="nav">
      <ProfileAvatar v-if="profile" :name="profile.name" />
      <ul class="category">
        <li class="category__item">Спорт</li>
        <li class="category__item">Кулинария</li>
        <li class="category__item">Работа</li>
        <li class="category__item active">Разработка</li>
        <li class="category__add">
          <button class="btn" title="Добавить">
            <IconAdd />
          </button>
        </li>
      </ul>
    </nav>
    <section class="content">
      <div class="content__header header">
        <div class="header__theme">Разработка</div>
        <div class="header__actions">
          <button class="btn"><IconDelete /></button>
          <button class="btn"><IconEdit /></button>
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

.category {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 34px;

  &__item {
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
    transition: font-size 0.2s ease-in-out;

    &:hover {
      font-size: 18px;
      font-weight: 700;
      transition: font-size 0.2s ease-in-out;
    }

    &.active {
      font-size: 24px;
      font-weight: 700;
      transition: font-size 0.2s ease-in-out;
    }
  }
}

.btn {
  font-size: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background: none;
}
</style>
