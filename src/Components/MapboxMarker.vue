
<script>
export default {
  name: "mapbox-marker",
  props: ['location', 'active'],
  emits: ['click'],
  mounted() {
    this.element = document.createElement('div');
    this.element.className = 'mapbox-marker';
    this.element.addEventListener('click', () => {
      this.$emit('click');
    });

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
  watch: {
    active(value) {
      if (value) {
        this.element.classList.add('is-active');
      } else {
        this.element.classList.remove('is-active');
      }
    }
  },
  render() {
    return '';
  }
}
</script>
