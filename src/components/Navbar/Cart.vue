<template>
  <v-menu offset-y :close-on-content-click="false">
    <template v-slot:activator="{ on, attrs }" >
      <v-btn icon class="mx-1" v-bind="attrs" v-on="on">
        <v-badge :content="cart.length.toString()" color="#46ACC2" overlap>
          <v-icon>mdi-basket-outline</v-icon>
        </v-badge>
      </v-btn>
    </template>
    <div v-if="cart.length != 0">
      <v-list width="300">
        <v-list-item v-for="(item, i) in cart" :key="i">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{item.title}}</v-list-item-title>
          <v-btn icon>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
      <router-link to="/checkout" style="text-decoration:none;">
        <v-btn block color="#46ACC2" >Checkout</v-btn>
      </router-link>
    </div>
    <div v-else class="cart d-flex justify-center align-center flex-column">
      <v-icon color="#a5a5a5" x-large>mdi-cart</v-icon>
      <h2>Your cart is empty ...</h2>
    </div>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    cart: [
      {
        title: "item1",
        icon: "mdi-android",
      },
      {
        title: "item2",
        icon: "mdi-apple",
      },
    ],
  }),
};
</script>

<style>
.cart {
  width: 300px;
  height: 300px;
  border-radius: 10px;
  background-color: rgb(48, 48, 48);
  color: #a5a5a5;
}


</style>