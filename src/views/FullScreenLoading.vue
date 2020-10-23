<template>
  <div class="d-flex align-center justify-center loader flex-column">
    <v-progress-circular indeterminate size="40"></v-progress-circular>
    <h3>Loading...</h3>
  </div>
</template>

<script>
export default {};
</script>

<style>
.loader{
    background-color: rgba(255, 255, 255,.6);
  height: 100%;
  width: 100%;
  color: #3f3f3f;
}
</style>