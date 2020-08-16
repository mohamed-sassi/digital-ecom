<template>
  <div class="con">
    <v-row>
      <v-col cols="12" sm="6" md="3" v-for="(asset,index) in models" :key="index">
        <AssetCard :model="asset" />
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
  data: () => ({
    models: [
      {
        title: "asset 1",
      },
      {
        title: "asset 2",
      },
      {
        title: "asset 3",
      },
      {
        title: "asset 4",
      },
      {
        title: "asset 5",
      },
      {
        title: "asset 6",
      },
      {
        title: "asset 7",
      },
    ],
  }),
};
</script>

<style scoped>
</style>
