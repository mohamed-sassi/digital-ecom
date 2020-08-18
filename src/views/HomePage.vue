<template>
  <v-row>
    <v-col cols="3" v-if="!onMobile">
      <Sidebar/>
    </v-col>
    <v-col :cols="onMobile ? '12' : '9'">
      <Slider />
      <v-divider color="grey"></v-divider>
      <div class="pt-5 px-5" v-for="(category,index) in categories" :key="index">
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
            title: "asset 5",
          },
          {
            title: "asset 6",
          },
          {
            title: "asset 7",
          },
          {
            title: "asset 8",
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
  computed:{
    onMobile(){
      return this.$store.getters.onMobile;
    }
  }
};
</script>
<style scoped>
</style>
