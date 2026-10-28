<script lang="ts" setup>
import IconAdd from "@/icons/iconAdd.vue";
import {useCategoryStore} from "@/stores/categories.store.ts";
import {onMounted} from "vue";
import ButtonIcon from "@/components/ButtonIcon.vue";

const store = useCategoryStore();
onMounted(() => {
  store.fetchCategories();
});
</script>

<template>
  <ul class="category">
    <li v-if="store.loading">Загрузка...</li>
    <li v-else-if="store.error">Ошибка: {{ store.error }}</li>
    <template v-else-if="store.categories.length">
      <li v-for="category in store.categories"
          id="{{category.id}}" :key="category.id"
          class="category__item">
        <RouterLink :to="`/main/${category.alias}`" active-class="active" class="category__link">
          {{ category.name }}
        </RouterLink>
      </li>
    </template>
    <li class="category__add">
      <ButtonIcon title="Добавить" @click="store.createCategory()">
        <IconAdd/>
      </ButtonIcon>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.category {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 34px;


  &__link {
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
    transition: font-size 0.2s ease-in-out;
    text-decoration: none;
    color: inherit;

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
</style>
