<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" md="3" v-for="(asset,index) in assets" :key="index">
        <AssetCard :asset="asset" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AssetCard from "./AssetCard";
export default {
  components: {
    AssetCard,
  },
  props:{
    assets:Array
  }
};
</script>

<style scoped>
</style>
