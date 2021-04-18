
<template>
  <div class="app">
    <div class="map">
      <mapbox
          :center="center"
          @update_center="update_center"
          :zoom="zoom"
          @update_zoom="update_zoom"
      >
        <mapbox-marker v-for="location in locations" :location="location" />
      </mapbox>
    </div>
    <div class="controls">
      <button class="btn" @click="search_open = true">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <div class="search" :class="{ 'is-open': search_open }">
      <div class="search__header">
        <h2 class="title">Find your Location</h2>
        <button class="btn" @click="search_open = false">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="search__body">
        <input type="text" v-model="search" placeholder="Search" />
        <div class="results">
          <result v-for="location in filtered_locations" :location="location" />
          <p class="no-results" v-if="filtered_locations.length === 0">No results</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import Mapbox from "./Components/Mapbox.vue";
  import MapboxMarker from "./Components/MapboxMarker.vue";
  import Result from "./Components/Result.vue";
  import locations from '../data/locations.json';

  export default defineComponent({
    components: {
      MapboxMarker,
      Mapbox,
      Result
    },
    created() {
      this.locations = locations;
    },
    data() {
      return {
        center: {lat: 52.489471, lng: -1.898575},
        zoom: 12,
        locations: [],
        search_open: false,
        search: ''
      }
    },
    computed: {
      filtered_locations() {
        let locations = this.locations;

        if (this.search === '') {
          return locations;
        }

        return locations.filter((location) => {
          if (location.title.includes(this.search)) {
            return true;
          }

          if (location.description.includes(this.search)) {
            return true;
          }

          return false;
        });
      }
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
