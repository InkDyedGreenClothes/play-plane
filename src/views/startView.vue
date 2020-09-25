<template>
  <container>
    <sprite :texture="StartPage" x="0" y="0" :width="windowWidth" :height="windowHeight"></sprite>
    <sprite :texture="Badge" :x="badgex" :y="badgey" :width="badgeWidth" :height="badgeHeight"></sprite>
    <sprite
      @click="handleClick"
      :interactive="true"
      :texture="PlayGame"
      :x="playGamex"
      :y="playGamey"
      :width="playGameWidth"
      :height="playGameHeight"
    ></sprite>
  </container>
</template>

<script>
import { StartPage, Badge, PlayGame } from "../imgExport/startImg";
import { util } from "../utils/util";
export default {
  setup(props, { emit }) {
    // js开始
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    // 定义进入也徽章大小以及位置
    let badgeWidth = 300;
    let badgeHeight = 100;
    let badgex = util.getCenterWidth(badgeWidth);
    let badgey = 90;
    // 设置playGame 大小以及位置
    let playGameWidth = 200;
    let playGameHeight = 50;
    let playGamex =util.getCenterWidth(playGameWidth);
    let playGamey = windowHeight - 200;
    // 定义开始游戏事件
    function handleClick() {
      emit("change-view", "GameView");
    }

    return {
      StartPage,
      Badge,
      PlayGame,
      windowHeight,
      windowWidth,
      badgeWidth,
      badgeHeight,
      badgex,
      badgey,
      playGameWidth,
      playGameHeight,
      playGamex,
      playGamey,
      handleClick,
    };
  },
};
</script>

<style scoped>
</style>