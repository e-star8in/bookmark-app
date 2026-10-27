import {defineStore} from 'pinia';
import {ref} from "vue";
import {API_ROUTES, http} from "@/api.ts";
import type {Category} from "@/interfaces/category.interface.ts";

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref<Category[]>([]);

  async function fetchCategories() {
    const {data} = await http.get<Category[]>(API_ROUTES.categories);
    categories.value = data;
  }

  async function createCategory() {
    const {data} = await http.post<Category>(API_ROUTES.categories, {
      name: 'name',
      alias: 'alias',
    });
    categories.value.push(data)

  }

  return {categories, fetchCategories, createCategory};
});
