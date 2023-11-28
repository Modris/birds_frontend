<template>
  <Navbar />
<router-view  :key="$route.params.id"/>

</template>

<script setup>

import Navbar from './components/Navbar.vue'

</script>
