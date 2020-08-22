<template>
  <v-card dark link to="/assets/qsd">
    <div @mouseleave="stopPreview" class="preview">
      <v-img src="../../assets/exp.jpg" @mouseover="preparePreview" height="160" v-if="!previewing"></v-img>
      <Preview v-else :previewType="previewType"/>
      <v-progress-linear
      color="#46acc2"
      indeterminate
      v-if="loading"
    ></v-progress-linear>
    </div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline d-flex justify-space-between">
          {{asset.title}}
          <span class="price">20$</span>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
      <div class="grey--text ml-4">4.5 (413)</div>
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

<style scoped>
.price {
  color: #46acc2;
}

.preview {
  height: 160px;
}


</style>