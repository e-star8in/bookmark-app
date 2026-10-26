import {defineStore} from 'pinia';
import {ref} from "vue";
import {API_ROUTES} from "@/api.ts";
import type {Category} from "@/interfaces/category.interface.ts";

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref<Category[]>([]);

  async function fetchCategories() {
    const data = await fetch(API_ROUTES.categories);
    categories.value = (await data.json()) as Category[];
  }

  async function createCategory(payload: { name: string | "new", alias: string | "new" }) {
    console.log(payload);
    const data = await fetch(API_ROUTES.categories, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    categories.value.push((await data.json()) as Category);
    console.log(categories.value);
  }

  return {categories, fetchCategories, createCategory};
});
