import {defineStore} from 'pinia';
import {ref} from "vue";
import type {Profile} from "@/interfaces/profile.interface.ts";
import {API_ROUTES, http} from "@/api.ts";

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>();
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchProfile() {
    loading.value = true
    error.value = null
    try {
      const {data} = await http.get<Profile>(API_ROUTES.profile);
      profile.value = data;
    } catch (e) {
      console.error(e)
      error.value = e instanceof Error ? e.message : 'Произошла ошибка'
    } finally {
      loading.value = false
    }
  }

  return {profile, loading, error, fetchProfile};
});
