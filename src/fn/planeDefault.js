import { reactive, onMounted, onUnmounted } from 'vue'
import { game } from "../game";
import { util } from "../utils/util"
export function usePlane() {
  let windowHeight = window.innerHeight;
  // 设置飞机默认位置
  let yDefault = windowHeight - 200;
  let xDefault = util.getCenterWidth(128);
  const planeInfo = reactive({
    x: 0,
    y: 200,
    width: 128,
    height: 128,
    handleTouch
  })
  // 触摸飞机
  function handleTouch() {
    game.ticker.remove(planeMoveDefaultX);
    game.ticker.remove(planeMoveDefaultY);
  }
  // 飞机从上往下飞行
  const speed = 5;
  // y 移动
  function planeMoveDefaultY() {
    planeInfo.y += speed;
    if (planeInfo.y >= yDefault) {
      game.ticker.remove(planeMoveDefaultY);
    }
  }
  // x 移动
  function planeMoveDefaultX() {
    planeInfo.x++;
    if (planeInfo.x >= xDefault) {
      game.ticker.remove(planeMoveDefaultX);
    }
  }
  onMounted(() => {
    console.log('起飞了');
    game.ticker.add(planeMoveDefaultX);
    game.ticker.add(planeMoveDefaultY);
  });
  onUnmounted(() => {
    game.ticker.remove(planeMoveDefaultX);
    game.ticker.remove(planeMoveDefaultY);
  });
  return {
    planeInfo
  };
}
