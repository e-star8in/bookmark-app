<script lang="ts" setup>
import {useRouter} from "vue-router";
import ButtonText from "@/components/ButtonText.vue";

const router = useRouter()

function redirectToMain(){router.push({name: 'main'})}

</script>

<template>
  <div class="auth">
    <h1 class="auth__title">Bookmarkly</h1>
    <ButtonText @click="redirectToMain">Вход</ButtonText>
  </div>
</template>

<style lang="scss" scoped>
.auth {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  gap: 52px;

  &__title {
    font-size: 52px;
    margin: 0;
  }
}
</style>
