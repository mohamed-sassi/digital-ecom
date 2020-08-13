
<template>
<div class="c">
  <div class="filter">
    <v-switch v-model="disabled" class="ma-2" label="3D"></v-switch>
    <v-switch v-model="absolute" class="ma-2" label="2D"></v-switch>
    <v-switch v-model="openOnHover" class="ma-2" label="Characters & creatures"></v-switch>
    <v-switch v-model="closeOnClick" label="Furniture & Home"></v-switch>
    <v-switch v-model="closeOnContentClick" label="Cars & Vehicles"></v-switch>
    <v-switch v-model="offsetX" label="Plants & Nature"></v-switch>
    <v-switch v-model="offsetY" label="Y offset"></v-switch>
    <v-switch v-model="value" class="ma-2" label="Value"></v-switch>
  </div>
    <v-card flat color="transparent">
      <v-subheader>Price</v-subheader>

      <v-card-text>
        <v-row>
          <v-col class="px-4">
            <v-range-slider v-model="range" :max="max" :min="min" hide-details class="align-center">
              <template v-slot:prepend>
                <v-text-field
                  :value="range[0]"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  type="number"
                  style="width: 60px"
                  @change="$set(range, 0, $event)"
                ></v-text-field>
              </template>
              <template v-slot:append>
                <v-text-field
                  :value="range[1]"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  type="number"
                  style="width: 60px"
                  @change="$set(range, 1, $event)"
                ></v-text-field>
              </template>
            </v-range-slider>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-menu
      v-model="value"
      :disabled="disabled"
      :absolute="absolute"
      :open-on-hover="openOnHover"
      :close-on-click="closeOnClick"
      :close-on-content-click="closeOnContentClick"
      :offset-x="offsetX"
      :offset-y="offsetY"
    ></v-menu>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  
  data: () => ({
      
    disabled: false,
    absolute: false,
    openOnHover: false,
    value: false,
    closeOnClick: true,
    closeOnContentClick: true,
    offsetX: false,
    offsetY: true,
    min: 0,
    max: 100,
    slider: 40,
    range: [1, 100],
      
  }),
};
</script>

<style scoped>
.filter {
 
  display: grid;
  grid-template-columns: 1fr 1fr;
}
/*.c{
  background-color: whitesmoke;
  width: 30%;
   
  
}*/
</style>

