<template>
<div>
  <v-container>
    <h1>Upload your product</h1>
    <form @submit.prevent="uploadProduct" ref="form">
      <v-text-field type="text" label="Product name" dark name="title" />
      <v-select :items="categories" dark label="Category" name="category" />
      <v-textarea label="Product description" dark name="description" />
      <v-text-field type="number" label="price" dark name="price" />
      <v-file-input
        label="Product Images"
        accept="Image/*"
        dark
        name="images[]"
        multiple
      />
      <v-file-input
        label="Product File"
        accept=".zip"
        dark
        name="product_file"
        ref="file"
      />
      <v-btn block type="submit">Upload</v-btn>
    </form>
  </v-container>
  <FullScreenLoading v-if="loading" class="loading"/>
</div>
</template>

<script>
import axios from "axios";
import FullScreenLoading from "./FullScreenLoading";
export default {
  components:{
    FullScreenLoading
  },
  data: () => ({
    categories: ["3D", "2D"],
    title: null,
    category: null,
    description: null,
    price: null,
    images: null,
    file: null,
    loading :false
  }),
  methods: {
    uploadProduct() {
      this.loading = true
      let formData = new FormData(this.$refs.form);
      axios
        .post("http://127.0.0.1:8000/api/products/uploadProduct", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          this.loading = false
        })
        .catch(e => {
          console.log(e.response.data)
        })
    },
  },
};
</script>

<style>
.loading{
  position: absolute;
  top: 0;
  left: 0;
}
</style>