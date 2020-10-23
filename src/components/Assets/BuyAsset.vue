<template>
  <div class="buy-asset pa-10">
    <h2>{{asset.title}}</h2>
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
          <p class="grey--text ml-2">0 (0)</p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" class="px-4 px-xl-4 mt-n2">
        <h1>{{asset.price}}$</h1>
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
      <v-list-item       
        class="my-4"
        style="border-bottom: 1px solid rgba(255,255,255,.4)"
      >
        <v-list-item-content>
          <div class="d-flex align-center justify-space-between">
            <h3>Sub-category</h3>
            <h3>{{asset.title == "Pokemon" ? "Animals" : (asset.title == "Matilda") ? "Person" : "Vehicles"}}</h3>
          </div>
        </v-list-item-content>
      </v-list-item>
      <v-list-item       
        class="my-4"
        style="border-bottom: 1px solid rgba(255,255,255,.4)"
      >
        <v-list-item-content>
          <div class="d-flex align-center justify-space-between">
            <h3>File Size</h3>
            <h3>{{asset.title == "Pokemon" ? "3.2Mb" : "6.5Mb"}}</h3>
          </div>
        </v-list-item-content>
      </v-list-item>
      <v-list-item       
        class="my-4"
        style="border-bottom: 1px solid rgba(255,255,255,.4)"
      >
        <v-list-item-content>
          <div class="d-flex align-center justify-space-between">
            <h3>Format</h3>
            <h3>GLTF</h3>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  props:{
    asset:Object
  }
};
</script>

<style>
    .buy-asset{
        border:1px solid rgba(255, 255, 255, 0.329);
    }

</style>