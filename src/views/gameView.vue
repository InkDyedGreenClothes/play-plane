<template>
  <container>
    <Map></Map>
    <Plane></Plane>
  </container>
</template>

<script>
import Map from '../components/Map';
import Plane from '../components/plane'
export default {
  components: {
    Map,
    Plane
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
</style>