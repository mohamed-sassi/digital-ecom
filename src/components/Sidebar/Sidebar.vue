<template>
  <v-card dark max-width="500" class="mx-auto sidebar">
    <v-toolbar dark class="pl-5" rounded="0">
      <v-toolbar-title>Catregories</v-toolbar-title>
    </v-toolbar>
    <v-treeview openOnClick selectable dark selected-color="orange" class="pl-5" :items="items"></v-treeview>

    <v-toolbar dark class="pl-5" rounded="0">
      <v-toolbar-title>Filters</v-toolbar-title>
    </v-toolbar>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Price</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-radio-group v-model="radioGroup">
            <v-radio v-for="(Radio,i) in Radios" :key="i" :label="Radio.name" color="#46ACC2"></v-radio>
          </v-radio-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Ratings</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-radio-group v-model="radioGroup">
            <v-radio v-for="(Rating,i) in Ratings" :key="i" :label="Rating.name" color="#46ACC2"></v-radio>
          </v-radio-group>
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
    Ratings: [
      {
        id: 30,
        name: "Unrated",
      },
      { id: 31, name: "1 star +" },
      { id: 32, name: "2 star +" },
      { id: 33, name: "3 star +" },
      { id: 34, name: "4 star +" },
      { id: 35, name: "5 stars" },
    ],
    Radios: [
      { id: 36, name: "Free" },
      { id: 37, name: "Up to 5 $" },
      { id: 38, name: "5 $ to 10 $" },
      { id: 40, name: "10 $ to 15 $" },
      { id: 41, name: "15 $ to 25 $" },
      { id: 42, name: "25 $ to 50 $" },
      { id: 43, name: "50 $ to 100 $" },
      { id: 44, name: "Over 100 $" },
    ],
  }),
};
</script>
<style scoped>
.sidebar {
  border-right: 1px solid grey;
}
</style>
