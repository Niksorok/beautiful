<script setup>
    import displacement from "../assets/heightMap.jpg"
    import {onMounted, onUpdated, ref } from 'vue';
    import hoverEffect from "hover-effect";

    const props = defineProps(['img1', 'img2', 'numder'])

    const imgDiv = ref();
    let hover = 'компонентик';
    onMounted(() => {
        hover = new hoverEffect({
            parent: imgDiv.value,
            intensity: Math.random()/2.2+0.2,
            image1: props.img1,
            image2: props.img2,
            displacementImage: displacement,
            angle: Math.PI / Math.random(),
            hover: false
        });
    })
    onUpdated(() => {
        hover.next();
    })
    
</script>

<template>
    <div ref="imgDiv" class="image"></div>
</template>

<style scoped>
    .image{
        width: 100%;
        height: auto;
        max-width: 440px;
        max-height: 440px;
        aspect-ratio: 1 / 1;

        margin: 5%;
        padding: 0;

        object-fit: contain;
        object-position: center;

        overflow: hidden;
        border-radius: 50px;
    }
</style>