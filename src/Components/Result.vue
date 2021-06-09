<template>
  <div :class="classes">
    <h4 class="result__title">{{ location.title }}</h4>
    <p class="result__description">{{ location.description }}</p>
  </div>
</template>

<script>
export default {
  name: "result",
  props: ['location', 'active'],
  computed: {
    classes() {
      let classes = 'result ';

      let colors = {
        1: 'orange',
        2: 'green',
        3: 'red'
      }

      classes += `is-${colors[this.location.category]} `;

      if (this.active) {
        classes += 'is-active ';
      }

      return classes;
    }
  }
}
</script>
