import {defineStore} from 'pinia';
import {ref} from "vue";
import type {Category} from "@/interfaces/category.interface.ts";
import {API_ROUTES, http} from "@/api.ts";
import {v4 as uuidv4} from "uuid";

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
        alias: uuidv4(),
      });
      categories.value.push(data)
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Неизвестная ошибка'
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  function getCategoryByAlias(alias: string | string[] | undefined): Category | undefined {
    if (typeof alias === 'string') {
      return categories.value.find(category => category.alias === alias)
    }
    return;
  }

  return {categories, loading, error, fetchCategories, createCategory, getCategoryByAlias};
});
