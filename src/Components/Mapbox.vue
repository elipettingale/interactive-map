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
      style: 'mapbox://styles/mapbox/streets-v11',
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

    this.map.on('click', (event) => {
      console.log(event);
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
