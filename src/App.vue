<template>
  <div id="app">
    <Navbar />
    <div class="ord">
      <div style=" float:left">
      <Sidebar />
      </div>
      <div style="float:right">
      <models/>
      </div>
    </div>

    <router-view />
  </div>
</template>


<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import models from "@/components/models.vue";

export default {
  components: {
    Navbar,
    Sidebar,
    models
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  
}
.ord{
  display: grid;
  grid-template-columns: 20% 79%;
  grid-column-gap: 1em;
   
}
</style>
