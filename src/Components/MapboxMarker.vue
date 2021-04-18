<template>
  <div ref="marker"></div>
</template>

<script>
export default {
  name: "mapbox-marker",
  props: ['coords'],
  mounted() {
    this.marker = new mapboxgl.Marker()
        .setLngLat(this.coords)
        .addTo(this.$parent.map);
  },
  data() {
    return {
      marker: null
    }
  }
}
</script>
