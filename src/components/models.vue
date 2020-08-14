<template>
<div class="con">
  <ModelCard v-for="(asset,index) in models" :key="index" :model="asset"/>
</div>
  
</template>

<script>
  import ModelCard from './ModelCard'
  export default {
    components : {
      ModelCard
    },
    data: () => ({
      loading: false,
      models:[
        {
          title:"asset 1"
        },
        {
          title:"asset 2"
        },
        {
          title:"asset 3"
        },
        {
          title:"asset 4"
        },
        {
          title:"asset 5"
        },
        {
          title:"asset 6"
        },
        {
          title:"asset 7"
        },
      ]
    }),

    methods: {
      Add () {
        this.loading = true
      },
    },
  }
</script>

<style scoped>
.con{
  display: grid;
  grid-template-columns: 24% 24% 24% 24% ;  
  grid-gap: 1em;
  
}


</style>
