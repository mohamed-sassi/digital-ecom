<template>
    <div id="container"></div>
</template>

<script>
import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      controls:null
    }
  },
  methods: {
    init: function() {
        let container = document.getElementById('container');

        this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight,.01, 500);
        this.camera.position.x = 10
        this.camera.position.y = 0
        this.scene = new Three.Scene();
        var hlight = new Three.AmbientLight(0x404040,1000);
        this.scene.add(hlight)

        this.renderer = new Three.WebGLRenderer({antialias: true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera,container)
        var loader = new GLTFLoader()

        loader.load('carModel/scene.gltf', model => {
            // model.scene.children[0].scale.set(0.5,0.5,0.5)
            model.scene.children[0].rotateZ(90/180 * Math.PI)
            this.scene.add(model.scene)
            this.animate()
            console.log("loaded")
        })
    },
    animate: function() {
        this.renderer.render(this.scene, this.camera);
        // console.log(this.camera.rotation.y)
        requestAnimationFrame(this.animate);
    }
  },
  mounted() {
      this.init();
  }
}
</script>

<style scoped>
#container{
    height: 600px;
}
</style>