<template>
    <div id="container"  >
    </div>
</template>

<script >

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


export default  {
    data(){
     return{
      camera: null,
      scene: null,
      renderer: null,
      controls: null,
      loading: false,
     };
    },
    methods : {
        init(){
            let el = document.getElementsById("container")
            this.camera = new THREE.PerspectiveCamera(
             75,
             el.clientWidth / el.clientHeight,
            0.1,
             1000
            ) 
            this.camera.rotation.y = 45/180*Math.PI;
            this.camera.position.x = 800;
            this.camera.position.y = 100;
            this.camera.position.z = 1000;

           this.renderer = new THREE.WebGLRenderer({antialias:true});
           this.renderer.setSize( window.innerWidth, window.innerHeight );
           document.body.appendChild( this.renderer.domElement );  

            this.scene = new THREE.Scene();
            this.scene.background = new THREE.Color(0xdddddd);

            var loader = new GLTFLoader();
            loader.load( "carModel/scene.gltf", (gltf) => {
                this.scene.add(gltf.scene);
                 this.animate();
            });

            
        },
       
    }
}
</script>

<style  scoped>
    .preview {
  width: 100%;
  height: 100%;
}
</style>