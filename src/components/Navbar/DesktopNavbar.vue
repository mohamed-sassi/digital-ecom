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
    <Cart />
    <div v-if="!loggedIn" class="d-flex">
      <Register/>
    </div>
    <div v-else>
      
      <v-menu offset-x offset-y rounded transition="slide-y-transition" dark>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-account-outline</v-icon>
          </v-btn>
        </template>

        <v-list>
          <div v-if="isAdmin">
          <v-list-item
            v-for="(link, i) in adminLinks"
            :key="i"
            :link ="link.route != null"
            :to="link.route"
          >
            <v-list-item-icon>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{link.title}}</v-list-item-title>
          </v-list-item>
            
          </div>
          <v-list-item
            v-for="(link, i) in accountLinks"
            :key="i"
            :link ="link.route != null"
            :to="link.route"
            @click="logout(link.onClick)"
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
/* eslint-disable no-unused-vars */
import NavLink from "./NavLink";
import Cart from './Cart';
import Register from './Register';
export default {
  components: {
    NavLink,
    Cart,
    Register,
  },
  props: {
    navLinks: Array,
    accountLinks: Array,
    loggedIn:Boolean,
    isAdmin:Boolean
  },
  data:()=>({
    message:false,
    adminLinks:[{
      title:"Upload product",
      route : "/upload",
      icon: "mdi-upload",
      onClick:null
    }]
  }),
  methods:{
    logout(action){
      if(action == "logout")
        this.$store.dispatch('logout').then(res => {
          console.log(res)
        })
    }
  }
};
</script>

<style scoped>
.search-bar {
  border-radius: 10px;
  max-width: 30%;
}

</style>