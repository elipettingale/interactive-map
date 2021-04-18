
<template>
  <div class="app">
    <div class="map">
      <mapbox
          :center="center"
          @update_center="update_center"
          :zoom="zoom"
          @update_zoom="update_zoom"
      >
        <mapbox-marker v-for="marker in markers" :coords="marker.coords" />
      </mapbox>
    </div>
    <div class="controls">
      <button class="btn" @click="search = true">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <div class="search" :class="{ 'is-open': search }">
      <div class="search__header">
        <h2 class="title">Find</h2>
        <button class="btn" @click="search = false">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="search__body">

      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import Mapbox from "./Components/Mapbox.vue";
  import MapboxMarker from "./Components/MapboxMarker.vue";
  import markers from './../data/markers.json';

  export default defineComponent({
    created() {
      this.markers = markers;
    },
    data() {
      return {
        center: {lat: 52.489471, lng: -1.898575},
        zoom: 12,
        markers: [],
        search: false
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
