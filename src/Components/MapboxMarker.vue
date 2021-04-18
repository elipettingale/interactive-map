
<script>
export default {
  name: "mapbox-marker",
  props: ['coords'],
  mounted() {
    this.element = document.createElement('div');
    this.element.className = 'mapbox-marker';

    this.marker = new mapboxgl.Marker(this.element)
        .setLngLat(this.coords)
        .addTo(this.$parent.map);
  },
  data() {
    return {
      element: null,
      marker: null
    }
  },
  render() {
    return '';
  }
}
</script>
