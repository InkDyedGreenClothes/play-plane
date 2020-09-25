const util = {
  // 获取屏幕宽度中心
  getCenterWidth(width) {
    let windowWidth = window.innerWidth;
    return windowWidth / 2 - width / 2;
  },
  // 获取屏幕高度中心
  getCenterHeight(height) {
    let windowHeight = window.innerHeight;
    return windowHeight / 2 - height / 2;
  },
  // 获取可视宽高
  getWindowInner() {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    return {
      windowHeight,
      windowWidth
    }
  }
}

export { util };