<template>
<br> 
<div >
  <table>
    <tr> 	
			<th class="padded"> Vārds </th>
			<th class="padded"> Angliski </th>
			<th class="padded"> Latīniski </th>
		</tr>
    <tr>
        <td class="padded" v-if="listItems"> {{ listItems.name }} </td>
        <td class="padded" v-if="listItems"> {{ listItems.englishName }} </td>
        <td class="padded" v-if="listItems"> {{ listItems.latinName }} </td>
    </tr>
  </table>

  <span>   <router-link class="navButtons" :to="{ path: previousPage}" tag="button">◀</router-link>  </span>
 <router-link class="navButtons" :to="{ path: nextPage}" tag="button">▶</router-link> 
  <table> 
    <tr> 
      <td class="padded"> Lapu navigācija </td>
      <td> 
           <router-link :to="{ path: previousPage}" tag="button">◀</router-link> 
        </td>
        <td> 
          <router-link :to="{ path: nextPage}" tag="button">▶</router-link> 

        </td>
    </tr>
  </table> 
</div>
  <br> 
<br> 
<PutnsDynamic @image-to-parent="handleImageFromChild">
  </PutnsDynamic>

  


<picture>
  <source  media="(max-width: 500px)" width="450" height="360" :srcset="mainURLSmall" decoding="async"/>
  <source  media="(min-width: 501px)" width="600" height="400" :srcset="mainURL" decoding="async"/>
  <img />
</picture>

  <table>
    <tr> 	
			<th class="padded" > Interesanti fakti </th>
      
		</tr>
    <tr>
        <td class = "comment-cell padded" v-if="listItems"> {{ listItems.funFact }} </td>
    </tr>
    <tr> 
        <td class = "comment-cell padded" v-if="listItems"> {{ listItems.comment }} </td>
    </tr>
  </table>

  <br> 



  <picture>
  <source  media="(max-width: 500px)" width="450" height="360" :srcset="firstURLSmall" decoding="async" loading="lazy" />
  <source  media="(min-width: 501px)" width="600" height="400" :srcset="firstURL" decoding="async" loading="lazy"/>
  <img />
  </picture>

  <br> 

  <picture>
  <source  media="(max-width: 500px)" width="450" height="360" :srcset="secondURLSmall" decoding="async" loading="lazy" />
  <source  media="(min-width: 501px)" width="600" height="400" :srcset="secondURL" decoding="async" loading="lazy"/>
  <img />

  <br> 

</picture>
  <picture>
  <source  media="(max-width: 500px)" width="450" height="360" :srcset="thirdURLSmall" decoding="async" loading="lazy" />
  <source  media="(min-width: 501px)" width="600" height="400" :srcset="thirdURL" decoding="async" loading="lazy"/>
  <img />
</picture>

<br> 

</template>

<script setup>

import { ref } from 'vue';
import { useRoute} from 'vue-router';
import PutnsDynamic from  '../components/PutnsDynamic.vue'

let mainURL = "";
let firstURL = "";
let secondURL = "";
let thirdURL = "";

let mainURLSmall = "";
let firstURLSmall = "";
let secondURLSmall = "";
let thirdURLSmall = "";

function handleImageFromChild( childMainURL, childFirstURL, childSecondURL, 
        childThirdURL, childMainURLSmall, childFirstURLSmall, childSecondURLSmall, childThirdURLSmall){
  mainURL += childMainURL;
  firstURL += childFirstURL;
  secondURL +=childSecondURL;
  thirdURL += childThirdURL;
  mainURLSmall+=childMainURLSmall;
  firstURLSmall+=childFirstURLSmall;
  secondURLSmall+=childSecondURLSmall;
  thirdURLSmall+=childThirdURLSmall;

}

let is11Test = ref(false);
let is17Test = ref(false);
let is26Test = ref(false);
let is36Test = ref(false);
const listItems = ref({});

const route = useRoute();
const birdId = route.params.id;
let previous = +birdId-1
if(previous <=0){
  previous = 1;
}
let previousPage = "/putns/"+previous

let next = +birdId+1
if(next >=40){
  next=40;
}
let nextPage = "/putns/"+next

if( birdId == 17){
  is17Test = true;
}
if(birdId == 11){
  is11Test = true;
}
if(birdId == 26){
  is26Test = true;
}
if(birdId == 36){
  is36Test = true;
}

async function getData() {
    try{
  const res = await fetch('http://localhost:8080/birds/'+birdId);
  const finalRes = await res.json();
  listItems.value = finalRes;
    } catch (error){
        // error not yet handled.
    }
    
}

getData();

</script>

<style>

.imgFix1{
  height: 600px; 
  width: 400px;
}
.imgFix{
  height: 600px; 
  width: 480px;
}
.imgMain{
  height: 750px; 
  width: 600px;
}
.img {
    height: 600px; 
    width: 400px;
}

.imgSmall{
  height: 450px; 
    width: 300px;
}
.navButtons{
  font-size:20px;
}

.box {
  display: flex;
  justify-content: space-between;
}

</style>