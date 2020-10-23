<template>
  <div :id="`${previewType}-container`" :class="previewType">
    <Loading v-if="loading" />
    <div class="err d-flex justify-center align-center" v-if="error">
      <h1>Failed to load asset</h1>
    </div>
  </div>
</template>

<script>
import Loading from "./Loading";
import * as Three from "three/build/three.module";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import * as JSZip from 'jszip'
export default {
  components: {
    Loading,
  },
  props: {
    previewType: String,
    file:String
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
      this.container = document.getElementById(`${this.previewType}-container`);
      this.addCamera();
      this.addScene();
      this.addRenderer();
      this.addLights();
      this.loadControls();
      // this.loadFBX("the-lighthouse/source/Cotman_Sam.fbx")
      this.loadGLTF(
        "http://localhost/marketplace-backend/storage/app/public/products/"+this.file+'/scene.gltf'
      );
      // this.loadOBJ(
      //   "https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.obj"
      // );
    },

    addCamera() {
      this.camera = new Three.PerspectiveCamera(
        70,
        this.container.clientWidth / this.container.clientHeight,
        0.001,
        1000
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
      const skyColor = 0xb1e1ff; // light blue
      const groundColor = 0xb97a20; // brownish orange
      const intensity = 1;
      const light = new Three.HemisphereLight(skyColor, groundColor, intensity);
      this.scene.add(light);
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
      // const file = await fetch(fileLink,{
      //   credentials: 'same-origin'
      // }).then(res => res.blob())      
      // var zipLoader = new JSZip();
      // let zip = await zipLoader.loadAsync(file)
      // let fileToLoad = await zip.files["scene.gltf"].async("string");
      // console.log(fileToLoad);
      let { GLTFLoader } = await import(
        "three/examples/jsm/loaders/GLTFLoader"
      );
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
      let { OBJLoader2 } = await import(
        "three/examples/jsm/loaders/OBJLoader2"
      );
      let { MTLLoader } = await import("three/examples/jsm/loaders/MTLLoader");
      let { MtlObjBridge } = await import(
        "three/examples/jsm/loaders/obj2/bridge/MtlObjBridge"
      );
      let materialLoader = new MTLLoader();
      materialLoader.load(
        "https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.mtl",
        (mats) => {
          mats.preload();
          let objLoader = new OBJLoader2();
          let materials = MtlObjBridge.addMaterialsFromMtlLoader(mats);
          objLoader.addMaterials(materials);
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
            },
            (mesh) => {
              console.log(mesh);
            }
          );
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
      const box = new Three.Box3().setFromObject(object);

      const boxSize = box.getSize(new Three.Vector3()).length();
      const boxCenter = box.getCenter(new Three.Vector3());

      this.controls.maxDistance = boxSize * 10;
      this.controls.target.copy(boxCenter);
      this.controls.update();
      const halfSizeToFitOnScreen = boxSize * 1.2 * 0.5;
      const halfFovY = Three.MathUtils.degToRad(this.camera.fov * 0.5);
      const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
      const direction = new Three.Vector3()
        .subVectors(this.camera.position, boxCenter)
        .multiply(new Three.Vector3(1, 0, 1))
        .normalize();

      this.camera.position.copy(
        direction.multiplyScalar(distance).add(boxCenter)
      );

      this.camera.near = boxSize / 100;
      this.camera.far = boxSize * 100;

      this.camera.updateProjectionMatrix();

      this.camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
    },
  },

  mounted() {
    this.init();
  },
};
</script>


<style scoped>

.large {
  height: 70vh;
  background-color: #b4b4b4;
}
.mini {
  height: 100%;
  background-color: #b4b4b4;
}
.err {
  height: 100%;
  background-color: transparent;
  color: #3f3f3f;
  font-size: 80%;
}
</style>