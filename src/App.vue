<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <section>
      <nav class="temporarily">
        <RouterLink to="/">Имена </RouterLink>
        <br/>
        <RouterLink to="/photos"> Фоточки</RouterLink>
      </nav>
  </section> -->

  <RouterView />
</template>

<style>
  .temporarily{
    position: absolute;
    top: 10%;
    left: 10%;
    z-index: 3;
  }
</style>
