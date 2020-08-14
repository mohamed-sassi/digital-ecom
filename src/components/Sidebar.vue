
<template>
  <v-card max-width="500" class="mx-auto">
    <v-toolbar color="teal" dark>
      <v-toolbar-title>Catregories</v-toolbar-title>
    </v-toolbar>

    <v-treeview selectable selected-color= "red"  :items="items"></v-treeview>
    <v-divider :inset="inset"></v-divider>

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
        name: "3D:",
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
            name: "Envionments",
            children: [
              { id: 12, name: "" },
              { id: 13, name: "" },
              { id: 14, name: "" },
            ],
          },
          {
            id: 10,
            name: "Props",
            children: [
              { id: 12, name: "Furinture" },
              { id: 13, name: "Guns" },
              { id: 14, name: "Clothing" },
            ],
          },
          {
            id: 10,
            name: "Vehicals",
            children: [
              { id: 12, name: "Air" },
              { id: 13, name: "Sea" },
              { id: 14, name: "Land" },
            ],
          },
          { id: 12, name: "Animations" },
        ],
      },
      {
        id: 15,
        name: "Audio",
        children: [
          {
            id: 20,
            name: "Soun Fx",
            children: [
              { id: 21, name: "Weapons" },
              { id: 22, name: "Voices" },
              { id: 23, name: "Animals" },
            ],
          },
          { id: 24, name: "Music" },
        ],
      },
      
    ],
  }),
};
</script>

