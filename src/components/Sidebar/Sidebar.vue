<template>
  <v-card max-width="500" class="mx-auto">
    <v-toolbar dark class="pl-5" rounded="0">
      <v-toolbar-title>Catregories</v-toolbar-title>
    </v-toolbar>
    <v-treeview selectable dark selected-color="orange" class="pl-5 sidebar" :items="items"></v-treeview>
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
  }),
};
</script>
<style scoped>
.sidebar {
  background-color: #0e0f14;
  border-right: 1px solid grey;
}
</style>
