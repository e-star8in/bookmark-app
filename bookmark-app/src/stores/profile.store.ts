import {defineStore} from 'pinia';
import {ref} from "vue";
import type {Profile} from "@/interfaces/profile.interface.ts";
import {API_ROUTES} from "@/api.ts";

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>();

  async function fetchProfile() {
    const data = await fetch(API_ROUTES.profile);
    profile.value = (await data.json()) as Profile;
  }

  return {profile, fetchProfile};
});
