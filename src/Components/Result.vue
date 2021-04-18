<template>
  <div class="result">
    <h4 class="result__title">{{ location.title }}</h4>
    <p class="result__description">{{ location.description }}</p>
  </div>
</template>

<script>
export default {
  name: "result",
  props: ['location']
}
</script>
