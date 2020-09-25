<template>
  <v-container>
    <h1>Upload your product</h1>
    <form @submit.prevent="uploadProduct">
      <v-text-field type="text" label="Product name" dark v-model="title" />
      <v-select :items="categories" dark label="Category" v-model="category" />
      <v-textarea label="Product description" dark v-model="description" />
      <v-text-field type="number" label="price" dark v-model="price" />
      <v-file-input label="Product Images" accept="Image/*" dark v-model="images" />
      <v-file-input label="Product File" accept=".zip" dark ref="file" />
      <v-btn block type="submit">Upload</v-btn>
    </form>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    categories: ["3D", "2D"],
    title: null,
    category: null,
    description: null,
    price: null,
    images: null,
    file: null,
  }),
  methods: {
    uploadProduct() {
      this.file = this.$refs.file
      console.log(this.file)
      axios
        .post(
          "http://127.0.0.1:8000/api/products/uploadProduct",
          {
            product_file: this.file,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style>
</style>