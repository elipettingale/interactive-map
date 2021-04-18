<template>
  <div class="mapbox">
    <div ref="mapbox"></div>
    <slot v-if="loaded"></slot>
  </div>
</template>

<script>
export default {
  name: "mapbox",
  props: ['center', 'zoom'],
  mounted() {
    this.map = new mapboxgl.Map({
      container: this.$refs.mapbox,
      style: 'mapbox://styles/smartercoding/cknn7ok8c47vb17s5c1h1ahl2',
      center: this.center,
      zoom: this.zoom,
    });

    this.map.on('moveend', (event) => {
      this.$emit('update_center', this.map.getCenter());
    });

    this.map.on('zoomend', (event) => {
      this.$emit('update_zoom', this.map.getZoom())
    });

    this.map.on('load', () => {
      this.loaded = true;
    });
  },
  data() {
    return {
      map: null,
      loaded: false,
    }
  }
}
</script>
