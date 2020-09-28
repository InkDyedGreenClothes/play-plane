<template>
  <CurrentView @change-view="handleChangeView"></CurrentView>
</template>

<script>
import StartView from "./views/startView";
import GameView from "./views/gameView";
import EndView from "./views/endView";
import { ref, computed } from "vue";
export default {
  name: "App",
  components: {},
  setup() {
    // 定义初始化组件名称
    const currentViewName = ref("GameView");
    // 依赖别的属性的属性
    const CurrentView = computed(() => {
      if (currentViewName.value == "StartView") {
        return StartView;
      } else if (currentViewName.value == "GameView") {
        return GameView;
      } else if (currentViewName.value == "EndView") {
        return EndView;
      }
    });
    // 根据传入的组件名称改变组件
    function handleChangeView(viewName) {
      currentViewName.value = viewName;
    }
    return { CurrentView, handleChangeView, EndView };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
