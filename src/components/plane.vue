<template>
  <container>
    <sprite
      :texture="BigPlane"
      :x="x"
      :y="y"
      :interactive="true"
      :buttonMode="true"
      @touch="handleTouch"
    >
      <Bullet></Bullet>
    </sprite>
  </container>
</template>

<script>
import Bullet from "./bullet";
import { BigPlane } from "../imgExport/planeImg";
import { ref, onMounted, onUnmounted } from "vue";
import { game } from "../game";
import { util } from "../utils/util";
export default {
  components: { Bullet },
  setup() {
    let windowHeight = window.innerHeight;
    // 设置飞机默认位置
    let yDefault = windowHeight - 200;
    let xDefault = util.getCenterWidth(128);
    const x = ref(0);
    const y = ref(0);
    // 触摸飞机
    function handleTouch() {
      game.ticker.remove(planeMoveDetaultX);
      game.ticker.remove(planeMoveDetaultY);
    }
    // 飞机从上往下飞行
    const speed = 5;
    // y 移动
    function planeMoveDetaultY() {
      y.value += speed;
      if (y.value >= yDefault) {
        game.ticker.remove(planeMoveDetaultY);
      }
    }
    // x 移动
    function planeMoveDetaultX() {
      x.value++;
      if (x.value >= xDefault) {
        game.ticker.remove(planeMoveDetaultX);
      }
    }
    onMounted(() => {
      game.ticker.add(planeMoveDetaultX);
      game.ticker.add(planeMoveDetaultY);
    });
    onUnmounted(() => {});
    return { x, y, handleTouch, BigPlane };
  },
};
</script>

<style scoped>
</style>