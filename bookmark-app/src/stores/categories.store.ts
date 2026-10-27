import {defineStore} from 'pinia';
import {ref} from "vue";
import type {Category} from "@/interfaces/category.interface.ts";
import {API_ROUTES, http} from "@/api.ts";

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref<Category[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchCategories() {
    loading.value = true
    error.value = null
    try {
      const {data} = await http.get<Category[]>(API_ROUTES.categories);
      categories.value = data;
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Неизвестная ошибка'
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  async function createCategory() {
    loading.value = true
    error.value = null
    try {
      const {data} = await http.post<Category>(API_ROUTES.categories, {
        name: 'name',
        alias: 'alias',
      });
      categories.value.push(data)
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Неизвестная ошибка'
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  return {categories, loading, error, fetchCategories, createCategory};
});
