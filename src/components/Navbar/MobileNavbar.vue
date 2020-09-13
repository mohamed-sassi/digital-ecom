<template>
  <div>
    <v-app-bar dark app>
      <div class="d-flex justify-space-between" style="width:100%">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <router-link to="/">
          <img
            src="../../assets/Annotation_2020-08-17_185114-removebg-preview.png"
            height="40"
            class="pt-1"
          />
        </router-link>
        <div v-if="loggedIn">
          <Cart/>
          <v-menu offset-y="true" rounded="0" transition="slide-y-transition" dark>
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
              >
                <v-list-item-icon>
                  <v-icon>{{link.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{link.title}}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed dark temporary>
      <router-link to="/" class="d-flex justify-center">
        <img
          src="../../assets/Annotation_2020-08-17_185114-removebg-preview.png"
          height="40"
          class="pt-1"
        />
      </router-link>
      <v-text-field
      class="search-bar mt-6 ml-2"
      prepend-inner-icon="mdi-magnify"
      dense
      outlined
      background-color="#f0f8ff30"
      placeholder="Search..."
    ></v-text-field>
      <Sidebar />
      <div v-if="!loggedIn" class="loginButtons">
        <v-btn color="orange" class="my-2" @click="loggedIn = true">Login</v-btn>
        <v-btn color="#46ACC2" class="my-2">Sign Up</v-btn>
      </div>
    </v-navigation-drawer>
  </div>
</template>


<script>
import Sidebar from "../Sidebar/Sidebar";
import Cart from './Cart'
export default {
  components: {
    Sidebar,
    Cart
  },
  props: {
    accountLinks: Array,
    loggedIn:Boolean
  },
  data: () => ({
    drawer: false,
    group: null,
    items: [
      ["mdi-email", "Inbox"],
      ["mdi-account-supervisor-circle", "Supervisors"],
      ["mdi-clock-start", "Clock-in"],
    ],
  }),
};
</script>
<style>
.loginButtons {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10%;
}

.search-bar{
  border-radius: 10px;
  width: 95%;
}
</style>