<template>
  <div class="result">
    <h4>{{ location.title }}</h4>
    <p>{{ location.description }}</p>
  </div>
</template>

<script>
export default {
  name: "result",
  props: ['location']
}
</script>
