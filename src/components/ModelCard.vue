<template>
  <v-card
    max-width="100%"
    class="mx-auto"
  >
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{model.title}}</v-list-item-title>
        <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      src="../assets/3651012b.png"
      height="160"
    ></v-img>

    <v-card-text>
      3D,Nature...
    </v-card-text>

    <v-card-actions>
      <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      
      <v-spacer></v-spacer>
     <v-btn
        text
        color="#fe5000"
      >
        Add 
      </v-btn>
        
      
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props:{
        model:Object
    }
}
</script>

<style>

</style>