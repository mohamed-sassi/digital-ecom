<template>
  <v-row>
    <v-col cols="3" v-if="!onMobile">
      <Sidebar/>
    </v-col>
    <v-col :cols="onMobile ? '12' : '9'">
      <Slider />
      <v-divider color="grey"></v-divider>
      <div class="pt-5 px-5">
        <h1>Latest assets</h1>
        <Assets :assets="assets" />
        <v-divider color="grey"></v-divider>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Assets from "@/components/Assets/Assets.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Slider from "@/components/HomePage/Slider";
export default {
  components: {
    Assets,
    Slider,
    Sidebar
  },
  data: () => ({
    assets:[]
  }),
  computed:{
    onMobile(){
      return this.$store.getters.onMobile;
    }
  },
  mounted(){
    this.$store.dispatch('getAssets').then(assets => {
      this.assets = assets
    })
  }
};
</script>
<style scoped>
</style>
