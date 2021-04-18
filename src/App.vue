
<template>
  <mapbox
    :center="center"
    @update_center="update_center"
    :zoom="zoom"
    @update_zoom="update_zoom"
  >
    <mapbox-marker :coords="{lng: -1.8386651794459397, lat: 52.48393078103982}"/>
    <mapbox-marker :coords="{lng: -1.9433786193877154, lat: 52.5199819587728}"/>
    <mapbox-marker :coords="{lng: -1.9675828735379923, lat: 52.48382624189935}"/>
    <mapbox-marker :coords="{lng: -1.8717958251975801, lat: 52.44722228119437}"/>
  </mapbox>
</template>

<script>
  import { defineComponent } from 'vue';
  import Mapbox from "./Components/Mapbox.vue";
  import MapboxMarker from "./Components/MapboxMarker.vue";

  export default defineComponent({
    data() {
      return {
        center: {lat: 52.489471, lng: -1.898575},
        zoom: 12
      }
    },
    components: {
      MapboxMarker,
      Mapbox
    },
    methods: {
      update_zoom(zoom) {
        this.zoom = zoom;
      },

      update_center(center) {
        this.center = center;
      }
    }
  });
</script>
