<template>
  <v-app id="app">
    <Navbar />
    <Head/>
    <v-main>
      <v-row>
        <v-col cols="3">
          <Sidebar />
        </v-col>
        <v-col cols="9">
          <router-view />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>


<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Head from "@/components/HomePage/Head.vue"

export default {
  components: {
    Navbar,
    Sidebar,
    Head,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  background-color: #0e0f14;
  color: white;
}
</style>
