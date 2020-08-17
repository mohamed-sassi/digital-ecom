<template>
  <div class="buy-asset pa-10">
    <h2>Asset Title</h2>
    <div class="avatar d-flex align-center">
      <v-avatar>
        <v-icon dark large>mdi-account-circle</v-icon>
      </v-avatar>
      <h3>AmilcarTek Studio</h3>
      <v-rating class="ml-auto" half-increments small dense></v-rating>
      <div class="grey--text ml-2">4.5 (413)</div>
    </div>
    <div class="d-flex justify-space-between align-center price-buy py-4">
      <h1 class="price">129.99$</h1>
      <v-btn x-large>
        <v-icon dark>mdi-cart-outline</v-icon>Add To Cart
      </v-btn>
    </div>
    <v-list dark class="px-5">
      <v-list-item
        v-for="j in [1,2,3,4,5]"
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