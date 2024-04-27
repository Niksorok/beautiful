<script setup>
    import img_0 from "../assets/Anton/0.jpg";
    import img_1 from "../assets/Anton/1.jpg";
    import img_2 from "../assets/Anton/2.jpg";
    import img_3 from "../assets/Anton/3.jpg";
    import img_4 from "../assets/Anton/4.jpg";
    import img_5 from "../assets/Anton/5.jpg";
    import img_6 from "../assets/Anton/6.jpg";
    import img_7 from "../assets/Anton/7.jpg";
    import img_8 from "../assets/Anton/8.jpg";
    import img_9 from "../assets/Anton/9.jpg";
    const antons = [img_0, img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9];
    
    import {onMounted, ref } from 'vue';

    let num = ref(0)

    function randPhoto(){
        const prev = num.value
        //цикл while чтобы не было повторений
        while(prev === num.value){
             num.value = Math.floor(Math.random() * 10)
        } 
    }

</script>

<template>
    <img class="image" :src="antons[num]" />
    <button @click="randPhoto()" class="button text">
        генерировать
    </button>
</template>

<style>
    @import url("./Photos.module.css");
</style>