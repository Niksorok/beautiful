<script setup>
    //import hoverEffect from 'hover-effect/dist/hover-effect.js'
    import img_0 from "../assets/Kolya/0.jpg"; import img_1 from "../assets/Kolya/1.jpg";import img_2 from "../assets/Kolya/2.jpg";import img_3 from "../assets/Kolya/3.jpg";import img_4 from "../assets/Kolya/4.jpg";import img_5 from "../assets/Kolya/5.jpg";import img_6 from "../assets/Kolya/6.jpg";import img_7 from "../assets/Kolya/7.jpg"; import img_8 from "../assets/Kolya/8.jpg";import img_9 from "../assets/Kolya/9.jpg";
    import Anton_0 from "../assets/Anton/0.jpg"; import Anton_1 from "../assets/Anton/1.jpg";import Anton_2 from "../assets/Anton/2.jpg";import Anton_3 from "../assets/Anton/3.jpg";import Anton_4 from "../assets/Anton/4.jpg";import Anton_5 from "../assets/Anton/5.jpg";import Anton_6 from "../assets/Anton/6.jpg";import Anton_7 from "../assets/Anton/7.jpg"; import Anton_8 from "../assets/Anton/8.jpg";import Anton_9 from "../assets/Anton/9.jpg";
    import Masha_0 from "../assets/Masha/0.jpg"; import Masha_1 from "../assets/Masha/1.jpg";import Masha_2 from "../assets/Masha/2.jpg";import Masha_3 from "../assets/Masha/3.jpg";import Masha_4 from "../assets/Masha/4.jpg";import Masha_5 from "../assets/Masha/5.jpg";import Masha_6 from "../assets/Masha/6.jpg";import Masha_7 from "../assets/Masha/7.jpg"; import Masha_8 from "../assets/Masha/8.jpg";import Masha_9 from "../assets/Masha/9.jpg";
    import Lada_0 from "../assets/Lada/0.jpg"; import Lada_1 from "../assets/Lada/1.jpg"; import Lada_2 from "../assets/Lada/2.jpg"; import Lada_3 from "../assets/Lada/3.jpg"; import Lada_4 from "../assets/Lada/4.jpg";
    
    import Photos from "../components/Photos.vue";
    //let [name, numberPhoto] = ["kek", "1"];
    const [name, numberPhoto] = window.location.pathname.split("/").slice(-2); //Из Url берёем имя и номер фото
    //console.log(name, numberPhoto)
    let images = [img_0, img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9];
    
    switch(name){
        case "Masha":
            images = [Masha_0, Masha_1, Masha_2, Masha_3, Masha_4, Masha_5, Masha_6, Masha_7, Masha_8, Masha_9];
            break;
        case "Lada":
            images = [Lada_0, Lada_1, Lada_2, Lada_3, Lada_4, Lada_0, Lada_1, Lada_2, Lada_3, Lada_4];
            break;
        case "Anton":
            images = [Anton_0, Anton_1, Anton_2, Anton_3, Anton_4, Anton_5, Anton_6, Anton_7, Anton_8, Anton_9];
            break;
        default:
            images = [img_0, img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9];
            break;
    }
    
    
    import {getCurrentInstance, onMounted, ref } from 'vue';
    let count = 0
    let num = numberPhoto
    let img = ref(images[num])
    let img2= ref(images[num===0 ? 1 : num-1])

    let update = ref(true);
    
    function randPhoto(button){
        button.disabled = true

        const prev = num
        //цикл while чтобы не было повторений
        while(prev === num){
             num = Math.floor(Math.random() * 10)
        } 
        setTimeout(() => {
            update.value = !update.value
            button.disabled = false
        }, 1300);
        
        
        count++
        if(count%2 === 0){
            img2.value = images[num];
        }else{
            img.value = images[num];
        }
    }
    
</script>

<template>
    <section class="main">
        <Photos v-if="update"  :img1="img" :img2="img2" :numder="count"/>
        <Photos v-if="!update" :img1="img2" :img2="img" :numder="count"/>
        <button @click="(e) => randPhoto(e.target)" class="button text">
            генерировать
        </button>
    </section>
</template>

<style scoped>
    @import url("./PhotosPage.module.css");
</style>