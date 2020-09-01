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
    <div v-if="this.$store.state.loggedIn" class="d-flex">
      <Register/>
    </div>
    <div v-else>
      <Cart />
      <v-menu offset-x offset-y rounded transition="slide-y-transition" dark>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-account-outline</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(link, i) in accountLinks"
            :key="i"
            link
            :to="link.route"
            @click="link.onClick ? (this.$store.state.loggedIn = false) : null"
          >
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
import Cart from './Cart';
import Register from './Register';
export default {
  components: {
    NavLink,
    Cart,
    Register
  },
  props: {
    navLinks: Array,
    accountLinks: Array
  },
};
</script>

<style scoped>
.search-bar {
  border-radius: 10px;
  max-width: 30%;
}

</style>