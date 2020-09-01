<template>
  <div class="buy-asset pa-10">
    <h2>Asset Title</h2>
    <v-row>
      <v-col cols="12" md="6">
        <div class="author d-flex">
          <v-avatar>
            <v-icon dark large>mdi-account-circle</v-icon>
          </v-avatar>
          <h3>AmilcarTek Studio</h3>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="rating d-flex">
          <v-rating  half-increments small dense></v-rating>
          <p class="grey--text ml-2">4.5(413)</p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" class="px-0 px-xl-4 mt-n2">
        <h1>129.99$</h1>
      </v-col>
      <v-col cols="12" sm="6" class="px-0 ml-xl-n3">
        <v-btn block>
          <v-icon dark>mdi-cart-outline</v-icon>
          Add To Cart
        </v-btn>        
      </v-col>
    </v-row>
    <v-list dark class="px-5">
      <v-list-item
        v-for="j in 5"
        :key="j"
        class="my-4"
        style="border-bottom: 1px solid rgba(255,255,255,.4)"
      >
        <v-list-item-content>
          <div class="d-flex align-center justify-space-between">
            <h3>category</h3>
            <h3>3D</h3>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {};
</script>

<style>
    .buy-asset{
        border:1px solid rgba(255, 255, 255, 0.329);
    }

</style>