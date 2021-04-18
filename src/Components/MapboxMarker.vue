
<script>
export default {
  name: "mapbox-marker",
  props: ['location'],
  mounted() {
    this.element = document.createElement('div');
    this.element.className = 'mapbox-marker';

    this.marker = new mapboxgl.Marker(this.element)
        .setLngLat(this.location.coords)
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
