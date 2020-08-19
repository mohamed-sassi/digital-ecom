<template>
  <DesktopNavbar v-if="!onMobile" :navLinks="navLinks" :accountLinks="accountLinks" :loggedIn="loggedIn"/>
  <MobileNavbar v-else :loggedIn="loggedIn" :accountLinks="accountLinks"/>
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
    loggedIn: false,
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
        route: "#",
        icon: "mdi-logout",
        onClick:'logout'
      },
    ]
  }),
  computed:{
    onMobile(){
      return this.$store.getters.onMobile
    }
  }
};
</script>

<style scoped>
</style>

