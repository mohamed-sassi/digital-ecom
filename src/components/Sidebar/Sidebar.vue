<template>
  <v-card dark max-width="500" class="mx-auto sidebar">
    <v-toolbar dark class="pl-5" rounded="0">
      <v-toolbar-title>Catregories</v-toolbar-title>
    </v-toolbar>
    <v-treeview openOnClick selectable dark selected-color="orange" class="pl-5" :items="items" ></v-treeview>
    <v-toolbar dark class="pl-5" rounded="0">
      <v-toolbar-title>Filters</v-toolbar-title>
    </v-toolbar>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Price</v-expansion-panel-header>
        <v-expansion-panel-content>
         
            
          <v-range-slider v-model="range" :max="max" :min="min" hide-details class="align-center">
          </v-range-slider>
           <v-row>
          <v-col cols="3">
            Min
          </v-col>
          <v-col cols="3">
            
          <v-text-field
          
          :value="range[0] "
          class="mt-0 pt-0"
          hide-details
           single-line
          type="number"
          style="width: 60px"
          @change="$set(range, 1, $event)"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            Max
          </v-col>
          <v-col cols="3">

            <v-text-field
              label="Max"
                :value="range[1]"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
                @change="$set(range, 1, $event)"
              ></v-text-field>
            
            </v-col>
         </v-row>
        
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Ratings</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-rating v-model="rating" background-color="orange lighten-3" color="orange" >
          </v-rating>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: "2D",
        children: [
          { id: 2, name: "GUI" },
          { id: 3, name: "Characters" },
          { id: 4, name: "Props" },
          { id: 5, name: "Environment" },
        ],
      },
      {
        id: 6,
        name: "3D",
        children: [
          {
            id: 7,
            name: "Characters",
            children: [
              { id: 8, name: "Animals" },
              { id: 9, name: "Humanoids" },
            ],
          },
          {
            id: 10,
            name: "Environments",
            children: [
              { id: 11, name: "trees" },
              { id: 12, name: "lands" },
              { id: 13, name: "houses" },
            ],
          },
          {
            id: 14,
            name: "Props",
            children: [
              { id: 15, name: "Furinture" },
              { id: 16, name: "Guns" },
              { id: 17, name: "Clothing" },
            ],
          },
          {
            id: 18,
            name: "Vehicles",
            children: [
              { id: 19, name: "Air" },
              { id: 20, name: "Sea" },
              { id: 21, name: "Land" },
            ],
          },
          { id: 22, name: "Animations" },
        ],
      },
      {
        id: 23,
        name: "Audio",
        children: [
          {
            id: 25,
            name: "Sound Fx",
            children: [
              { id: 26, name: "Weapons" },
              { id: 27, name: "Voices" },
              { id: 28, name: "Animals" },
            ],
          },
          { id: 29, name: "Music" },
        ],
      },
    ],
    rating : 0,
    min: 0,
    max: 100,
    slider: 40,
    range: [20, 70],
  }),
};
</script>
<style scoped>
.sidebar {
  border-right: 1px solid grey;
}
</style>
