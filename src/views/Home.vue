<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const name = defineModel();

  const navig = (params) => {
    console.log(params)
    router.push(`/photos/${name.value}/${Math.floor(Math.random() * 10)}`)
  }
</script>

<template>
  <section class="main">
    <h1 class="title">напишите имя</h1>
    <form class="form" @submit.prevent="navig(name)">
      <input class="input" v-model="name"/>
      <button class="button text"> Перейти </button>
    </form>
  </section>
</template>

<style scoped>
  @import url("./Home.module.css");
</style>


