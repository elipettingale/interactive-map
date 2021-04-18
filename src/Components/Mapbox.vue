<template>
  <div ref="mapbox">

  </div>
</template>

<script>
export default {
  name: "mapbox",
  props: ['center'],
  mounted() {
    this.mapbox = new mapboxgl.Map({
      container: this.$refs.mapbox,
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  },
  data() {
    return {
      mapbox: null
    }
  }
}
</script>
