import {defineStore} from 'pinia';
import {ref} from "vue";
import type {Bookmark} from "@/interfaces/bookmark.interface.ts";
import {API_ROUTES, http} from "@/api.ts";
export const useBookmarkStore = defineStore('bookmarks', () => {
  const bookmarks = ref<Bookmark[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchBookmarks(categoryId: number) {
    loading.value = true
    error.value = null
    try {
      const {data} = await http.get<Bookmark[]>(API_ROUTES.bookmarks(categoryId));
      bookmarks.value = data;
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Неизвестная ошибка'
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  return {bookmarks, loading, error, fetchBookmarks};
});
