<template>

<h1> Zini putnu? 🤔  </h1>
<audio controls>
        <source :src="audioLink" type="audio/mpeg">
      Your browser does not support the audio element.
      <source> 
      </audio>
      <br>
      <span> <a :href="jsonDynamic[4]['Source']"> Audio Avots. </a> 
              {{ jsonDynamic[4]['Author'] }}.
              {{ jsonDynamic[4]['Country'] }}
        </span> 
        <br>
<picture>
  <source  media="(max-width: 500px)" width="450" height="300" :srcset="mainURL" decoding="async"  />
  <source  media="(min-width: 501px)" width="600" height="400" :srcset="mainURL" decoding="async"/>
  <img />
</picture>
<br>
  <span>  
       <a :href="jsonDynamic[0]['Source']"> Bildes Avots. </a> 
       {{ jsonDynamic[0]['Author'] }}.
       {{ jsonDynamic[0]['Country'] }}
  </span>
  <br>
  <h1> Tas ir Latvijas Nacionālais Putns 🇱🇻 </h1>
<p> <router-link to="/putns/1">Baltā Cielava</router-link></p>
<p> Mājaslapas mērķis ir veicināt interesi Latvijas putnu iepazīšanā. </p>
<p> Vai tu Zini Latvijas sastopamākos putnus? </p> <router-link to="/saraksts">Iepazīsti 40 putnu sugas.</router-link>
<p> Pārbaudi savas zināšanas atmiņas spēlē. </p>

<div class="boxStyle"> 
    <div class="boxStyle child">
      <p>  Mājaslapā izmantotā informācija nāk no </p>
        <a href="https://www.lob.lv/wp-content/uploads/2020/05/Mans_pirmais_putnu_noteicejs_A6_40_sugas_atverumi.pdf">"Mans Pirmais Putnu Noteicējs. 40 sugas."</a>
      <span> vai </span>
        <a href="https://www.lob.lv/noderigi/materiali/">www.lob.lv/noderigi/materiali"</a>
      <span> Ar vairākām lejuplādes opcijām.</span>
        <br><br>

     </div>
</div>
<h1>Vairāk informācijas</h1>

<span> Vairāk informācija par putniem: </span> <a href="http://www.putni.lv/"> putni.lv</a>
<br>
<span> Visas putnu sugas Latvijā: </span>  <a href="https://latvijasputni.lv/lv/putnu-saraksts.html"> latvjasputni.lv</a> 

<br> 
<span> Dabas Dati Putnu Novērojumi </span> <a href="https://dabasdati.lv/"> dabasdati.lv</a>
<br>
<span>  Latvijas Ornitoloģijas biedrība:  </span> <a href="https://www.lob.lv/">lob.lv</a>
<br><br>






</template>

<script setup>
import jsonData from  "../assets/putni/source/source_putnsAllCompressed.json";

const jsonDynamic = jsonData[1];
const mainURL = "../src/assets/putni/putns1/main_resize_large.webp";
const audioLink = "../src/assets/putni/putns1/audio.mp3";


</script>

<style scoped> 

p, span, a{
  font-size:20px;
}
.container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.child-item {
  grid-column: 2 / 5;
}
.boxStyle{
  display:flex;
  justify-content: center;
  align-items:center;
  text-align:center;
  flex-direction: column;

}
.boxStyle .child{
  border-style: dotted;
  border-color: rgb(7, 100, 52);
  padding:6px;
}
</style>