import { createRenderer } from 'vue'
import { Container, Sprite, Texture } from 'pixi.js'
import { planeMove } from '../fn//planeMove'

const renderer = new createRenderer({
  createElement(type) {
    // 创建元素
    let element;
    // console.log(type);
    switch (type) {
      case 'container':
        element = new Container();
        break;
      case 'sprite':
        element = new Sprite();
        break;
      default:
        break;
    }
    return element;
  },
  // 删除元素
  remove(el) {
    if (el.parent) {
      el.parent.removeChild(el);
    }
  },
  parentNode(node) {
    return node.parent;
  },
  createText() { },
  insert(el, parent) {
    if (parent) {
      parent.addChild(el);
    }
  },
  nextSibling() { },
  patchProp(el, key, prevValue, nextValue) {

    switch (key) {
      case 'texture':
        el.texture = Texture.from(nextValue)
        break;
      case "onClick":
        el.on("pointertap", nextValue);
        break;
      case "onTouch":
        el.on('pointerdown', nextValue)
          .on('pointerdown', planeMove.onDragStart)
          .on('pointerup', planeMove.onDragEnd)
          .on('pointerupoutside', planeMove.onDragEnd)
          .on('pointermove', planeMove.onDragMove)
        break;
      default:
        el[key] = nextValue;
        break;
    }
  },
  createComment() {}
})

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent)
}