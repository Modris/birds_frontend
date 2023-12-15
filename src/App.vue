<template>


<main> 
  <div class="app-container"> 
    <Navbar />
    <div class="content"> 
      <transition name="fade">
      <router-view  :key="$route.params.id"/>
      </transition>
   </div>
    <Footer />

  </div>
</main>
</template>

<script setup>

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content{
  flex-grow:1;
  padding-bottom:30px;

}
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