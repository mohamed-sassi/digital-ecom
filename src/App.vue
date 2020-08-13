<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components:{
    Navbar
  }
}
</script>

<style>
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
</style>
