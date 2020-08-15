<template>
  <div class="home">
   
    <v-divider color="grey"></v-divider>
    <div class="pt-5">
      <h1>Trending Assets</h1>
      <Assets />
    </div>
  </div>
</template>

<script>
import Assets from "@/components/Assets/Assets.vue";

export default {
  components: {
    Assets,
    
  },
  name: "Home",
};
</script>
<style scoped>
</style>
