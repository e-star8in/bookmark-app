<script lang="ts" setup>
import {useRouter} from "vue-router";
import ButtonText from "@/components/ButtonText.vue";

const router = useRouter()

function redirectToMain() {
  router.push("/")
}

</script>

<template>
  <div class="notfound">
    <h1 class="notfound__title">404</h1>
    <ButtonText @click="redirectToMain">На главную</ButtonText>
  </div>
</template>

<style lang="scss" scoped>
.notfound {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  gap: 52px;

  &__title {
    font-size: 128px;
    margin: 0;
  }
}
</style>
