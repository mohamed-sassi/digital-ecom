<template>
  <v-carousel
    cycle    
    hide-delimiter-background
    show-arrows-on-hover
    class="mb-5"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.src"     
    >
      <div class="slide-title">{{slide.title}}</div>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        slides: [
          {
            title:"Slide 1",
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
          {
            title:"Slide 2",
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            title:"Slide 3",
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            title:"Slide 4",
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            title:"Slide 5",
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
        ],
      }
    },
  }
</script>


<style scoped >
  .slide-title{
    font-size: 80px;
    margin-top:27%;
    margin-left:10%;
    text-shadow: 2px 2px 5px rgb(0, 0, 0);
  }

</style>
