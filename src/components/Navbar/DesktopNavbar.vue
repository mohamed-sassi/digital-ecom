<template>
  <v-app-bar app dense dark hide-on-scroll v-if="!onMobile">
    <router-link to="/">
      <img
        src="../../assets/Annotation_2020-08-17_185114-removebg-preview.png"
        height="60"
        class="pt-1"
      />
    </router-link>
    <NavLink v-for="(navLink,index) in navLinks" :key="index" :link="navLink" />
    <v-text-field
      class="search-bar mt-6 mx-2"
      prepend-inner-icon="mdi-magnify"
      dense
      solo
      background-color="#f0f8ff30"
      placeholder="Search..."
    ></v-text-field>
    <v-spacer></v-spacer>
    <div v-if="!loggedIn" class="d-flex">
      <v-btn color="orange" class="mx-2" @click="loggedIn = true">Login</v-btn>
      <v-btn color="#46ACC2" class="mx-2">Sign Up</v-btn>
    </div>
    <div v-else>
      <v-btn icon class="mx-1">
        <v-icon>mdi-basket-outline</v-icon>
      </v-btn>
      <v-menu offset-y="true" rounded="0" transition="slide-y-transition" dark>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-account-outline</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(link, i) in accountLinks" :key="i" link :to="link.route" @click="link.onClick ? (loggedIn = false) : null">
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
  props: {
    navLinks: Array,
    accountLinks: Array,
    loggedIn: Boolean,
  },
};
</script>

<style scoped>
  .search-bar{
    border-radius: 10px;
    max-width: 30%;
  }
</style>