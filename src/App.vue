<template>
  <v-app>
    <Navbar />
      <v-row>
        <v-col cols="3">
          <Sidebar/>
        </v-col>
        <v-col cols="9">
          <router-view />
        </v-col>
      </v-row>
  </v-app>
</template>


<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";


export default {
  components: {
    Navbar,
    Sidebar
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  
}
</style>
