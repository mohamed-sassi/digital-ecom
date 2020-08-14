<template>
  <div class="home">
    <Head/>
    <models/>
  </div>
</template>

<script>
import Models from "@/components/models.vue";
import Head from "@/components/Head.vue";
export default {
  components:{
    Models,
    Head
  },
  name: 'Home',
}
</script>
<style scoped>

</style>
