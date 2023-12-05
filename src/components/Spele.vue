<template>
<div></div>

<h1> Samaisam atmiņas kartes </h1>
<Boxes @some-event="callback" />
<br> <br> 
<ul class="balls" ref="parent">
  <li v-for="start in balls" :key="start.text">
    <img :src="start.image" width="50" height="65"/>
  </li>
</ul>

  <button @click="pushBall" > Nākamā</button>

<p> {{  balls[0].text }}</p>


</template>





<script setup lang="ts">

import { ref } from "vue"
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import Boxes from "../components/Boxes.vue"


const balls = ref([
  {order:1, image: '../src/assets/putni/mainPage/card1.webp', text: '1', guessImage: 'test', answer: ''},
  { order:2,image: '../src/assets/putni/mainPage/card2.webp', text: '2', guessImage: 'test', answer: '' },
  { order:3,image: '../src/assets/putni/mainPage/card3.webp', text: '3', guessImage: 'test', answer: '' },
  {order:4, image: '../src/assets/putni/mainPage/card4.webp', text: '4', guessImage: 'test', answer: '' },
 {order:5, image: '../src/assets/putni/mainPage/card5.webp', text: '5',  guessImage: 'test', answer: ''},
])

const [parent] = useAutoAnimate({ duration: 500 })


function pushBall() {
  balls.value.push(balls.value.shift()!)
}
function sortBalls() {
  balls.value.sort((a, b) => a.order - b.order);
}

function callback(){
  sortBalls();
}

</script>


<style scoped>
.balls {
  aspect-ratio: 1;
  margin: 2em auto;
  width: 100%;
  max-width: 15em;
  position: relative;
  padding: 0;
  background-size: contain;
  background-repeat: none;
}

section > ul.balls > li {
  width: 4em;
  height: 4em;
  border-radius: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875em;
  font-weight: 500;
  color: white;
  margin-bottom: 0;
}

.balls li::before {
  display: none;
  margin-bottom: 0;
}

.balls li:first-child {
  position: absolute;
  bottom: 0;
  left: calc(50% - 2em);
}

.balls li:nth-child(2) {
  position: absolute;
  top: 0;
  right: 0;
}

.balls li:nth-child(3) {
  position: absolute;
  top: 0;
  left: 0;
}




</style>