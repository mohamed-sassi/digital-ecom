<template>
  <v-container class="asset-container pa-2">
    <v-row>
      <v-col cols="12" md="7" xl="8">
        <Preview :previewType="previewType"/>
      </v-col>
      <v-col cols="12" md="5" xl="4">
        <BuyAsset />
      </v-col>
    </v-row>
    <v-row class="pt-5">
      <v-col cols="12" md="8" class="px-10">
        <div class="description ">
          <h2>Description</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis mi eu iaculis molestie. Morbi elit nisl, feugiat quis pretium eu, rutrum eu metus. Nullam mollis fringilla tincidunt. Morbi nibh tellus, porttitor in libero vel, rutrum placerat massa. Quisque aliquam velit et lectus pretium pulvinar. Quisque eget leo nec diam malesuada pulvinar et et tortor. Duis ac sagittis elit, et iaculis elit. Pellentesque velit est, ultricies id diam vel, pretium faucibus est. Fusce et dolor suscipit velit porttitor sollicitudin. Morbi non pharetra erat, eget laoreet leo. Proin suscipit semper blandit. In eleifend nec mi sed suscipit.
            Vestibulum ut metus convallis, gravida odio ac, ultrices purus. Fusce tempus quam felis, ut malesuada massa luctus vel. Proin placerat, mauris a maximus pulvinar, libero dui condimentum risus, at efficitur ex erat laoreet arcu. Praesent suscipit, neque quis malesuada tristique, enim sapien feugiat lacus, sed molestie est risus eu nunc. Vivamus consequat convallis placerat. Curabitur neque eros, cursus id turpis id, posuere scelerisque lacus. Nunc non scelerisque neque. Suspendisse id eros in dolor tincidunt dictum eu ut leo. Nunc vestibulum, massa vestibulum tempor molestie, dolor nisi vulputate ex, a ultrices tortor lorem nec elit. Mauris non odio tellus. Morbi eget metus fringilla, tempus arcu at, rhoncus nunc. Pellentesque placerat ac eros in convallis.
            Fusce eros ipsum, hendrerit id erat id, ornare efficitur nisl. Quisque ac euismod ligula. Phasellus finibus nisl purus, at maximus libero commodo eu. Vivamus auctor purus ut arcu imperdiet pretium. Donec semper congue erat, vitae viverra massa blandit id. Etiam at massa fringilla, ultricies magna non, ultricies nisi. Integer consectetur sagittis laoreet.
          </p>
        </div>
        <div class="reviews">
          <Reviews/>
        </div>
      </v-col>
      <v-col cols="12" md="4">
          <RelatedAssets />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RelatedAssets from '@/components/Assets/RelatedAssets'
import BuyAsset from "@/components/Assets/BuyAsset";
import Preview from '@/components/Assets/Preview'
import Reviews from '@/components/Assets/Reviews'
export default {
  components: {
    RelatedAssets,
    BuyAsset,
    Preview,
    Reviews
  },
  data:()=>({
    previewType:"large",
  })
};
</script>

<style>
</style>