<template>
<div>
  <v-carousel :touchless="selectedSlide && selectedSlide.type == 'preview'" @change="selectSlideNumber" :height="sliderHeight" v-model="selectedIndex" hide-delimiters class="mb-5">
      <v-carousel-item>
        <Preview :previewType="previewType" :file="asset.file_name"/>
      </v-carousel-item>
      <v-carousel-item v-for="(img, i) in asset.images" :key="i" :src="'http://localhost/marketplace-backend/storage/app/public/images/'+img.title" class="cr" contain ></v-carousel-item>
  </v-carousel>
    <div class="d-flex flex-wrap images">
        <div style="height:70px;width:70px; background-color:gray;display:flex;justify-content:center;align-items:center; cursor:pointer"
        @click="selectPreview()">
          Preview
        </div>
        <img v-for="(img, i) in asset.images" :key="i" :src="'http://localhost/marketplace-backend/storage/app/public/images/'+img.title" @click="selectSlideNumber(i)" height="70" :class="`ml-2 mb-2 ${img == selectedSlide ? 'selected' : ''}`">
    </div>
</div>
</template>
<script>
import Preview from '@/components/Assets/Preview'
export default {
  components:{
    Preview
  },
  props:{
    asset:Object
  },
  data() {
    return {
      selectedSlide:null,
      selectedIndex:0,
      previewType:'large'
    };
  },
  methods:{
    selectSlide(index){
      this.selectedIndex = index+1
    },
    selectSlideNumber(index){
      this.selectSlide(index)
    },
    selectPreview(){
      this.selectedIndex = 0
    }
  },
  computed:{
    sliderHeight:() => window.innerHeight * .7
  }
};
</script>


<style scoped >
/* .slide-title {
  font-size: 80px;
  margin-top: 27%;
  margin-left: 10%;
  text-shadow: 2px 2px 5px rgb(0, 0, 0);
} */
.cr {
  width:98%;
}

.images img{
  cursor: pointer;
}

.selected{
  border: 1px solid white;
}
</style>
