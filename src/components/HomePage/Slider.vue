<template>
  <v-carousel cycle hide-delimiter-background show-arrows-on-hover class="mb-5">
    <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src" contain>
      <!-- <div class="slide-title">{{slide.title}}</div> -->
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      slides: [
        {
          title: "Slide 1",
          src: "https://www.cryengine.com/files/carousel/768/7567cc1f31fb8dba52fb46d9950070bf0f6129eb217326a66612fc11e4c6d474.webp",
        },
        {
          title: "Slide 2",
          src: "https://www.cryengine.com/files/carousel/768/c0dc875ae417c5a35dd2146f8b80fc34127da9ae0ee3daebfae74b92b973c319.webp",
        },
        {
          title: "Slide 3",
          src: "https://www.cryengine.com/files/carousel/768/aa3680fc2092710189a222d88870bb8288f9ea4c4aa66a9c9b3aa6de31ccc928.webp",
        },
        {
          title: "Slide 4",
          src: "https://www.cryengine.com/files/carousel/768/ce4245aa3b69cb155daac5eb33a957ec93428103a4a7b2891221ea8a1ce48a52.webp",
        },
        {
          title: "Slide 5",
          src: "https://www.cryengine.com/files/carousel/768/74e1312f3962709e04923155d5e6470204479e6eaabae0ef5e37fd4a70a9d03e.webp",
        },
      ],
    };
  },
};
</script>


<style scoped >
.slide-title {
  font-size: 80px;
  margin-top: 27%;
  margin-left: 10%;
  text-shadow: 2px 2px 5px rgb(0, 0, 0);
}
</style>
