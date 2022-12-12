<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <header>
    <Navbar />
  </header>

  <RouterView />
  <div style="clear: both; height: 100px;"></div>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
</style>
