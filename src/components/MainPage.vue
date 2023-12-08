<template>
<div :key="$route.params.id"> 
  <article class="backgroundClass">
    <br>
  <h1 class="mainH1"> Zini putnu? 🤔  </h1>
  <audio controls>
          <source :src="audioLink" type="audio/mpeg">
        Your browser does not support the audio element.
        <source> 
        </audio>
        <br>
        <span> <a :href="jsonDynamic[4]['Source']"> Audio Avots. </a> 
                {{ jsonDynamic[4]['Author'] }}.
                {{ jsonDynamic[4]['Date'] }}.
                {{ jsonDynamic[4]['Country'] }}
          </span> 
          <br>
  <picture>
    <source  media="(max-width: 500px)" width="450" height="300" :srcset="mainURL2" decoding="async"  />
    <source  media="(min-width: 501px)" width="600" height="400" :srcset="mainURL2" decoding="async"/>
    <img />
  </picture>
  <br>
    <span>  
        <a href="https://macaulaylibrary.org/asset/611894925"> Bildes Avots. </a> 
        <span> Andreas Stadler.</span>
        <span> 24 Sep 2023.</span>
        <span> Berlin, Germany  </span>
    </span>
    <br>

    <div class = "containerOne"> 
      <div> 
        <h1 class="mainH2"> Tas ir Latvijas Nacionālais Putns 🇱🇻 </h1>
      </div>
    </div>
  <div class = "containerTwo"> 
    <div ref="dropdown" class="dropdown">
      <strong class="dropdown-label" @click="show = !show">
      Uzspied te, lai redzētu atbildi!
      </strong>
      <p class="dropdown-content" v-if="show"> <router-link to="/putns/1">Baltā Cielava</router-link>  </p>
    </div>
  </div>


    <br> 
    <div class="boxStyle"> 
      <div class="boxStyle child">
        <div> <br> </div>
        <span> Mājaslapas mērķis ir veicināt interesi Latvijas putnu iepazīšanā. </span>
        <p> Vai tu Zini Latvijas sastopamākos putnus? </p> <router-link to="/saraksts">Iepazīsti 40 putnu sugas.</router-link>
        <p> Pārbaudi savas zināšanas atmiņas spēlē. </p>
      </div>
    </div>
  <br> 
    <div class="boxStyle"> 
        <div class="boxStyle child">
          <p>  Mājaslapā izmantotā informācija nāk no   </p>
            <a href="https://www.lob.lv/wp-content/uploads/2020/05/Mans_pirmais_putnu_noteicejs_A6_40_sugas_atverumi.pdf">"Mans Pirmais Putnu Noteicējs. 40 sugas."</a>
      
            
          <span> vai </span>
            <a href="https://www.lob.lv/noderigi/materiali/">www.lob.lv/noderigi/materiali</a>
          <span> Ar vairākām lejuplādes opcijām.</span>
            <span> <br> </span>

        </div>
    </div>
    <br> 
    <div class="boxStyle"> 
        <div class="boxStyle child">
          <h1>Vairāk informācijas</h1>

          <span> Vairāk informācija par putniem: <a href="http://www.putni.lv/"> putni.lv</a> </span> 
          <br>
          <span> Visas Latvijas putnu sugas: <a href="https://latvijasputni.lv/lv/putnu-saraksts.html"> latvjasputni.lv</a>  </span>  
          <br> 
          <span> Dabas Dati Putnu Novērojumi: <a href="https://dabasdati.lv/"> dabasdati.lv</a> </span> 
          <br>
          <span class="bolded">  Latvijas Ornitoloģijas biedrība: <a href="https://www.lob.lv/">lob.lv</a> </span> 
          <br>
          <br> 
          <span> Angliski: Latvijas sastopamie putni: <a href="https://ebird.org/region/LV?yr=all&m=&rank=hc"> ebird.org </a></span>
        <br> 
        <span> Angliski: Novēroto Putnu Skaits Latvijā (217219): <a href="https://www.gbif.org/occurrence/taxonomy?basis_of_record=HUMAN_OBSERVATION&basis_of_record=MACHINE_OBSERVATION&country=LV&taxon_key=212"> gbif.org</a></span>
        <span> <br> </span>
      </div> 
        <div>  <br> </div>
      </div>
  </article>




</div> <!-- end of  <div :key="$route.params.id"> -->
</template>

<script setup>
import jsonData from  "../assets/putni/source/source_putnsAllCompressed.json";
import { ref, onMounted } from "vue"

import autoAnimate from "@formkit/auto-animate"
const dropdown = ref() // we need a DOM node

const show = ref(false)

onMounted(() => {
  autoAnimate(dropdown.value) // thats it!
})

const jsonDynamic = jsonData[1];
const mainURL = "../src/assets/putni/putns1/main_resize_large.webp";
const mainURL1 = "../src/assets/putni/mainPage/wagtail.webp";
const mainURL2 = "../src/assets/putni/mainPage/wagtail2.webp";
const audioLink = "../src/assets/putni/putns1/audio.mp3";


</script>

<style scoped> 
.bolded{
  font-weight:bold;
}
img {
  border-radius: 5%;
}

.mainH1{
  font-size:40px;
}
.mainH2{
  font-size:40px;
}
.backgroundClass{
  margin-top:0px;
  background-image: url("../assets/putni/mainPage/mainIMG_cut_new2.webp");
  background-color: #cccccc; 
  height: 100%;
  width:100%;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

}
p, span, a{
  font-size:20px;
}
.containerOne{
  display:grid;
  grid-template-columns: 90%;
  justify-content: center;
  align-items:center;
  text-align:center;
  
}
@media (min-width:624px){
  .containerOne{
    grid-template-columns: 60%;
  }
}
@media (min-width:936px){
  .containerOne{
    grid-template-columns: 40%;
  }
}

.boxStyle{
  display:flex;
  justify-content: center;
  align-items:center;
  text-align:center;
  flex-direction: column;
}
.boxStyle .child{
  border-radius: 15px;
  border-style: dotted;
  border-color: rgb(7, 100, 52);
  padding:6px;
}
.containerTwo{
  display:grid;
  grid-template-columns: 80%;
  justify-content: center;
  align-items: center;
}
@media (min-width:600px){
  .containerTwo{
    grid-template-columns: 50%;
  }
}
@media (min-width:1000px){
  .containerTwo{
    grid-template-columns: 30%;
  }
}
.dropdown {
  font-size:20px;
  border: 2px solid var(--gray-l);
  border-radius: 0.5em;
  background-color:transparent;
  background-image: url("../assets/putni/mainPage/mainPage.webp");
  width:100%;
}

.dropdown strong {
  display: block;
  cursor: pointer;
}
.dropdown-content{
  font-weight:bold;
  background-color:transparent;
}

</style>