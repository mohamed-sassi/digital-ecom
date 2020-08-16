<template>
  <v-row>
    <v-col cols="3">
      <Sidebar/>
    </v-col>
    <v-col cols="9">
      <Slider />
      <v-divider color="grey"></v-divider>
      <div class="pt-5 pr-5" v-for="(category,index) in categories" :key="index">
        <h1>{{category.type}}</h1>
        <Assets :assets="category.assets" />
        <v-divider color="grey"></v-divider>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Assets from "@/components/Assets/Assets.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Slider from "@/components/HomePage/Slider";
export default {
  components: {
    Assets,
    Slider,
    Sidebar
  },
  data: () => ({
    categories: [
      {
        type: "Trending assets",
        assets: [
          {
            title: "asset 1",
          },
          {
            title: "asset 2",
          },
          {
            title: "asset 3",
          },
          {
            title: "asset 4",
          },
        ],
      },
      {
        type: "Recent assets",
        assets: [
          {
            title: "asset 1",
          },
          {
            title: "asset 2",
          },
          {
            title: "asset 3",
          },
          {
            title: "asset 4",
          },
        ],
      },
      {
        type: "Top Rated assets",
        assets: [
          {
            title: "asset 1",
          },
          {
            title: "asset 2",
          },
          {
            title: "asset 3",
          },
          {
            title: "asset 4",
          },
        ],
      },
    ],
  }),
  name: "Home",
};
</script>
<style scoped>
</style>
