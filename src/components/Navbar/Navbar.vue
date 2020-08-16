<template>
  <v-app-bar app dense dark>
    <img src="../../assets/logo.svg" height="120" class="pt-1" />
    <NavLink v-for="(navLink,index) in navLinks" :key="index" :link="navLink" />
    <v-text-field
      class="mt-5"
      prepend-inner-icon="mdi-magnify"
      rounded
      height="30"
      background-color="grey"
      placeholder="Search..."
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-btn icon class="mx-1">
      <v-icon>mdi-basket-outline</v-icon>
    </v-btn>
    <div v-if="!loggedIn">
      <v-btn @click="loggedIn = !loggedIn" color="orange" class="mx-2">Login</v-btn>
      <v-btn color="#46ACC2" class="mx-2">Sign Up</v-btn>
    </div>
    <div v-else>
      <v-menu offset-y="true" rounded="0" transition="slide-y-transition" dark>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-account-outline</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(link, i) in accountLinks" :key="i" link :to="link.route">
            <v-list-item-icon>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{link.title}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
import NavLink from "./NavLink";
export default {
  components: {
    NavLink,
  },
  data: () => ({
    loggedIn: false,
    navLinks: [
      {
        title: "Assets",
        subLinks: [
          { title: "3D", route: "/assets/3D" },
          { title: "2D", route: "/assets/2D" },
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
        title: "Profie",
        route: "/profile",
        icon: "mdi-account",
      },
      {
        title: "Sign out",
        route: "#",
        icon: "mdi-logout",
      },
    ],
  }),
};
</script>

<style scoped>
</style>

