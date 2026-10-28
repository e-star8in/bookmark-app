<script lang="ts" setup>

import {onMounted, ref, watch} from "vue"  ;
import {useRoute, onBeforeRouteUpdate} from "vue-router";
import {useCategoryStore} from "@/stores/categories.store.ts";
import type {Category} from "@/interfaces/category.interface.ts";
import {useBookmarkStore} from "@/stores/bookmarks.store.ts";

const route = useRoute();
const categoryStore = useCategoryStore();
const bookmarkStore = useBookmarkStore();
const category = ref<Category>();

onMounted(() => {
  category.value = categoryStore.getCategoryByAlias(route.params.alias);
  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value.id)
  }
})

watch(
  () => categoryStore.categories,
  (data) => {
    category.value = categoryStore.getCategoryByAlias(route.params.alias);
  })

onBeforeRouteUpdate((to, from) => {
  category.value = categoryStore.getCategoryByAlias(to.params.alias);
  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value.id)
  }
})

</script>

<template>
  Category res {{ category?.name }} res
  <pre>

  {{ bookmarkStore.bookmarks }}
  </pre>
</template>

<style lang="scss" scoped>

</style>
