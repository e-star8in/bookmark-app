<script setup lang="ts">

import IconDelete from "@/icons/IconDelete.vue";
import IconEdit from "@/icons/iconEdit.vue";
</script>

<template>
  <div class="main__header header">
    <div class="header__theme">Разработка1</div>
    <div class="header__actions">
      <button class="btn">
        <IconDelete/>
      </button>
      <button class="btn">
        <IconEdit/>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
