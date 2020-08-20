<template>
  <div id="container">
    <Loading v-if="loading"/>
  </div>
</template>

<script>
import Loading from './Loading'
import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export default {
  components:{
    Loading
  },
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      controls: null,
      loading:false
    };
  },
  methods: {
    init() {
      let container = document.getElementById("container")
      this.camera = new Three.PerspectiveCamera(70,container.clientWidth / container.clientHeight,0.01,500);
      this.camera.position.x = 5

      this.scene = new Three.Scene();
      this.scene.background = new Three.Color(0xdddddd)

      var ambientLight = new Three.AmbientLight(0x404040, 500);
      this.scene.add(ambientLight);

      var directionalLight = new Three.DirectionalLight(0xffffff,70)
      directionalLight.position.set(0,1,0)
      directionalLight.castShadow = true
      this.scene.add(directionalLight)

      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);

      this.controls = new OrbitControls(this.camera, container);
      var loader = new GLTFLoader();

      loader.load("carModel/scene.gltf", (model) => {
        model.scene.children[0].rotateZ((45 / 180) * Math.PI);
        this.scene.add(model.scene);
        this.animate();
        this.loading = false
      },()=>{
        this.loading = true
      });
    },
    animate() {
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.animate);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
#container {
  height: 600px;
  background-color: #dddddd;
}
</style>