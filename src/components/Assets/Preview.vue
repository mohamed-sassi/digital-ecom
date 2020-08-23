<template>
  <div id="container" :class="previewType">
    <Loading v-if="loading" />
    <div class="err d-flex justify-center align-center" v-if="error">
      <h1>Failed to load asset</h1>
    </div>
  </div>
</template>

<script>
import Loading from "./Loading";
import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export default {
  components: {
    Loading,
  },
  props:{
    previewType:String
  },
  data:()=>({
    error:null,
    camera: null,
    scene: null,
    renderer: null,
    controls: null,
    loading: false,
  }),
  methods: {
    init() {
      let container = document.getElementById("container");
      this.camera = new Three.PerspectiveCamera(
        70,
        container.clientWidth / container.clientHeight,
        0.001,
        500
      );
      this.camera.position.set(1,1,1)
      this.scene = new Three.Scene();
      this.scene.background = new Three.Color(0xdddddd);

      var ambientLight = new Three.AmbientLight(0x404040, 500);
      this.scene.add(ambientLight);

      var directionalLight = new Three.DirectionalLight(0xffffff, 70);
      directionalLight.position.set(0, 1, 0);
      directionalLight.castShadow = true;
      this.scene.add(directionalLight);

      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);

      this.controls = new OrbitControls(this.camera, container);
      if(this.previewType == "mini"){
        this.controls.enabled = false;
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 15;
      }
      var loader = new GLTFLoader();
      loader.load(
        "",
        (model) => {
          model.scene.children[0].rotateZ((45 / 180) * Math.PI);
          this.scene.add(model.scene);
          container.appendChild(this.renderer.domElement);
          this.loading = false;
          this.fitCameraToObject(model.scene,null)
          this.animate();
        },
        () => {
          this.loading = true;
        },(err)=>{
          this.loading = false
          console.log(err)
          this.error = true
        }
      );
    },
    animate() {
      this.renderer.render(this.scene, this.camera);
      if(this.previewType == "mini")
        this.controls.update()
      requestAnimationFrame(this.animate);
    },

    fitCameraToObject(object, offset) {
      offset = offset || 1.5;

      const boundingBox = new Three.Box3();

      boundingBox.setFromObject(object);

      const center = boundingBox.getCenter(new Three.Vector3());
      const size = boundingBox.getSize(new Three.Vector3());
      const scaleFactor = new Three.Vector3(1/size.y,1/size.y,1/size.y)
      object.scale.set(scaleFactor.x,scaleFactor.y,scaleFactor.z)
      const startDistance = center.distanceTo(this.camera.position);
      const endDistance =
        this.camera.aspect > 1
          ? (size.y / 2 + offset) / Math.abs(Math.tan(this.camera.fov / 2))
          : (size.y / 2 + offset) /
            Math.abs(Math.tan(this.camera.fov / 2)) /
            this.camera.aspect;
      this.camera.position.set(
        (this.camera.position.x * endDistance) / startDistance,
        (this.camera.position.y * endDistance) / startDistance,
        (this.camera.position.z * endDistance) / startDistance
      );
      this.camera.lookAt(center)
      if(this.previewType == "large")
        this.controls.update()
    },

  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
#container {
  background-color: #dddddd;
}
.large{
  height: 70vh;
}
.mini{
  height: 100%;
}
.err{
  height: 100%;
  background-color: transparent;
  color: #3f3f3f;
  font-size: 80%;
}
</style>