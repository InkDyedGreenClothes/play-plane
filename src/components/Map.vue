<template>
  <container>
    <sprite :texture="Grass" :x="x" :y="y" :width="windowWidth"></sprite>
    <sprite :texture="Grass" :x="x1" :y="y1" :width="windowWidth"></sprite>
  </container>
</template>

<script>
import { Grass } from "../imgExport/gameBgImg";
import { game } from "../game";
import { ref, onMounted, onUnmounted } from "vue";
export default {
  setup() {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    windowHeight = 1080;
    const x = ref(0);
    const y = ref(0);
    const x1 = ref(0);
    const y1 = ref(-windowHeight);
    // 地图背景滚动
    const speed = 5;
    //背景帧滚动
    function gandleTicker() {
      y.value += speed;
      y1.value += speed;
      if (y.value >= windowHeight) {
        y.value = -windowHeight;
      }
      if (y1.value >= windowHeight) {
        y1.value = -windowHeight;
      }
    }
    onMounted(() => {
      game.ticker.add(gandleTicker);
    });
    onUnmounted(() => {
      game.ticker.remove(gandleTicker);
    });
    return { x, y, x1, y1, Grass, windowWidth };
  },
};
</script>

<style scoped>
</style>