<template>

  <div class="main-container">
    <div> <Navbar /> </div>
    
    <div class="content"> 
      <transition name="fade">
        <router-view :key="$route.params.id"/>
      </transition>
    </div>

    <div> 
       <Footer class="footer" />
    </div>
    
  </div>

</template>

<script setup>

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
.main-container {
   display:flex;
   flex-direction: column;
   min-height: 100vh;
}
.footer{
  margin-top: auto;
}
.content{
  flex-grow: 1;
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