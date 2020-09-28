<template>
  <container>
    <sprite
      :texture="EnemyPlane"
      :x="enemyInfo.x"
      :y="enemyInfo.y"
      :width="enemyInfo.width"
      :heightx="enemyInfo.height"
    >
    </sprite>
  </container>
</template>

<script setup>
// 引入飞机图片
import { EnemyPlane } from "../imgExport/planeImg";
import { useEnemy } from "../fn/enemyPlane";
// 敌机
const { enemyInfo } = useEnemy();
export { EnemyPlane, enemyInfo };
</script>

<style scoped>
</style>