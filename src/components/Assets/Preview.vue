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
export default {
  components: {
    Loading,
  },
  props: {
    previewType: String,
  },
  data: () => ({
    error: null,
    camera: null,
    scene: null,
    renderer: null,
    controls: null,
    loading: false,
    container: null,
  }),
  methods: {
    init() {
      this.container = document.getElementById("container");
      this.addCamera();
      this.addScene();
      this.addRenderer();
      this.addLights();
      this.loadControls();
      // this.loadFBX("the-lighthouse/source/Cotman_Sam.fbx")
      this.loadGLTF("carModel/scene.gltf");
      // this.loadOBJ("obj/wooden watch tower2.obj")
    },

    addCamera() {
      this.camera = new Three.PerspectiveCamera(
        70,
        this.container.clientWidth / this.container.clientHeight,
        0.001,
        500
      );
      
      this.camera.position.set(1, 1, 1);
    },

    addScene() {
      this.scene = new Three.Scene();
      this.scene.background = new Three.Color(0xb4b4b4);
    },

    addRenderer() {
      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );
    },

    addLights() {
      var ambientLight = new Three.AmbientLight(0x404040, 500);
      this.scene.add(ambientLight);

      var directionalLight = new Three.DirectionalLight(0xffffff, 70);
      directionalLight.position.set(0, 1, 0);
      directionalLight.castShadow = true;
      this.scene.add(directionalLight);
    },


    loadControls() {
      this.controls = new OrbitControls(this.camera, this.container);
      if (this.previewType == "mini") {
        this.controls.enabled = false;
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 15;
      }
    },

    async loadGLTF(file) {
      let { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader");
      let gltfLoader = new GLTFLoader();
      gltfLoader.load(
        file,
        (model) => {
          this.addObjecToScene(model.scene);
        },
        () => {
          this.loading = true;
        },
        (err) => {
          this.loading = false;
          console.log(err);
          this.error = true;
        }
      );
    },

    async loadFBX(file) {
      let { FBXLoader } = await import("three/examples/jsm/loaders/FBXLoader");
      let fbxLoader = new FBXLoader();
      fbxLoader.load(
        file,
        (model) => {
          this.addObjecToScene(model);
        },
        () => {
          this.loading = true;
        },
        (err) => {
          this.loading = false;
          console.log(err);
          this.error = true;
        }
      );
    },

    async loadOBJ(file) {
      let { OBJLoader } = await import("three/examples/jsm/loaders/OBJLoader");
      let { MTLLoader } = await import ("three/examples/jsm/loaders/MTLLoader")
      let materialLoader = new MTLLoader()
      materialLoader.load("obj/wooden watch tower2.mtl",(materials)=>{
        materials.preload()
        let objLoader = new OBJLoader();
        objLoader.setMaterials(materials)
        objLoader.load(
          file,
          (model) => {
            this.addObjecToScene(model);
          },
          () => {
            this.loading = true;
          },
          (err) => {
            this.loading = false;
            console.log(err);
            this.error = true;
          }
        );
      })
    },

    addObjecToScene(object) {
      this.scene.add(object);
      this.container.appendChild(this.renderer.domElement);
      this.loading = false;
      this.fitCameraToObject(object);
      this.animate();
    },

    animate() {
      this.renderer.render(this.scene, this.camera);
      if (this.previewType == "mini") this.controls.update();
      requestAnimationFrame(this.animate);
    },

    fitCameraToObject(object) {
      let offset = 1.5;

      const boundingBox = new Three.Box3();

      boundingBox.setFromObject(object);

      const center = boundingBox.getCenter(new Three.Vector3());
      const size = boundingBox.getSize(new Three.Vector3());
      const scaleFactor = new Three.Vector3(
        5.5 / (size.y + size.x + size.z),
        5.5 / (size.y + size.x + size.z),
        5.5 / (size.y + size.x + size.z)
      );
      object.scale.set(scaleFactor.x, scaleFactor.y, scaleFactor.z);
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
      this.camera.lookAt(center);
      if (this.previewType == "large") this.controls.update();
    },

  },

  mounted() {
    this.init();
  },
};
</script>


<style scoped>
#container {
  background-color: #b4b4b4;
}
.large {
  height: 70vh;
}
.mini {
  height: 100%;
}
.err {
  height: 100%;
  background-color: transparent;
  color: #3f3f3f;
  font-size: 80%;
}
</style>