<template>

    <br>
    <h1> Samaisam atmiņas kartes </h1>
    <span class="fontSize"> 40 sugas. 240 bildes. </span>
    
    <Boxes @someEvent="callback" />
    <br> <br> 
    
    <article class="angry-grid"  >
      <div class = "spanAll"> 
        <ul class="balls" ref="parent" >
          <li v-for="start in balls" :key="start.text">
            <img class="img" :src="start.image"/>
          </li>
        </ul>
      </div>
      <div class="bottomLeft"><button class="bn39" @click="GiveHint">Mājiens 🤫</button> </div>
      <div class="bottomRight"> <button class="bn40" @click="pushBall" > ▶ </button>  </div>
    </article>
    
    <article class = "containerOne" v-if="birdNames[+balls[0].id].name != null"> 
       <div> <span class="fontSize">  {{ hint }} </span> </div>
       <div v-if="balls[0].reveal == true"> 
        <p  class="correctGuess"> {{ birdNames[+balls[0].id].name.toLowerCase().trim()}} </p>
      </div>
    </article>
       
    <article class="centerGrid"> 
      <div class="flexbox">
    
         <div>
           <input class="userGuessBox" v-model="userGuess" @input="onInput" placeholder="Mini vai Zini?" />
           
        </div>
       
          <div class="victoryFalse" :class="{victoryTrue: balls[0].reveal}"> 
            <span v-if="balls[0].reveal == false"> ❌</span> 
            <span v-if="balls[0].reveal == true"> ✔️</span> 
          </div>
    
       </div>
      </article>
    
    <div class="containerTwo">
      <div v-if="birdNames[+balls[0].id].name != null" class = "dropdown" ref="dropdown">
        <strong class="dropdown-label" @click="toggleShow">
        Atbilde 🚫
        </strong>
        <p class="dropdown-content" v-if="show"> {{ birdNames[+balls[0].id].name }} </p>
      </div>
    
    </div>
    
    
    <div v-if="ranNums !=null && randImages != null && guessImageCooked != null"> 
    
    <!-- Some images are stretched unfortunately so this is why so many ifs...-->
    <picture v-if="balls[0].pic == 'main' && (balls[0].id == '23' || balls[0].id == '39')">
      <source  media="(max-width: 500px)" width="360" height="450" :srcset="balls[0].guessImage" decoding="async"/>
      <source  media="(min-width: 501px)" width="600" height="400" :srcset="balls[0].guessImage" decoding="async"/>
      <img />
    </picture>
    <picture v-else-if="balls[0].pic == 'main' && balls[0].id == '37'">
      <source  media="(max-width: 500px)" width="450" height="300" :srcset="balls[0].guessImage" decoding="async"/>
      <source  media="(min-width: 501px)" width="600" height="400" :srcset="balls[0].guessImage" decoding="async"/>
      <img />
    </picture>
    
    <!-- 1st image v-ifs...-->
    <picture v-else-if="balls[0].pic == '1' && balls[0].id == '23'">
      <source  media="(max-width: 500px)" width="360" height="450" :srcset="balls[0].guessImage" decoding="async" loading="lazy" />
      <source  media="(min-width: 501px)" width="600" height="400" :srcset="balls[0].guessImage" decoding="async" loading="lazy"/>
      <img />
     </picture>
     <picture v-else-if="balls[0].pic == '1' && (balls[0].id == '26' || balls[0].id == '36')">
      <source  media="(max-width: 500px)" width="300" height="450" :srcset="balls[0].guessImage" decoding="async" loading="lazy" />
      <source  media="(min-width: 501px)" width="400" height="600" :srcset="balls[0].guessImage" decoding="async" loading="lazy"/>
      <img />
     </picture>
     <!-- 3rd image v-ifs...-->
     <picture v-else-if="balls[0].pic == '3' && balls[0].id == '36'">
      <source  media="(max-width: 500px)" width="300" height="450" :srcset="balls[0].guessImage" decoding="async" loading="lazy" />
      <source  media="(min-width: 501px)" width="400" height="600" :srcset="balls[0].guessImage" decoding="async" loading="lazy"/>
      <img />
     </picture>
     <picture v-else-if="balls[0].pic == '3' && balls[0].id == '26'">
      <source  media="(max-width: 500px)" width="338" height="450" :srcset="balls[0].guessImage" decoding="async" loading="lazy" />
      <source  media="(min-width: 501px)" width="600" height="400" :srcset="balls[0].guessImage" decoding="async" loading="lazy"/>
      <img />
     </picture>
    
    <picture v-else>
      <source  media="(max-width: 500px)" width="450" height="360" :srcset="balls[0].guessImage" decoding="async"/>
      <source  media="(min-width: 501px)" width="600" height="400" :srcset="balls[0].guessImage" decoding="async"/>
      <img />
    </picture>
    <br> 
    
    
    <div v-if="balls[0].source != null"> 
        <span>  
            <a :href="balls[0].source['Source']"> Avots. </a> 
            {{ balls[0].source['Author'] }}.
            {{ balls[0].source['Date'] }}.
            {{ balls[0].source['Country'] }}
        </span> 
      </div>
    <br><br>
      </div>
    
    
    
    
    </template>
    
    
    
    
    
    <script setup >
    
    import { ref, onMounted, watchEffect } from "vue"
    import { useAutoAnimate } from '@formkit/auto-animate/vue'
    import Boxes from "../components/Boxes.vue"
    import jsonData from  "../assets/putni/source/source_putnsAllCompressed.json";
    
    
    
    var show = ref(false)
    
    onMounted(() => {
      useAutoAnimate(dropdown.value) // thats it!
    })
    var hint = ref('');
    
    let birdNames = [
      { id:0, name: 'Filler so id go from 1-40'},
      { id: 1, name: 'Baltā Cielava' },
      { id: 2, name: 'Paugurknābja gulbis' },
      { id: 3, name: 'Ziemeļu gulbis' },
      { id: 4, name: 'Meža pīle' },
      { id: 5, name: 'Ķīvīte' },
      { id: 6, name: 'Zivju gārnis' },
      { id: 7, name: 'Dzērve' },
      { id: 8, name: 'Sudrabkaija' },
      { id: 9, name: 'Lielais ķīris' },
      { id: 10, name: 'Peļu klijāns' },
      { id: 11, name: 'Vistu vanags' },
      { id: 12, name: 'Dižraibais dzenis' },
      { id: 13, name: 'Melnā dzilna' },
      { id: 14, name: 'Lauku balodis' },
      { id: 15, name: 'Pilsētas balodis' },
      { id: 16, name: 'Mājas zvirbulis' },
      { id: 17, name: 'Lauku zvirbulis' },
      { id: 18, name: 'Bezdelīga' },
      { id: 19, name: 'Mājas čurkste' },
      { id: 20, name: 'Svīre' },
      { id: 21, name: 'Melnais mežastrazds' },
      { id: 22, name: 'Sarkanrīklīte' },
      { id: 23, name: 'Svilpis' },
      { id: 24, name: 'Paceplītis' },
      { id: 25, name: 'Zeltgalvītis' },
      { id: 26, name: 'Zilzīlīte' },
      { id: 27, name: 'Lielā zīlīte' },
      { id: 28, name: 'Erickiņš' },
      { id: 29, name: 'Melnais mušķērājs' },
      { id: 30, name: 'Dzilnītis' },
      { id: 31, name: 'Mājas strazds' },
      { id: 32, name: 'Sīlis' },
      { id: 33, name: 'Pelēkā vārna' },
      { id: 34, name: 'Krauķis' },
      { id: 35, name: 'Krauklis' },
      { id: 36, name: 'Žagata' },
      { id: 37, name: 'Brūnā čakste' },
      { id: 38, name: 'Zaļžubīte' },
      { id: 39, name: 'Žubīte' },
      { id: 40, name: 'Dzeltenā stērste' },
    ];
    
    var count = ref(-1);
    var ranNums = ref([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
                          21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]);
    var randImages = ref([0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3]);
    var guessImageCooked = ref('');
    var id = ref(0);
    const balls = ref([
      {order:1, image: '../src/assets/putni/mainPage/card1.webp', text: '0', guessImage: '',pic:'', id: '', source:{},answer: '', reveal:false},
      { order:2,image: '../src/assets/putni/mainPage/card2.webp', text: '1', guessImage: '',pic:'', id: '', source:{}, answer: '', reveal:false },
      { order:3,image: '../src/assets/putni/mainPage/card3.webp', text: '2', guessImage: '',pic:'', id: '', source:{}, answer: '', reveal:false },
      {order:4, image: '../src/assets/putni/mainPage/card4.webp', text: '3', guessImage: '',pic:'', id: '', source:{}, answer: '', reveal:false },
     {order:5, image: '../src/assets/putni/mainPage/card5.webp', text: '4',  guessImage: '',pic:'', id: '', source:{}, answer: '', reveal:false},
    ])
    
    
    const userGuess = ref('');
    function onInput (){
        if(balls.value[0] != null && userGuess != null){
           if(userGuess.value.toLowerCase().trim() == birdNames[+balls.value[0].id].name.toLowerCase().trim()) {
            balls.value[0].reveal = true;
            balls.value[0].image = balls.value[0].guessImage;
        } 
      }
    }
    
    const [parent] = useAutoAnimate({ duration: 500 })
    const [dropdown] = useAutoAnimate({ duration: 200 })
    
    
    function pushBall() {
      if (balls.value.length > 0) {
      balls.value.push(balls.value.shift());
      hint.value = ''; /* set hint to empty. */
      }
      show = ref(false);
      userGuess.value = '';
    }
    function sortBalls() {
      balls.value.sort((a, b) => a.order - b.order);
    }
    
    function callback(){
      sortBalls();
      newGame();
    }
    
    function shuffle(array) {
        var i = array.length,
            j = 0,
            temp;
    
        while (i--) {
    
            j = Math.floor(Math.random() * (i+1));
    
            // swap randomly chosen element with current element
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
    
        }
    
        return array;
    }
    
    function newGame(){
      show = ref(false); /* Hide spoiler answer */
      userGuess.value = ''; /* Set user guess to 0. It's so the indicator isn't greenlit */
      hint.value = ''; /* set hint to empty. */
    
    
      count.value = count.value+1;
      if(count.value == 0 ){ /* starting new game. count = -1 + 0 = 0; */
        shuffle(ranNums.value);
        shuffle(randImages.value);
      }
      if(count.value == 8){
        count.value = 1; /* never let count reach 0 again or above 7.*/
        shuffle(ranNums.value);
      }
      shuffle(randImages.value);
    
    
      var chosenOne = ['','','','',''];
      var start = 0;
      /* For loop with count.value*5 is because i have 40 cards. Every 7 rounds i shuffle.
      Instead of shuffling every time. It also means it's more randomized without repeats as often.*/
      for(let i =0+(count.value*5); i<5+(count.value*5); i++){
          if(randImages.value[start] == 0){
          chosenOne[start] = 'main';
            
        } else{
          chosenOne[start] = ''+randImages.value[start];
        } 
        
        balls.value[start].image = "../src/assets/putni/mainPage/card"+(start+1)+"_new.webp"; /* reset images to default */
        
        
        balls.value[start].reveal = false; /* Reset reveals to false. */
    
        guessImageCooked = ref("../src/assets/putni/putns"+ranNums.value[i]+"/"+chosenOne[start]+"_resize_large.webp");
        balls.value[start].guessImage = guessImageCooked.value;
        balls.value[start].id = ''+ranNums.value[i];
        balls.value[start].pic = chosenOne[start];
        balls.value[start].source = {test: "test"};
        if(balls.value[start].pic == "main"){ /* if "main" then it would be jsonData[37][main]. We 
        change to jsonData[37][0] as it should be. Otherwise ignore and take from array. */
          balls.value[start].source = jsonData[balls.value[start].id][0]; 
        } else{
          balls.value[start].source = jsonData[balls.value[start].id][balls.value[start].pic];
        }
        balls.value[start].answer = birdNames[+balls.value[start].id].name.toLowerCase();
        start++;
    
      }
    }
    
    function GiveHint () {
    
      if(hint != null && balls.value[0] != null && hint.value.length <= balls.value[0].answer.length)
      var start = hint.value.length;
      var answer = balls.value[0].answer;
      console.log(answer)
      hint.value = hint.value+answer.charAt(start);
     /* userGuess.value = hint.value; I didn't like the functionality of this.*/
    };
    
    function toggleShow(){
      show.value = !show.value;
      if(show.value == true){
        balls.value[0].reveal = true;
        balls.value[0].image = balls.value[0].guessImage;
        victoryOrDefeat.value = true;
      }
     
    }
    
    
    </script>
    
    
    <style scoped>
    
    .flexbox{
     display:flex;
     flex-direction: row;
    }
    .containerTwo{
      display:grid;
      grid-template-columns: 42%;
      justify-content: center;
      align-items: center;
      padding:20px;
    }
    @media (min-width:600px){
      .containerTwo{
        grid-template-columns: 30%;
      }
    }
    @media (min-width:1000px){
      .containerTwo{
        grid-template-columns: 20%;
      }
    }
    .dropdown {
      font-size:20px;
      border: 2px solid var(--gray-l);
      border-radius: 0.5em;
    
      /*background-image: url("../assets/putni/mainPage/mainPage.webp"); */
      background: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
    }
    
    .dropdown strong {
      display: block;
      cursor: pointer;
    }
    
    .dropdown-content{
      font-weight:bold;
      background-color:red;
    }
    
    
    .containerOne{
      display:grid;
      grid-template-columns: 40% 40%;
      grid-template-rows:80px;
      justify-content: center;
      align-items: center;
      margin:-10px;
    
    }
    .spanThree{
      grid-column-start:1;
      grid-column-end:4;
      align-self:end;
    }
    
    .userGuessBox{
      font-size:20px;
    }
    .fontSize{
      font-size:20px;
    }
    
    .bn39 {
      background-image: linear-gradient(220deg, #008aff, #86d472);
      border-radius: 6px;
      box-sizing: border-box;
      color: #ffffff;
      display: block;
      height: 40px;
      font-size: 20px;
      font-weight: 600;
      padding: 4px;
      text-decoration: none;
      width: 125px;
    }
    
    .bn40 {
    
      background: radial-gradient(128px at 2.9% 15%, rgb(191, 224, 251) 0%, rgb(232, 233, 251) 25.8%, rgb(252, 239, 250) 50.8%, rgb(234, 251, 251) 77.6%, rgb(240, 251, 244) 100.7%);
      border-radius: 100%;
      color: #004953;
      width: 50px;
      height: 50px;
      font-size: 32px;
      text-decoration: none;
    }
    
    
    .victoryFalse{
      background: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
      font-size:20px;
      height:100%;
      width:40px;
    }
    .victoryTrue{
      background:green;
      font-size:20px;
      height:100%;
      width:40px;
    }
    
    .correctGuess{
      font-size:20px;
      color:green;
      font-weight:bold;
    
    }
    
    .balls {
      background: transparent;
      aspect-ratio: 1;
      width: 100%;
      max-width: 25em;
      position: relative;
      padding: 0;
      background-size: contain;
      background-repeat: none;
    }
    
    section > ul.balls > li {
      width: 7em;
      height: 7em;
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
    
    .centerGrid{
     display:grid;
     grid-template-columns: 20%;
     justify-items: center;
     justify-content: center;
     column-gap:0px;
    }
    
    
    .angry-grid {
      background-color: white;
       display: grid; 
       grid-template-columns: 29% 65% ;
       grid-template-rows: 20% 20%;
       row-gap:150px;
       justify-content: center;
    }
    .img{
      width:80px;
      height:100px;
    }
    
    @media (min-width:500px){
      .angry-grid{
        grid-template-columns: 29% 45% ;
        .bottomRight{
        margin-right:-55px;
      }
      }
 
     
    }
    @media (min-width:590px){
      .angry-grid{
        grid-template-columns: 29% 40% ;
      }
      .img{
      width:100px;
      height:110px;
    }
    }
    @media (min-width:704px){
      .angry-grid{
        grid-template-columns: 29% 35% ;
        .bottomRight{
        margin-right:-50px;
      }
      }
      .containerOne{
        grid-template-columns: 35% 25% ;
      }
    }
    @media (min-width:860px){
      .angry-grid{
        grid-template-columns: 29% 28%;
        .bottomRight{
        margin-right:10px;
      }
      }
      .containerOne{
        grid-template-columns: 28% 25% ;
      }
   
    }
    @media (min-width:1000px){
      .angry-grid{
        grid-template-columns: 29% 13%;
      }
      .containerOne{
        grid-template-columns: 25% 25% ;
      }
    }
    .spanAll {
     /* background: url("../assets/putni/mainPage/plank.webp"); */
     background: lightgray;
      grid-row-start: 1;
       grid-column-start: 1;
       grid-row-end: 3;
       grid-column-end: 3;
      z-index:5;
      display: flex; /* Use flexbox to center content */
    justify-content: center;
    align-items: center;
    }
    
    .bottomLeft{
     grid-area:2/1 /2/1;
     background-color: transparent;
     z-index:6;
     align-self:end;
     margin-left:0px;
    }
    .bottomRight{
      grid-area:2/2 /2/2;
      background-color: transparent;
      z-index:6;
      align-self:start;
      margin-right:-100px;
    }
    </style>