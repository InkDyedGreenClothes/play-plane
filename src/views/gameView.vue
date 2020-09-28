<template>
  <container>
    <Map></Map>
    <Plane @handle-touch="planeInfo.handleTouch"></Plane>
    <EnemyPlane></EnemyPlane>
  </container>
</template>

<script>
import Map from "../components/Map";
import { onMounted, onUnmounted } from "vue";
import { game } from "../game";
// 私人飞机
import Plane from "../components/plane";
import { usePlane } from "../fn/planeDefault";
// 敌机
import EnemyPlane from "../components/enemyPlane";
import { useEnemy } from "../fn/enemyPlane";
// 碰撞检测
import { useCrash } from "../fn/crash";
export default {
  components: {
    Map,
    Plane,
    EnemyPlane,
  },
  setup(props, { emit }) {
    // 私人飞机
    const { planeInfo } = usePlane();
    // 敌机
    const { enemyInfo } = useEnemy();
    // 碰撞检测
    function hitTest() {
      if (useCrash(planeInfo, enemyInfo)) {
        emit("change-view", "EndView");
      }
    }
    onMounted(() => {
      game.ticker.add(hitTest);
    });
    onUnmounted(() => {
      game.ticker.remove(hitTest);
    });
    return { planeInfo, enemyInfo };
  },
};
</script>

<style scoped>
</style>