<template>
  <div ref="mapbox"></div>
</template>

<script>
export default {
  name: "mapbox",
  props: ['center', 'zoom'],
  mounted() {
    this.mapbox = new mapboxgl.Map({
      container: this.$refs.mapbox,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoom,
    });

    this.mapbox.on('moveend', (event) => {
      this.$emit('update:center', this.mapbox.getCenter());
    });

    this.mapbox.on('zoomend', (event) => {
      this.$emit('update:zoom', this.mapbox.getZoom())
    });
  },
  data() {
    return {
      mapbox: null
    }
  }
}
</script>
