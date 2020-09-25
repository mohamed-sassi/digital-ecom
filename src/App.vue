<template>
  <v-app id="app">
    <Navbar />
    <v-main>
      <v-row>
        <v-col cols="12">
          <router-view />
        </v-col>
      </v-row>
    </v-main>
    <Footer/>
  </v-app>
</template>


<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
  beforeCreate(){
    this.$store.dispatch('getUser',this.$store.state.token)
  }
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
  overflow: hidden;
}
</style>
