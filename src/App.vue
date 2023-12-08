<template>


  <div> 
    <Navbar />
    <transition name="fade">
    <router-view  :key="$route.params.id"/>
    </transition>
    <br> <br>
    <Footer />
  </div>

</template>

<script setup>

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>


.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .05s;
}

.fade-enter-active {
  transition-delay: .05s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>