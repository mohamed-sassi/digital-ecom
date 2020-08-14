<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
    class="Head"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.src"
     
    >
      
    </v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          {
           src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
          {
           src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
           src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
           src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
           src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
        ],
      }
    },
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  .head{
    padding-top: 7rem;
    width: 100%;
    height: 100%;
    text-align: left;
    
  }

</style>
