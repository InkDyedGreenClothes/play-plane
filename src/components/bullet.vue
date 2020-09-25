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
    const x = ref(0);
    const y = ref(-128);
    // 子弹移动
    const speed = 2;

    function bulletMove() {
      y.value -= speed;
      if (y.value < 0) {
        // game.ticker.remove(bulletMove);
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