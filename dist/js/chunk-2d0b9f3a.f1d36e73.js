(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9f3a"],{"34ad":function(e,t,r){"use strict";r.r(t),r.d(t,"GLTFLoader",(function(){return n}));var s=r("5a89"),n=function(){function e(e){s["I"].call(this,e),this.dracoLoader=null,this.ddsLoader=null,this.ktx2Loader=null,this.pluginCallbacks=[],this.register((function(e){return new o(e)})),this.register((function(e){return new u(e)})),this.register((function(e){return new l(e)}))}function t(){var e={};return{get:function(t){return e[t]},add:function(t,r){e[t]=r},remove:function(t){delete e[t]},removeAll:function(){e={}}}}e.prototype=Object.assign(Object.create(s["I"].prototype),{constructor:e,load:function(e,t,r,n){var a,i=this;a=""!==this.resourcePath?this.resourcePath:""!==this.path?this.path:s["J"].extractUrlBase(e),i.manager.itemStart(e);var o=function(t){n?n(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},l=new s["q"](i.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),"use-credentials"===i.crossOrigin&&l.setWithCredentials(!0),l.load(e,(function(r){try{i.parse(r,a,(function(r){t(r),i.manager.itemEnd(e)}),o)}catch(s){o(s)}}),r,o)},setDRACOLoader:function(e){return this.dracoLoader=e,this},setDDSLoader:function(e){return this.ddsLoader=e,this},setKTX2Loader:function(e){return this.ktx2Loader=e,this},register:function(e){return-1===this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.push(e),this},unregister:function(e){return-1!==this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this},parse:function(e,t,o,l){var u,p={},h={};if("string"===typeof e)u=e;else{var g=s["J"].decodeText(new Uint8Array(e,0,4));if(g===c){try{p[r.KHR_BINARY_GLTF]=new d(e)}catch(E){return void(l&&l(E))}u=p[r.KHR_BINARY_GLTF].content}else u=s["J"].decodeText(new Uint8Array(e))}var y=JSON.parse(u);if(void 0===y.asset||y.asset.version[0]<2)l&&l(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));else{var S=new D(y,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,manager:this.manager,ktx2Loader:this.ktx2Loader});S.fileLoader.setRequestHeader(this.requestHeader);for(var R=0;R<this.pluginCallbacks.length;R++){var x=this.pluginCallbacks[R](S);h[x.name]=x,p[x.name]=!0}if(y.extensionsUsed)for(R=0;R<y.extensionsUsed.length;++R){var _=y.extensionsUsed[R],M=y.extensionsRequired||[];switch(_){case r.KHR_LIGHTS_PUNCTUAL:p[_]=new a(y);break;case r.KHR_MATERIALS_UNLIT:p[_]=new i;break;case r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:p[_]=new v;break;case r.KHR_DRACO_MESH_COMPRESSION:p[_]=new f(y,this.dracoLoader);break;case r.MSFT_TEXTURE_DDS:p[_]=new n(this.ddsLoader);break;case r.KHR_TEXTURE_TRANSFORM:p[_]=new m;break;case r.KHR_MESH_QUANTIZATION:p[_]=new T;break;default:M.indexOf(_)>=0&&void 0===h[_]&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}S.setExtensions(p),S.setPlugins(h),S.parse(o,l)}}});var r={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",MSFT_TEXTURE_DDS:"MSFT_texture_dds"};function n(e){if(!e)throw new Error("THREE.GLTFLoader: Attempting to load .dds texture without importing DDSLoader");this.name=r.MSFT_TEXTURE_DDS,this.ddsLoader=e}function a(e){this.name=r.KHR_LIGHTS_PUNCTUAL;var t=e.extensions&&e.extensions[r.KHR_LIGHTS_PUNCTUAL]||{};this.lightDefs=t.lights||[]}function i(){this.name=r.KHR_MATERIALS_UNLIT}function o(e){this.parser=e,this.name=r.KHR_MATERIALS_CLEARCOAT}function l(e){this.parser=e,this.name=r.KHR_MATERIALS_TRANSMISSION}function u(e){this.parser=e,this.name=r.KHR_TEXTURE_BASISU}a.prototype.loadLight=function(e){var t,r=this.lightDefs[e],n=new s["i"](16777215);void 0!==r.color&&n.fromArray(r.color);var a=void 0!==r.range?r.range:0;switch(r.type){case"directional":t=new s["l"](n),t.target.position.set(0,0,-1),t.add(t.target);break;case"point":t=new s["eb"](n),t.distance=a;break;case"spot":t=new s["sb"](n),t.distance=a,r.spot=r.spot||{},r.spot.innerConeAngle=void 0!==r.spot.innerConeAngle?r.spot.innerConeAngle:0,r.spot.outerConeAngle=void 0!==r.spot.outerConeAngle?r.spot.outerConeAngle:Math.PI/4,t.angle=r.spot.outerConeAngle,t.penumbra=1-r.spot.innerConeAngle/r.spot.outerConeAngle,t.target.position.set(0,0,-1),t.add(t.target);break;default:throw new Error('THREE.GLTFLoader: Unexpected light type, "'+r.type+'".')}return t.position.set(0,0,0),t.decay=2,void 0!==r.intensity&&(t.intensity=r.intensity),t.name=r.name||"light_"+e,Promise.resolve(t)},i.prototype.getMaterialType=function(){return s["R"]},i.prototype.extendParams=function(e,t,r){var n=[];e.color=new s["i"](1,1,1),e.opacity=1;var a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){var i=a.baseColorFactor;e.color.fromArray(i),e.opacity=i[3]}void 0!==a.baseColorTexture&&n.push(r.assignTexture(e,"map",a.baseColorTexture))}return Promise.all(n)},o.prototype.getMaterialType=function(){return s["U"]},o.prototype.extendMaterialParams=function(e,t){var r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();var a=[],i=n.extensions[this.name];if(void 0!==i.clearcoatFactor&&(t.clearcoat=i.clearcoatFactor),void 0!==i.clearcoatTexture&&a.push(r.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),void 0!==i.clearcoatRoughnessFactor&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),void 0!==i.clearcoatRoughnessTexture&&a.push(r.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),void 0!==i.clearcoatNormalTexture&&(a.push(r.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),void 0!==i.clearcoatNormalTexture.scale)){var o=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new s["Ab"](o,o)}return Promise.all(a)},l.prototype.getMaterialType=function(){return s["U"]},l.prototype.extendMaterialParams=function(e,t){var r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();var n=[],a=s.extensions[this.name];return void 0!==a.transmissionFactor&&(t.transmission=a.transmissionFactor),void 0!==a.transmissionTexture&&n.push(r.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(n)},u.prototype.loadTexture=function(e){var t=this.parser,r=t.json,s=r.textures[e];if(!s.extensions||!s.extensions[this.name])return null;var n=s.extensions[this.name],a=r.images[n.source],i=t.options.ktx2Loader;if(!i)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return t.loadTextureImage(e,a,i)};var c="glTF",p=12,h={JSON:1313821514,BIN:5130562};function d(e){this.name=r.KHR_BINARY_GLTF,this.content=null,this.body=null;var t=new DataView(e,0,p);if(this.header={magic:s["J"].decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==c)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");var n=new DataView(e,p),a=0;while(a<n.byteLength){var i=n.getUint32(a,!0);a+=4;var o=n.getUint32(a,!0);if(a+=4,o===h.JSON){var l=new Uint8Array(e,p+a,i);this.content=s["J"].decodeText(l)}else if(o===h.BIN){var u=p+a;this.body=e.slice(u,u+i)}a+=i}if(null===this.content)throw new Error("THREE.GLTFLoader: JSON content not found.")}function f(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=r.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}function m(){this.name=r.KHR_TEXTURE_TRANSFORM}function g(e){s["V"].call(this),this.isGLTFSpecularGlossinessMaterial=!0;var t=["#ifdef USE_SPECULARMAP","\tuniform sampler2D specularMap;","#endif"].join("\n"),r=["#ifdef USE_GLOSSINESSMAP","\tuniform sampler2D glossinessMap;","#endif"].join("\n"),n=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","\tvec4 texelSpecular = texture2D( specularMap, vUv );","\ttexelSpecular = sRGBToLinear( texelSpecular );","\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","\tspecularFactor *= texelSpecular.rgb;","#endif"].join("\n"),a=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );","\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","\tglossinessFactor *= texelGlossiness.a;","#endif"].join("\n"),i=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb;","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.","material.specularRoughness += geometryRoughness;","material.specularRoughness = min( material.specularRoughness, 1.0 );","material.specularColor = specularFactor.rgb;"].join("\n"),o={specular:{value:(new s["i"]).setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(e){for(var s in o)e.uniforms[s]=o[s];e.fragmentShader=e.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;"),e.fragmentShader=e.fragmentShader.replace("uniform float metalness;","uniform float glossiness;"),e.fragmentShader=e.fragmentShader.replace("#include <roughnessmap_pars_fragment>",t),e.fragmentShader=e.fragmentShader.replace("#include <metalnessmap_pars_fragment>",r),e.fragmentShader=e.fragmentShader.replace("#include <roughnessmap_fragment>",n),e.fragmentShader=e.fragmentShader.replace("#include <metalnessmap_fragment>",a),e.fragmentShader=e.fragmentShader.replace("#include <lights_physical_fragment>",i)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(e){o.specular.value=e}},specularMap:{get:function(){return o.specularMap.value},set:function(e){o.specularMap.value=e}},glossiness:{get:function(){return o.glossiness.value},set:function(e){o.glossiness.value=e}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(e){o.glossinessMap.value=e,e?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_ROUGHNESSMAP=""):(delete this.defines.USE_ROUGHNESSMAP,delete this.defines.USE_GLOSSINESSMAP)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}function v(){return{name:r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,specularGlossinessParams:["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"],getMaterialType:function(){return g},extendParams:function(e,t,r){var n=t.extensions[this.name];e.color=new s["i"](1,1,1),e.opacity=1;var a=[];if(Array.isArray(n.diffuseFactor)){var i=n.diffuseFactor;e.color.fromArray(i),e.opacity=i[3]}if(void 0!==n.diffuseTexture&&a.push(r.assignTexture(e,"map",n.diffuseTexture)),e.emissive=new s["i"](0,0,0),e.glossiness=void 0!==n.glossinessFactor?n.glossinessFactor:1,e.specular=new s["i"](1,1,1),Array.isArray(n.specularFactor)&&e.specular.fromArray(n.specularFactor),void 0!==n.specularGlossinessTexture){var o=n.specularGlossinessTexture;a.push(r.assignTexture(e,"glossinessMap",o)),a.push(r.assignTexture(e,"specularMap",o))}return Promise.all(a)},createMaterial:function(e){var t=new g(e);return t.fog=!0,t.color=e.color,t.map=void 0===e.map?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=void 0===e.aoMap?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=void 0===e.emissiveMap?null:e.emissiveMap,t.bumpMap=void 0===e.bumpMap?null:e.bumpMap,t.bumpScale=1,t.normalMap=void 0===e.normalMap?null:e.normalMap,t.normalMapType=s["ub"],e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=void 0===e.specularMap?null:e.specularMap,t.specular=e.specular,t.glossinessMap=void 0===e.glossinessMap?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=void 0===e.envMap?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}}function T(){this.name=r.KHR_MESH_QUANTIZATION}function y(e,t,r,n){s["y"].call(this,e,t,r,n)}f.prototype.decodePrimitive=function(e,t){var r=this.json,s=this.dracoLoader,n=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,i={},o={},l={};for(var u in a){var c=E[u]||u.toLowerCase();i[c]=a[u]}for(u in e.attributes){c=E[u]||u.toLowerCase();if(void 0!==a[u]){var p=r.accessors[e.attributes[u]],h=R[p.componentType];l[c]=h,o[c]=!0===p.normalized}}return t.getDependency("bufferView",n).then((function(e){return new Promise((function(t){s.decodeDracoFile(e,(function(e){for(var r in e.attributes){var s=e.attributes[r],n=o[r];void 0!==n&&(s.normalized=n)}t(e)}),i,l)}))}))},m.prototype.extendTexture=function(e,t){return e=e.clone(),void 0!==t.offset&&e.offset.fromArray(t.offset),void 0!==t.rotation&&(e.rotation=t.rotation),void 0!==t.scale&&e.repeat.fromArray(t.scale),void 0!==t.texCoord&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),e.needsUpdate=!0,e},g.prototype=Object.create(s["V"].prototype),g.prototype.constructor=g,g.prototype.copy=function(e){return s["V"].prototype.copy.call(this,e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this},y.prototype=Object.create(s["y"].prototype),y.prototype.constructor=y,y.prototype.copySampleValue_=function(e){for(var t=this.resultBuffer,r=this.sampleValues,s=this.valueSize,n=e*s*3+s,a=0;a!==s;a++)t[a]=r[n+a];return t},y.prototype.beforeStart_=y.prototype.copySampleValue_,y.prototype.afterEnd_=y.prototype.copySampleValue_,y.prototype.interpolate_=function(e,t,r,s){for(var n=this.resultBuffer,a=this.sampleValues,i=this.valueSize,o=2*i,l=3*i,u=s-t,c=(r-t)/u,p=c*c,h=p*c,d=e*l,f=d-l,m=-2*h+3*p,g=h-p,v=1-m,T=g-p+c,y=0;y!==i;y++){var S=a[f+y+i],R=a[f+y+o]*u,x=a[d+y+i],_=a[d+y]*u;n[y]=v*S+T*R+m*x+g*_}return n};var S={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},R={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},x={9728:s["X"],9729:s["F"],9984:s["Z"],9985:s["H"],9986:s["Y"],9987:s["G"]},_={33071:s["h"],33648:s["W"],10497:s["mb"]},M={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},E={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},L={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},b={CUBICSPLINE:void 0,LINEAR:s["A"],STEP:s["z"]},A={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"},w={"image/png":s["kb"],"image/jpeg":s["lb"]};function I(e,t){return"string"!==typeof e||""===e?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}function N(e){return void 0===e["DefaultMaterial"]&&(e["DefaultMaterial"]=new s["V"]({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:s["s"]})),e["DefaultMaterial"]}function P(e,t,r){for(var s in r.extensions)void 0===e[s]&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[s]=r.extensions[s])}function O(e,t){void 0!==t.extras&&("object"===typeof t.extras?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function C(e,t,r){for(var s=!1,n=!1,a=0,i=t.length;a<i;a++){var o=t[a];if(void 0!==o.POSITION&&(s=!0),void 0!==o.NORMAL&&(n=!0),s&&n)break}if(!s&&!n)return Promise.resolve(e);var l=[],u=[];for(a=0,i=t.length;a<i;a++){o=t[a];if(s){var c=void 0!==o.POSITION?r.getDependency("accessor",o.POSITION):e.attributes.position;l.push(c)}if(n){c=void 0!==o.NORMAL?r.getDependency("accessor",o.NORMAL):e.attributes.normal;u.push(c)}}return Promise.all([Promise.all(l),Promise.all(u)]).then((function(t){var r=t[0],a=t[1];return s&&(e.morphAttributes.position=r),n&&(e.morphAttributes.normal=a),e.morphTargetsRelative=!0,e}))}function H(e,t){if(e.updateMorphTargets(),void 0!==t.weights)for(var r=0,s=t.weights.length;r<s;r++)e.morphTargetInfluences[r]=t.weights[r];if(t.extras&&Array.isArray(t.extras.targetNames)){var n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(r=0,s=n.length;r<s;r++)e.morphTargetDictionary[n[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function U(e){var t,s=e.extensions&&e.extensions[r.KHR_DRACO_MESH_COMPRESSION];return t=s?"draco:"+s.bufferView+":"+s.indices+":"+F(s.attributes):e.indices+":"+F(e.attributes)+":"+e.mode,t}function F(e){for(var t="",r=Object.keys(e).sort(),s=0,n=r.length;s<n;s++)t+=r[s]+":"+e[r[s]]+";";return t}function D(e,r){this.json=e||{},this.extensions={},this.plugins={},this.options=r||{},this.cache=new t,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},"undefined"!==typeof createImageBitmap&&!1===/Firefox/.test(navigator.userAgent)?this.textureLoader=new s["v"](this.options.manager):this.textureLoader=new s["wb"](this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.fileLoader=new s["q"](this.options.manager),this.fileLoader.setResponseType("arraybuffer"),"use-credentials"===this.options.crossOrigin&&this.fileLoader.setWithCredentials(!0)}function G(e,t,r){var n=t.attributes,a=new s["d"];if(void 0!==n.POSITION){var i=r.json.accessors[n.POSITION],o=i.min,l=i.max;if(void 0!==o&&void 0!==l){a.set(new s["Bb"](o[0],o[1],o[2]),new s["Bb"](l[0],l[1],l[2]));var u=t.targets;if(void 0!==u){for(var c=new s["Bb"],p=new s["Bb"],h=0,d=u.length;h<d;h++){var f=u[h];if(void 0!==f.POSITION){i=r.json.accessors[f.POSITION],o=i.min,l=i.max;void 0!==o&&void 0!==l?(p.setX(Math.max(Math.abs(o[0]),Math.abs(l[0]))),p.setY(Math.max(Math.abs(o[1]),Math.abs(l[1]))),p.setZ(Math.max(Math.abs(o[2]),Math.abs(l[2]))),c.max(p)):console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(c)}e.boundingBox=a;var m=new s["qb"];a.getCenter(m.center),m.radius=a.min.distanceTo(a.max)/2,e.boundingSphere=m}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}function k(e,t,r){var s=t.attributes,n=[];function a(t,s){return r.getDependency("accessor",t).then((function(t){e.setAttribute(s,t)}))}for(var i in s){var o=E[i]||i.toLowerCase();o in e.attributes||n.push(a(s[i],o))}if(void 0!==t.indices&&!e.index){var l=r.getDependency("accessor",t.indices).then((function(t){e.setIndex(t)}));n.push(l)}return O(e,t),G(e,t,r),Promise.all(n).then((function(){return void 0!==t.targets?C(e,t.targets,r):e}))}function K(e,t){var r=e.getIndex();if(null===r){var n=[],a=e.getAttribute("position");if(void 0===a)return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e;for(var i=0;i<a.count;i++)n.push(i);e.setIndex(n),r=e.getIndex()}var o=r.count-2,l=[];if(t===s["xb"])for(i=1;i<=o;i++)l.push(r.getX(0)),l.push(r.getX(i)),l.push(r.getX(i+1));else for(i=0;i<o;i++)i%2===0?(l.push(r.getX(i)),l.push(r.getX(i+1)),l.push(r.getX(i+2))):(l.push(r.getX(i+2)),l.push(r.getX(i+1)),l.push(r.getX(i)));l.length/3!==o&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");var u=e.clone();return u.setIndex(l),u}return D.prototype.setExtensions=function(e){this.extensions=e},D.prototype.setPlugins=function(e){this.plugins=e},D.prototype.parse=function(e,t){var r=this,s=this.json,n=this.extensions;this.cache.removeAll(),this._markDefs(),Promise.all([this.getDependencies("scene"),this.getDependencies("animation"),this.getDependencies("camera")]).then((function(t){var a={scene:t[0][s.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:s.asset,parser:r,userData:{}};P(n,a,s),O(a,s),e(a)})).catch(t)},D.prototype._markDefs=function(){for(var e=this.json.nodes||[],t=this.json.skins||[],s=this.json.meshes||[],n=0,a=t.length;n<a;n++)for(var i=t[n].joints,o=0,l=i.length;o<l;o++)e[i[o]].isBone=!0;for(var u=0,c=e.length;u<c;u++){var p=e[u];void 0!==p.mesh&&(this._addNodeRef(this.meshCache,p.mesh),void 0!==p.skin&&(s[p.mesh].isSkinnedMesh=!0)),void 0!==p.camera&&this._addNodeRef(this.cameraCache,p.camera),p.extensions&&p.extensions[r.KHR_LIGHTS_PUNCTUAL]&&void 0!==p.extensions[r.KHR_LIGHTS_PUNCTUAL].light&&this._addNodeRef(this.lightCache,p.extensions[r.KHR_LIGHTS_PUNCTUAL].light)}},D.prototype._addNodeRef=function(e,t){void 0!==t&&(void 0===e.refs[t]&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)},D.prototype._getNodeRef=function(e,t,r){if(e.refs[t]<=1)return r;var s=r.clone();return s.name+="_instance_"+e.uses[t]++,s},D.prototype._invokeOne=function(e){var t=Object.values(this.plugins);t.push(this);for(var r=0;r<t.length;r++){var s=e(t[r]);if(s)return s}},D.prototype._invokeAll=function(e){var t=Object.values(this.plugins);t.unshift(this);for(var r=[],s=0;s<t.length;s++)r.push(e(t[s]));return Promise.all(r)},D.prototype.getDependency=function(e,t){var s=e+":"+t,n=this.cache.get(s);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this.loadNode(t);break;case"mesh":n=this._invokeOne((function(e){return e.loadMesh&&e.loadMesh(t)}));break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne((function(e){return e.loadBufferView&&e.loadBufferView(t)}));break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne((function(e){return e.loadMaterial&&e.loadMaterial(t)}));break;case"texture":n=this._invokeOne((function(e){return e.loadTexture&&e.loadTexture(t)}));break;case"skin":n=this.loadSkin(t);break;case"animation":n=this.loadAnimation(t);break;case"camera":n=this.loadCamera(t);break;case"light":n=this.extensions[r.KHR_LIGHTS_PUNCTUAL].loadLight(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(s,n)}return n},D.prototype.getDependencies=function(e){var t=this.cache.get(e);if(!t){var r=this,s=this.json[e+("mesh"===e?"es":"s")]||[];t=Promise.all(s.map((function(t,s){return r.getDependency(e,s)}))),this.cache.add(e,t)}return t},D.prototype.loadBuffer=function(e){var t=this.json.buffers[e],s=this.fileLoader;if(t.type&&"arraybuffer"!==t.type)throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(void 0===t.uri&&0===e)return Promise.resolve(this.extensions[r.KHR_BINARY_GLTF].body);var n=this.options;return new Promise((function(e,r){s.load(I(t.uri,n.path),e,void 0,(function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))}))}))},D.prototype.loadBufferView=function(e){var t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then((function(e){var r=t.byteLength||0,s=t.byteOffset||0;return e.slice(s,s+r)}))},D.prototype.loadAccessor=function(e){var t=this,r=this.json,n=this.json.accessors[e];if(void 0===n.bufferView&&void 0===n.sparse)return Promise.resolve(null);var a=[];return void 0!==n.bufferView?a.push(this.getDependency("bufferView",n.bufferView)):a.push(null),void 0!==n.sparse&&(a.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(a).then((function(e){var a,i,o=e[0],l=M[n.type],u=R[n.componentType],c=u.BYTES_PER_ELEMENT,p=c*l,h=n.byteOffset||0,d=void 0!==n.bufferView?r.bufferViews[n.bufferView].byteStride:void 0,f=!0===n.normalized;if(d&&d!==p){var m=Math.floor(h/d),g="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+m+":"+n.count,v=t.cache.get(g);v||(a=new u(o,m*d,n.count*d/c),v=new s["w"](a,d/c),t.cache.add(g,v)),i=new s["x"](v,l,h%d/c,f)}else a=null===o?new u(n.count*l):new u(o,h,n.count*l),i=new s["e"](a,l,f);if(void 0!==n.sparse){var T=M.SCALAR,y=R[n.sparse.indices.componentType],S=n.sparse.indices.byteOffset||0,x=n.sparse.values.byteOffset||0,_=new y(e[1],S,n.sparse.count*T),E=new u(e[2],x,n.sparse.count*l);null!==o&&(i=new s["e"](i.array.slice(),i.itemSize,i.normalized));for(var L=0,b=_.length;L<b;L++){var A=_[L];if(i.setX(A,E[L*l]),l>=2&&i.setY(A,E[L*l+1]),l>=3&&i.setZ(A,E[L*l+2]),l>=4&&i.setW(A,E[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return i}))},D.prototype.loadTexture=function(e){var t,s,n=this,a=this.json,i=this.options,o=a.textures[e],l=o.extensions||{};return t=l[r.MSFT_TEXTURE_DDS]?a.images[l[r.MSFT_TEXTURE_DDS].source]:a.images[o.source],t.uri&&(s=i.manager.getHandler(t.uri)),s||(s=l[r.MSFT_TEXTURE_DDS]?n.extensions[r.MSFT_TEXTURE_DDS].ddsLoader:this.textureLoader),this.loadTextureImage(e,t,s)},D.prototype.loadTextureImage=function(e,t,r){var n=this,a=this.json,i=this.options,o=a.textures[e],l=self.URL||self.webkitURL,u=t.uri,c=!1;return void 0!==t.bufferView&&(u=n.getDependency("bufferView",t.bufferView).then((function(e){c=!0;var r=new Blob([e],{type:t.mimeType});return u=l.createObjectURL(r),u}))),Promise.resolve(u).then((function(e){return new Promise((function(t,n){var a=t;!0===r.isImageBitmapLoader&&(a=function(e){t(new s["g"](e))}),r.load(I(e,i.path),a,void 0,n)}))})).then((function(r){!0===c&&l.revokeObjectURL(u),r.flipY=!1,o.name&&(r.name=o.name),t.mimeType in w&&(r.format=w[t.mimeType]);var i=a.samplers||{},p=i[o.sampler]||{};return r.magFilter=x[p.magFilter]||s["F"],r.minFilter=x[p.minFilter]||s["G"],r.wrapS=_[p.wrapS]||s["mb"],r.wrapT=_[p.wrapT]||s["mb"],n.associations.set(r,{type:"textures",index:e}),r}))},D.prototype.assignTexture=function(e,t,n){var a=this;return this.getDependency("texture",n.index).then((function(i){if(!i.isCompressedTexture)switch(t){case"aoMap":case"emissiveMap":case"metalnessMap":case"normalMap":case"roughnessMap":i.format=s["lb"];break}if(void 0===n.texCoord||0==n.texCoord||"aoMap"===t&&1==n.texCoord||console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),a.extensions[r.KHR_TEXTURE_TRANSFORM]){var o=void 0!==n.extensions?n.extensions[r.KHR_TEXTURE_TRANSFORM]:void 0;if(o){var l=a.associations.get(i);i=a.extensions[r.KHR_TEXTURE_TRANSFORM].extendTexture(i,o),a.associations.set(i,l)}}e[t]=i}))},D.prototype.assignFinalMaterial=function(e){var t=e.geometry,r=e.material,n=void 0!==t.attributes.tangent,a=void 0!==t.attributes.color,i=void 0===t.attributes.normal,o=!0===e.isSkinnedMesh,l=Object.keys(t.morphAttributes).length>0,u=l&&void 0!==t.morphAttributes.normal;if(e.isPoints){var c="PointsMaterial:"+r.uuid,p=this.cache.get(c);p||(p=new s["gb"],s["L"].prototype.copy.call(p,r),p.color.copy(r.color),p.map=r.map,p.sizeAttenuation=!1,this.cache.add(c,p)),r=p}else if(e.isLine){c="LineBasicMaterial:"+r.uuid;var h=this.cache.get(c);h||(h=new s["C"],s["L"].prototype.copy.call(h,r),h.color.copy(r.color),this.cache.add(c,h)),r=h}if(n||a||i||o||l){c="ClonedMaterial:"+r.uuid+":";r.isGLTFSpecularGlossinessMaterial&&(c+="specular-glossiness:"),o&&(c+="skinning:"),n&&(c+="vertex-tangents:"),a&&(c+="vertex-colors:"),i&&(c+="flat-shading:"),l&&(c+="morph-targets:"),u&&(c+="morph-normals:");var d=this.cache.get(c);d||(d=r.clone(),o&&(d.skinning=!0),n&&(d.vertexTangents=!0),a&&(d.vertexColors=!0),i&&(d.flatShading=!0),l&&(d.morphTargets=!0),u&&(d.morphNormals=!0),this.cache.add(c,d),this.associations.set(d,this.associations.get(r))),r=d}r.aoMap&&void 0===t.attributes.uv2&&void 0!==t.attributes.uv&&t.setAttribute("uv2",t.attributes.uv),r.normalScale&&!n&&(r.normalScale.y=-r.normalScale.y),r.clearcoatNormalScale&&!n&&(r.clearcoatNormalScale.y=-r.clearcoatNormalScale.y),e.material=r},D.prototype.getMaterialType=function(){return s["V"]},D.prototype.loadMaterial=function(e){var t,n=this,a=this.json,i=this.extensions,o=a.materials[e],l={},u=o.extensions||{},c=[];if(u[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){var p=i[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];t=p.getMaterialType(),c.push(p.extendParams(l,o,n))}else if(u[r.KHR_MATERIALS_UNLIT]){var h=i[r.KHR_MATERIALS_UNLIT];t=h.getMaterialType(),c.push(h.extendParams(l,o,n))}else{var d=o.pbrMetallicRoughness||{};if(l.color=new s["i"](1,1,1),l.opacity=1,Array.isArray(d.baseColorFactor)){var f=d.baseColorFactor;l.color.fromArray(f),l.opacity=f[3]}void 0!==d.baseColorTexture&&c.push(n.assignTexture(l,"map",d.baseColorTexture)),l.metalness=void 0!==d.metallicFactor?d.metallicFactor:1,l.roughness=void 0!==d.roughnessFactor?d.roughnessFactor:1,void 0!==d.metallicRoughnessTexture&&(c.push(n.assignTexture(l,"metalnessMap",d.metallicRoughnessTexture)),c.push(n.assignTexture(l,"roughnessMap",d.metallicRoughnessTexture))),t=this._invokeOne((function(t){return t.getMaterialType&&t.getMaterialType(e)})),c.push(this._invokeAll((function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,l)})))}!0===o.doubleSided&&(l.side=s["m"]);var m=o.alphaMode||A.OPAQUE;return m===A.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,m===A.MASK&&(l.alphaTest=void 0!==o.alphaCutoff?o.alphaCutoff:.5)),void 0!==o.normalTexture&&t!==s["R"]&&(c.push(n.assignTexture(l,"normalMap",o.normalTexture)),l.normalScale=new s["Ab"](1,1),void 0!==o.normalTexture.scale&&l.normalScale.set(o.normalTexture.scale,o.normalTexture.scale)),void 0!==o.occlusionTexture&&t!==s["R"]&&(c.push(n.assignTexture(l,"aoMap",o.occlusionTexture)),void 0!==o.occlusionTexture.strength&&(l.aoMapIntensity=o.occlusionTexture.strength)),void 0!==o.emissiveFactor&&t!==s["R"]&&(l.emissive=(new s["i"]).fromArray(o.emissiveFactor)),void 0!==o.emissiveTexture&&t!==s["R"]&&c.push(n.assignTexture(l,"emissiveMap",o.emissiveTexture)),Promise.all(c).then((function(){var a;return a=t===g?i[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(l):new t(l),o.name&&(a.name=o.name),a.map&&(a.map.encoding=s["Fb"]),a.emissiveMap&&(a.emissiveMap.encoding=s["Fb"]),O(a,o),n.associations.set(a,{type:"materials",index:e}),o.extensions&&P(i,a,o),a}))},D.prototype.loadGeometries=function(e){var t=this,n=this.extensions,a=this.primitiveCache;function i(e){return n[r.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then((function(r){return k(r,e,t)}))}for(var o=[],l=0,u=e.length;l<u;l++){var c,p=e[l],h=U(p),d=a[h];if(d)o.push(d.promise);else c=p.extensions&&p.extensions[r.KHR_DRACO_MESH_COMPRESSION]?i(p):k(new s["f"],p,t),a[h]={primitive:p,promise:c},o.push(c)}return Promise.all(o)},D.prototype.loadMesh=function(e){for(var t=this,r=this.json,n=r.meshes[e],a=n.primitives,i=[],o=0,l=a.length;o<l;o++){var u=void 0===a[o].material?N(this.cache):this.getDependency("material",a[o].material);i.push(u)}return i.push(t.loadGeometries(a)),Promise.all(i).then((function(r){for(var i=r.slice(0,r.length-1),o=r[r.length-1],l=[],u=0,c=o.length;u<c;u++){var p,h=o[u],d=a[u],f=i[u];if(d.mode===S.TRIANGLES||d.mode===S.TRIANGLE_STRIP||d.mode===S.TRIANGLE_FAN||void 0===d.mode)p=!0===n.isSkinnedMesh?new s["pb"](h,f):new s["Q"](h,f),!0!==p.isSkinnedMesh||p.geometry.attributes.skinWeight.normalized||p.normalizeSkinWeights(),d.mode===S.TRIANGLE_STRIP?p.geometry=K(p.geometry,s["yb"]):d.mode===S.TRIANGLE_FAN&&(p.geometry=K(p.geometry,s["xb"]));else if(d.mode===S.LINES)p=new s["E"](h,f);else if(d.mode===S.LINE_STRIP)p=new s["B"](h,f);else if(d.mode===S.LINE_LOOP)p=new s["D"](h,f);else{if(d.mode!==S.POINTS)throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+d.mode);p=new s["fb"](h,f)}Object.keys(p.geometry.morphAttributes).length>0&&H(p,n),p.name=n.name||"mesh_"+e,o.length>1&&(p.name+="_"+u),O(p,n),t.assignFinalMaterial(p),l.push(p)}if(1===l.length)return l[0];var m=new s["t"];for(u=0,c=l.length;u<c;u++)m.add(l[u]);return m}))},D.prototype.loadCamera=function(e){var t,r=this.json.cameras[e],n=r[r.type];if(n)return"perspective"===r.type?t=new s["db"](s["N"].radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):"orthographic"===r.type&&(t=new s["cb"](-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),r.name&&(t.name=r.name),O(t,r),Promise.resolve(t);console.warn("THREE.GLTFLoader: Missing camera parameters.")},D.prototype.loadSkin=function(e){var t=this.json.skins[e],r={joints:t.joints};return void 0===t.inverseBindMatrices?Promise.resolve(r):this.getDependency("accessor",t.inverseBindMatrices).then((function(e){return r.inverseBindMatrices=e,r}))},D.prototype.loadAnimation=function(e){for(var t=this.json,r=t.animations[e],n=[],a=[],i=[],o=[],l=[],u=0,c=r.channels.length;u<c;u++){var p=r.channels[u],h=r.samplers[p.sampler],d=p.target,f=void 0!==d.node?d.node:d.id,m=void 0!==r.parameters?r.parameters[h.input]:h.input,g=void 0!==r.parameters?r.parameters[h.output]:h.output;n.push(this.getDependency("node",f)),a.push(this.getDependency("accessor",m)),i.push(this.getDependency("accessor",g)),o.push(h),l.push(d)}return Promise.all([Promise.all(n),Promise.all(a),Promise.all(i),Promise.all(o),Promise.all(l)]).then((function(t){for(var n=t[0],a=t[1],i=t[2],o=t[3],l=t[4],u=[],c=0,p=n.length;c<p;c++){var h=n[c],d=a[c],f=i[c],m=o[c],g=l[c];if(void 0!==h){var v;switch(h.updateMatrix(),h.matrixAutoUpdate=!0,L[g.path]){case L.weights:v=s["ab"];break;case L.rotation:v=s["jb"];break;case L.position:case L.scale:default:v=s["Db"];break}var T=h.name?h.name:h.uuid,S=void 0!==m.interpolation?b[m.interpolation]:s["A"],R=[];L[g.path]===L.weights?h.traverse((function(e){!0===e.isMesh&&e.morphTargetInfluences&&R.push(e.name?e.name:e.uuid)})):R.push(T);var x=f.array;if(f.normalized){var _;if(x.constructor===Int8Array)_=1/127;else if(x.constructor===Uint8Array)_=1/255;else if(x.constructor==Int16Array)_=1/32767;else{if(x.constructor!==Uint16Array)throw new Error("THREE.GLTFLoader: Unsupported output accessor component type.");_=1/65535}for(var M=new Float32Array(x.length),E=0,A=x.length;E<A;E++)M[E]=x[E]*_;x=M}for(E=0,A=R.length;E<A;E++){var w=new v(R[E]+"."+L[g.path],d.array,x,S);"CUBICSPLINE"===m.interpolation&&(w.createInterpolant=function(e){return new y(this.times,this.values,this.getValueSize()/3,e)},w.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),u.push(w)}}}var I=r.name?r.name:"animation_"+e;return new s["b"](I,void 0,u)}))},D.prototype.loadNode=function(e){var t=this.json,n=this.extensions,a=this,i=t.nodes[e];return function(){var e=[];if(void 0!==i.mesh&&e.push(a.getDependency("mesh",i.mesh).then((function(e){var t=a._getNodeRef(a.meshCache,i.mesh,e);return void 0!==i.weights&&t.traverse((function(e){if(e.isMesh)for(var t=0,r=i.weights.length;t<r;t++)e.morphTargetInfluences[t]=i.weights[t]})),t}))),void 0!==i.camera&&e.push(a.getDependency("camera",i.camera).then((function(e){return a._getNodeRef(a.cameraCache,i.camera,e)}))),i.extensions&&i.extensions[r.KHR_LIGHTS_PUNCTUAL]&&void 0!==i.extensions[r.KHR_LIGHTS_PUNCTUAL].light){var t=i.extensions[r.KHR_LIGHTS_PUNCTUAL].light;e.push(a.getDependency("light",t).then((function(e){return a._getNodeRef(a.lightCache,t,e)})))}return Promise.all(e)}().then((function(t){var r;if(r=!0===i.isBone?new s["c"]:t.length>1?new s["t"]:1===t.length?t[0]:new s["bb"],r!==t[0])for(var o=0,l=t.length;o<l;o++)r.add(t[o]);if(i.name&&(r.userData.name=i.name,r.name=s["hb"].sanitizeNodeName(i.name)),O(r,i),i.extensions&&P(n,r,i),void 0!==i.matrix){var u=new s["P"];u.fromArray(i.matrix),r.applyMatrix4(u)}else void 0!==i.translation&&r.position.fromArray(i.translation),void 0!==i.rotation&&r.quaternion.fromArray(i.rotation),void 0!==i.scale&&r.scale.fromArray(i.scale);return a.associations.set(r,{type:"nodes",index:e}),r}))},D.prototype.loadScene=function(){function e(t,r,n,a){var i=n.nodes[t];return a.getDependency("node",t).then((function(e){return void 0===i.skin?e:a.getDependency("skin",i.skin).then((function(e){t=e;for(var r=[],s=0,n=t.joints.length;s<n;s++)r.push(a.getDependency("node",t.joints[s]));return Promise.all(r)})).then((function(r){return e.traverse((function(e){if(e.isMesh){for(var n=[],a=[],i=0,o=r.length;i<o;i++){var l=r[i];if(l){n.push(l);var u=new s["P"];void 0!==t.inverseBindMatrices&&u.fromArray(t.inverseBindMatrices.array,16*i),a.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[i])}e.bind(new s["ob"](n,a),e.matrixWorld)}})),e}));var t})).then((function(t){r.add(t);var s=[];if(i.children)for(var o=i.children,l=0,u=o.length;l<u;l++){var c=o[l];s.push(e(c,t,n,a))}return Promise.all(s)}))}return function(t){var r=this.json,n=this.extensions,a=this.json.scenes[t],i=this,o=new s["t"];a.name&&(o.name=a.name),O(o,a),a.extensions&&P(n,o,a);for(var l=a.nodes||[],u=[],c=0,p=l.length;c<p;c++)u.push(e(l[c],o,r,i));return Promise.all(u).then((function(){return o}))}}(),e}()}}]);
//# sourceMappingURL=chunk-2d0b9f3a.f1d36e73.js.map