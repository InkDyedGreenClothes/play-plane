import { Application } from 'pixi.js'
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

const game = new Application({
  width: windowWidth,
  height: windowHeight,
  antialias: true, //消除锯齿
  transparent: false, //背景不透明
  resolution: 1, //像素设置
  roundPixels: true
});
game.renderer.view.style.position = "absolute";
game.renderer.view.style.display = "block";
game.renderer.autoResize = true;
game.renderer.resize(window.innerWidth, window.innerHeight);
export { game }
document.body.append(game.view)

export function getRootContainer() {
  return game.stage;
}
