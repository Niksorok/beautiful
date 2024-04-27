<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="temporarily">
        <RouterLink to="/">Имена </RouterLink>
        <br/>
        <RouterLink to="/photos"> Фоточки</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style>
  .temporarily{
    position: absolute;
    top: 10%;
    left: 10%;
  }
</style>
