<template>
  <Navbar />
<router-view  :key="$route.params.id"/>
<br> <br>
<Footer />
</template>

<script setup>

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
