<template>
  <v-card dark link :to="'/assets/'+asset.id">
    <div @mouseleave="stopPreview" class="preview mb-0">
      <v-img :src="'http://localhost/marketplace-backend/storage/app/public/images/'+asset.thumbnail" @mouseover="preparePreview" height="200" v-if="!previewing"></v-img>
      <Preview v-else :previewType="previewType" :file="asset.file_name"/>
      <v-progress-linear
      color="#46acc2"
      indeterminate
      v-if="loading"
    ></v-progress-linear>
    </div>
    <v-list>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline d-flex justify-space-between">
          {{asset.title}}
          <span class="price">{{asset.price}}$</span>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    </v-list>
    <v-card-actions>
      <v-rating :value="0" color="amber" dense half-increments readonly size="14"></v-rating>
      <div class="grey--text ml-4">0 (0)</div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  components: {
    Preview : () => import('./Preview')
  },
  props: {
    asset: Object,
  },
  data: () => ({
    previewing: false,
    loading:false,
    timeout:null,
    previewType:"mini"
  }),

  methods: {
    preparePreview() {
        this.timeout = setTimeout(this.startPreview,1000)
        this.loading = true
    },
    startPreview(){
      this.previewing = true
      this.loading = false
    },
    stopPreview() {
      clearTimeout(this.timeout)
      this.previewing = false;
      this.loading = false
    },
  },
};

</script>

<style>
.price {
  color: #46acc2;
}

.preview {
  height: 200px;
}


</style>