<template>
  <container>
    <sprite :texture="Bullet" :x="x" :y="y"></sprite>
  </container>
</template>

<script>
import { Bullet } from "../imgExport/bullet";
import { ref, onMounted, onUnmounted } from "vue";
import { game } from "../game";
export default {
  setup() {
    let windowHeight = window.innerHeight;
    const x = ref(0);
    const y = ref(-128);
    // 子弹移动
    const speed = 2;

    function bulletMove() {
      y.value -= speed;
      // console.log(y.value);
      if (y.value < -windowHeight - 128 * 2) {
        game.ticker.remove(bulletMove);
      }
    }
    onMounted(() => {
      game.ticker.add(bulletMove);
    });
    onUnmounted(() => {
      game.ticker.remove(bulletMove);
    });
    return { x, y, Bullet };
  },
};
</script>

<style scoped>
</style>