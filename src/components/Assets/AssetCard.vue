<template>
  <v-card dark link to="/assets/qsd">
    <v-img src="../../assets/exp.jpg" height="160"></v-img>
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
  props: {
    asset: Object,
  },
};
</script>

<style scoped>
.price {
  color:#46ACC2;
}
</style>