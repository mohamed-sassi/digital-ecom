<template>
<div class="con">
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="250"
  >
    <v-img
      height="100"
      src="../assets/3651012b.png"
    ></v-img>

    <v-card-title>The journey</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>
      <div class="my-4 subtitle-1">
        #3D,#Nature
      </div>
   
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="add"
      >
        Add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="250"
  >
    <v-img
      height="100"
      
      src="../assets/3651012b.png"
    ></v-img>

    <v-card-title>The journey</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>
      <div class="my-4 subtitle-1">
        #3D,#Nature
      </div>
   
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="add"
      >
        Add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="250"
  >
    <v-img
      height="100"
      src="../assets/3651012b.png"
    ></v-img>

    <v-card-title>The journey</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>
      <div class="my-4 subtitle-1">
        #3D,#Nature
      </div>
   
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="add"
      >
        Add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
</div>
  
</template>

<script>
  export default {
    data: () => ({
      loading: false,
    }),

    methods: {
      Add () {
        this.loading = true
      },
    },
  }
</script>

<style scoped>
.con{
  display: grid;
  grid-template-columns: 33% 33% 33%;  
}
</style>
