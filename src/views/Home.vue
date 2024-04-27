<script setup>
  import { RouterLink} from 'vue-router'
  const name = defineModel();

  const navig = (params) => {
    console.log(params)
  }

  const path = `/photos/${name}/${1}`
</script>

<template>
  <main class="main">
    <h1 class="title">напишите имя</h1>
    <form class="form" @submit.prevent="navig(name)">
      <input class="input" v-model="name"/>
      <button class="button">
        <RouterLink class="text" :to="path">Перейти</RouterLink>
      </button>
    </form>
  </main>
</template>

<style scoped>
  @import url("./Home.module.css");
</style>


