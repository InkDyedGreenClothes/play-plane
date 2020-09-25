<template>
  <CurrentView @change-view="handleChangeView"></CurrentView>
</template>

<script>
import StartView from "./views/startView";
import GameView from "./views/gameView";
import { ref, computed } from "vue";
export default {
  name: "App",
  components: {
  },
  setup() {
    // 定义初始化组件名称
    const currentViewName = ref("StartView");
    // 依赖别的属性的属性
    const CurrentView = computed(() => {
      if (currentViewName.value == "StartView") {
        return StartView;
      } else if (currentViewName.value == "GameView") {
        return GameView
      }
    });
    function handleChangeView(viewName) {
      currentViewName.value = viewName;
    }
    return { CurrentView, handleChangeView };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
