
<template>
  <mapbox
    :center="center"
    @update_center="update_center"
    :zoom="zoom"
    @update_zoom="update_zoom"
  ></mapbox>
</template>

<script>
  import { defineComponent } from 'vue';
  import Mapbox from "./Components/Mapbox.vue";

  export default defineComponent({
    data() {
      return {
        center: {lat: 52.489471, lng: -1.898575},
        zoom: 12
      }
    },
    components: {
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
