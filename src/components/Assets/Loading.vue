<template>
  <div class="d-flex align-center justify-center loader flex-column">
    <v-progress-circular indeterminate size="50"></v-progress-circular>
    <h2>Loading model ...</h2>
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