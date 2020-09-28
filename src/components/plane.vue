<template>
  <container>
    <sprite
      :texture="BigPlane"
      :x="planeInfo.x"
      :y="planeInfo.y"
      :interactive="true"
      :buttonMode="true"
      @touch="handleTouch"
    >
    </sprite>
  </container>
</template>

<script>
import { BigPlane } from "../imgExport/planeImg";
import { usePlane } from "../fn/planeDefault";
export default {
  components: {},
  setup() {
    const { planeInfo } = usePlane();
    const handleTouch = planeInfo.handleTouch;
    return { planeInfo, handleTouch, BigPlane };
  },
};
</script>

<style scoped>
</style>