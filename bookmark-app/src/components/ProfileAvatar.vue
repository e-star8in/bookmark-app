<script lang="ts" setup>
import {useProfileStore} from "@/stores/profile.store.ts";
import {onMounted} from "vue";

const store = useProfileStore();

onMounted(() => {
  store.fetchProfile();
});
</script>

<template>
  <div class="user" v-if="store.profile">
    <div class="user__avatar">
      <img alt="{{ store.profile.name }}" src="https://placehold.co/600x600?text=Hello+World"/>
    </div>
    <div class="user__hello">
      Привет,
      <span class="user__name">{{ store.profile.name }}!</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;

  &__avatar {
    overflow: hidden;
    width: 80px;
    border-radius: 50%;
    background-color: var(--color-primary-inactive);
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    pointer-events: none;

    > * {
      width: 80px;
      height: 80px;
      object-position: center;
      object-fit: cover;
    }
  }

  &__hello {
    font-size: 18px;
  }

  &__name {
    font-size: inherit;
    font-weight: 700;
  }
}
</style>
