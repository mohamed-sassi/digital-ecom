<template>
  <DesktopNavbar v-if="!onMobile" :navLinks="navLinks" :accountLinks="accountLinks" :loggedIn="loggedIn"/>
  <MobileNavbar v-else :accountLinks="accountLinks" :loggedIn="loggedIn"/>
</template>

<script>

import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
export default {
  components: {
    DesktopNavbar,
    MobileNavbar
  },
  data: () => ({
    navLinks: [
      {
        title: "Assets",
        subLinks: [
          { title: "3D", route: "/3D" },
          { title: "2D", route: "/2D" },
        ],
      },
      {
        title: "Explore",
        subLinks: [
          { title: "Models", route: "/models" },
          { title: "Audio & sounds", route: "/sounds" },
        ],
      },
    ],
    accountLinks: [
      {
        title: "Profile",
        route: "/profile",
        icon: "mdi-account",
        onClick: null
      },
      {
        title: "My collection",
        route: "/collection",
        icon: "mdi-image-multiple",
        onClick:null
      },
      {
        title: "Sign out",
        route: null,
        icon: "mdi-logout",
        onClick:'logout'
      },
    ],
    adminLink:{
      title:"Upload product",
      route : "/upload",
      icon: "mdi-upload",
      onClick:null
    }
  }),
  computed:{
    onMobile(){
      return this.$store.getters.onMobile
    },
    loggedIn(){
      return this.$store.getters.loggedIn 
    },
    isAdmin(){
      return this.$store.getters.isAdmin
    },
  },
  mounted(){
    if(this.isAdmin){
      this.accountLinks.unshift(this.adminLink)
    }
  }
};
</script>

<style scoped>
</style>

