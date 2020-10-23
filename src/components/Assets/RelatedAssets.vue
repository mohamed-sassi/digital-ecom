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
    props:{
      assetId:Number
    },
  data: () => ({
    assets: [],
  }),
  mounted(){
    this.$store.dispatch('getAssets').then(assets => {
      this.assets = assets.filter(asset => asset.id != this.assetId)
    })
  }
};
</script>

<style>
</style>