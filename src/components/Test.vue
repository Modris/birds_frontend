<template>
    <br><br>
    <div ref="dropdown" class="dropdown">
    <strong class="dropdown-label" @click="toggleShow">
    Atbilde 🚫
    </strong>
    <p class="dropdown-content" v-if="show"> test </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

import autoAnimate from "@formkit/auto-animate"
const dropdown = ref() // we need a DOM node

const show = ref(false)

onMounted(() => {
  autoAnimate(dropdown.value) // thats it!
})

function toggleShow(){
  show.value = !show.value;
  if(show.value == true){
    balls.value[0].reveal = true;
    balls.value[0].image = balls.value[0].guessImage;
    victoryOrDefeat.value = true;
  }
 
}


</script>




<style>


.dropdown {
  font-size:20px;
  border: 2px solid var(--gray-l);
  border-radius: 0.5em;

  /*background-image: url("../assets/putni/mainPage/mainPage.webp"); */
  background: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
  width:100%;
}

.dropdown strong {
  display: block;
  cursor: pointer;
}

.dropdown-content{
  font-weight:bold;
  background-color:red;
}



.angry-grid {
   display: grid; 
   grid-template-columns: 29% 29% 29%;
   grid-template-rows: 20% 20% 20%;
   row-gap:150px;
   justify-content: center;
}
.spanAll {

   background-color: #E9B55B; 
   grid-row-start: 1;
   grid-column-start: 1;

   grid-row-end: 4;
   grid-column-end: 4;
}

.bottomLeft{
 grid-area:3/1 /3/1;
 background-color:Green;
}
.bottomRight{
  grid-area:3/3 /3/3;
 background-color:Green;
}
</style>