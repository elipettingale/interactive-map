
<template>
  <div class="app" :class="{ 'search-open': search_open }">
    <div class="map">
      <mapbox
          ref="mapbox"
          :center="center"
          @update_center="update_center"
          :zoom="zoom"
          @update_zoom="update_zoom"
      >
        <mapbox-marker
            v-for="location in locations"
            :location="location"
            :active="active_location_id === location.id"
            @click="select_location(location)"
        />
      </mapbox>
    </div>
    <div class="controls">
      <button class="btn" @click="open_search">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <div class="search">
      <div class="search__header">
        <h2 class="title">Find your Location</h2>
        <button class="btn" @click="close_search">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="search__body">
        <input type="text" v-model="search" placeholder="Search" />
        <div class="categories">
          <button class="btn is-orange" @click="toggle_category(1)" :class="{ 'is-active': active_categories.includes(1) }">
            <i class="fas fa-utensils"></i>
          </button>

          <button class="btn is-green" @click="toggle_category(2)" :class="{ 'is-active': active_categories.includes(2) }">
            <i class="fas fa-bicycle"></i>
          </button>

          <button class="btn is-red" @click="toggle_category(3)" :class="{ 'is-active': active_categories.includes(3) }">
            <i class="fas fa-building"></i>
          </button>
        </div>
        <div class="results">
          <result
              v-for="location in filtered_locations"
              :location="location"
              :active="active_location_id === location.id"
              @click="select_location(location)"
          />
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
        search: '',
        active_location_id: null,
        active_categories: [1,2,3]
      }
    },
    computed: {
      filtered_locations() {
        let search = this.search.toLowerCase();
        let active_categories = this.active_categories;

        return this.locations.filter((location) => {
          if (!active_categories.includes(location.category)) {
            return false;
          }

          if (location.title.toLowerCase().includes(search)) {
            return true;
          }

          if (location.description.toLowerCase().includes(search)) {
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
      },

      select_location(location) {
        this.active_location_id = location.id;

        if (window.innerWidth < 768) {
          this.close_search();
        }

        this.$refs.mapbox.map.flyTo({
          center: location.coords
        })
      },

      toggle_category(category) {
        if (this.active_categories.includes(category)) {
          let index = this.active_categories.indexOf(category);
          this.active_categories.splice(index, 1);
        } else {
          this.active_categories.push(category);
        }
      },

      open_search() {
        this.search_open = true;
      },

      close_search() {
        this.search_open = false;

        setTimeout(() => {
          this.search = '';
        }, 300);
      }
    }
  });
</script>
