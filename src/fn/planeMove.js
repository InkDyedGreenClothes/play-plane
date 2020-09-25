import { util } from '../utils/util'

const planeMove = {
  onDragStart(event) {
    let currentTarget = event.currentTarget;
    currentTarget.data = event.data
    currentTarget.alpha = 1;
    currentTarget.dragging = true;
    this.anchor.set(0.5, 0.5)
  },
  onDragEnd(event) {
    let currentTarget = event.currentTarget;
    currentTarget.alpha = 1;
    currentTarget.dragging = false;
  },
  onDragMove(event) {
    let currentTarget = event.currentTarget;
    if (currentTarget.dragging) {
      var newPosition = currentTarget.data.getLocalPosition(currentTarget.parent); //获取鼠标移动的位置
      // 防止x方向超出边界
      if (newPosition.x < util.getWindowInner().windowWidth) {
        currentTarget.position.x = newPosition.x;
      }
      if (newPosition.x >= util.getWindowInner().windowWidth) {
        currentTarget.position.x = util.getWindowInner().windowWidth
      }
      if (newPosition.x <= 0) {
        currentTarget.position.x = 0;
      }
      // 防止y方向超出边界
      if (newPosition.y < util.getWindowInner().windowHeight) {
        currentTarget.position.y = newPosition.y;
      }
      if (newPosition.y >= util.getWindowInner().windowHeight) {
        currentTarget.position.y = util.getWindowInner().windowHeight;
      }
      if (newPosition.y <= 0) {
        currentTarget.position.y = 0;
      }
    }
  }
}

export {
  planeMove
}