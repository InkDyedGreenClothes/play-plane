<template>
  <container>
    <sprite :texture="StartPage"></sprite>
    <sprite
      :texture="ResetBtn"
      :x="100"
      :y="300"
      :width="200"
      :height="100"
      :interactive="true"
      @click="handleClick"
    ></sprite>
  </container>
</template>

<script setup="props, { emit }">
import { StartPage, ResetBtn } from "../imgExport/startImg";
function handleClick() {
  emit("change-view", "GameView");
}
export { StartPage, ResetBtn, handleClick };
</script>

<style scoped>
</style>