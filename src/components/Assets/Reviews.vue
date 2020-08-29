<template>
  <div>
    <h2>Reviews</h2>
    <v-list dark color="transparent">
      <div v-for="i in 2" :key="i">
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline d-flex justify-space-between">John Doe</v-list-item-title>
            <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
            <v-list-item-subtitle>29/09/2020</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <div class="review-text px-16">
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis mi eu iaculis molestie. Morbi elit nisl, feugiat quis pretium eu, rutrum eu metus. Nullam mollis fringilla tincidunt. Morbi nibh tellus, porttitor in libero vel, rutrum placerat massa. Quisque aliquam velit et lectus pretium pulvinar. Quisque eget leo nec diam malesuada pulvinar et et tortor. Duis ac sagittis elit, et iaculis elit. Pellentesque velit est, ultricies id diam vel, pretium faucibus est. Fusce et dolor suscipit velit porttitor sollicitudin. Morbi non pharetra erat, eget laoreet leo. Proin suscipit semper blandit. In eleifend nec mi sed suscipit.
            Vestibulum ut metus convallis, gravida odio ac, ultrice
          </p>
        </div>
        <v-divider inset></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>