<template>
  <div class="d-flex align-center justify-center loader flex-column">
    <v-progress-circular indeterminate size="40"></v-progress-circular>
    <h3>Loading model ...</h3>
  </div>
</template>

<script>
export default {};
</script>

<style>
.loader{
  height: 100%;
  width: 100%;
  color: #3f3f3f;
}
</style>