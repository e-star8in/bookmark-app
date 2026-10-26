<script setup lang="ts">
import IconAdd from "@/icons/iconAdd.vue";
import {useCategoryStore} from "@/stores/categories.store.ts";
import {onMounted} from "vue";
import ButtonIcon from "@/components/ButtonIcon.vue";

const store = useCategoryStore();
onMounted(() => {
  store.fetchCategories();
});

const payload = {name: "new", alias: "new"};

</script>

<template>
  <ul class="category">
    <li v-for="category in store.categories"
        :key="category.id" id="{{category.id}}"
        class="category__item">
      <a :href="`/${category.alias}`" class="category__link">{{ category.name }}</a>
    </li>
    <li class="category__item active">Разработка</li>
    <li class="category__add">
      <ButtonIcon title="Добавить" @click="store.createCategory(payload)">
        <IconAdd/>
      </ButtonIcon>
    </li>
  </ul>
</template>

<style scoped lang="scss">
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

  &__link {
    color: inherit;
    text-decoration: none;
    font-size: inherit;
    font-weight: inherit;
  }
}
</style>
