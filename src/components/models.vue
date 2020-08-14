<template>
<div class="con">
 <v-card
    v-for="(asset,index) in models"
    :key="index"
    max-width="100%"
    class="mx-auto"
  >
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline"> {{asset.title}}</v-list-item-title>
        <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      src="../assets/3651012b.png"
      height="194"
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
        color="deep-purple accent-4"
      >
        Add 
      </v-btn>
        
      
    </v-card-actions>
  </v-card>

</div>
  
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      models:[
        {
          title:"asset 1"
        },
        {
          title:"asset 2"
        },
        {
          title:"asset 3"
        },
        {
          title:"asset 4"
        },
        {
          title:"asset 5"
        },
        {
          title:"asset 6"
        },
        {
          title:"asset 7"
        },
      ]
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
  grid-template-columns: 24% 24% 24% 24% ;  
  grid-gap: 1em;
  background-color:#e5efef;
  

}


</style>
