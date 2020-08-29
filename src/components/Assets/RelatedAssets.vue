<template>
  <div>
    <h1>You might also like</h1>
    <div class="d-flex flex-column px-xl-16">
        <AssetCard v-for="(asset,index) in assets" :key="index" :asset="asset" class="my-8"/>
    </div>
  </div>
</template>

<script>
import AssetCard from "@/components/Assets/AssetCard";
export default {
    components:{
        AssetCard
    },
  data: () => ({
    assets: [
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
    ],
  }),
};
</script>

<style>
</style>