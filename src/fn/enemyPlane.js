// 引入需要的资源
import { reactive, onMounted, onUnmounted } from "vue";
import { game } from "../game";
// 敌机
export function useEnemy() {
  // 定义敌机坐标
  const enemyInfo = reactive({
    x: 0,
    y: 0,
    width: 100,
    height: 50,
  });
  // 定义敌机下落速度
  const speed = 2;
  function handleTicker() {
    enemyInfo.y += speed;
    if (enemyInfo.y > window.innerHeight) {
      game.ticker.remove(handleTicker);
    }
  }

  onMounted(() => {
    game.ticker.add(handleTicker);
  });
  onUnmounted(() => {
    game.ticker.remove(handleTicker);
  });
  return {
    enemyInfo
  }
}