
<template>
  <mapbox></mapbox>
</template>

<script>
  import { defineComponent } from 'vue';
  import Mapbox from "./Components/Mapbox.vue";

  export default defineComponent({
    data() {
      return {}
    },
    components: {
      Mapbox
    }
  });
</script>
