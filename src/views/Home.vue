<template>
  <div class="home">
    <Head />
    <v-divider color="grey"></v-divider>
    <div class="pt-5">
      <h1>Trending Assets</h1>
      <Assets />
    </div>
  </div>
</template>

<script>
import Assets from "@/components/Assets/Assets.vue";
import Head from "@/components/HomePage/Head.vue";
export default {
  components: {
    Assets,
    Head,
  },
  name: "Home",
};
</script>
<style scoped>
</style>
