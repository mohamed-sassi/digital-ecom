<template>
  <v-container class="asset-container pa-2">
    <v-row>
      <v-col cols="12" md="7" lg="8">
        <AssetsSlider :asset="asset" v-if="asset"/>
      </v-col>
      <v-col cols="12" md="5" lg="4">
        <BuyAsset :asset="asset"/>
      </v-col>
    </v-row>
    <v-row class="pt-5">
      <v-col cols="12" md="7" xl="8" class="px-10">
        <v-tabs background-color="transparent" dark v-model="tab" grow>
          <v-tab>Description</v-tab>
          <v-tab>Reviews</v-tab>
        </v-tabs>
        <v-tabs-items dark v-model="tab" class="tabs">
          <v-tab-item>
            <div class="description" v-if="asset">
              <p>
                {{asset.description}}
              </p>
            </div>
          </v-tab-item>
          <v-tab-item>
            <div class="reviews">
              <Reviews />
            </div>
          </v-tab-item>
        </v-tabs-items>
      </v-col>

      <v-col cols="12" md="5" xl="4">
        <RelatedAssets :assetId="asset.id"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RelatedAssets from "@/components/Assets/RelatedAssets";
import BuyAsset from "@/components/Assets/BuyAsset";
import Reviews from "@/components/Assets/Reviews";
import AssetsSlider from "@/components/Assets/AssetsSlider";
export default {
  components: {
    RelatedAssets,
    BuyAsset,
    Reviews,
    AssetsSlider,
  },
  data:()=>({
    asset:null,
    tab:""
  }),
  mounted(){
    this.$store.dispatch('getAssetById',this.$route.params.id).then(asset => {
      console.log(asset);
      this.asset = asset
    })
  }
};
</script>

<style>
.tabs{
  padding: 50px 10px;
  background-color: transparent !important;
}
</style>