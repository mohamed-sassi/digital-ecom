<template>
  <v-menu offset-y="true" rounded="0" transition="slide-y-transition" open-on-hover="true" dark>
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="mx-1" dark text v-bind="attrs" v-on="on">
        <v-icon left>mdi-menu-down</v-icon>
        {{link.title}}
      </v-btn>
    </template>

    <v-list>
      <v-list-item v-for="(item, i) in link.subLinks" :key="i" link :to="item.route">
        <v-list-item-title>{{item.title}}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    link: Object,
  },
};
</script>

<style>
</style>