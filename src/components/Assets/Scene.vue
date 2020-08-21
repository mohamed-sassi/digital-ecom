<template>
    <div class="scene" ref="scene"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as THREE from 'three';

@Component
export default class App extends Vue {}
</script>

<style  scoped>
    .scene {
  width: 100%;
  height: 100%;
}
</style>