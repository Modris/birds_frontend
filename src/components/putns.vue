<template>
<br> 

  <br> 

 
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

  <article class = "gridLayout"> 
    <div class="gridLayout child" v-if="received === true"> 
        <audio controls>
        <source :src="audioLink" type="audio/mpeg">
      Your browser does not support the audio element.
      <source> 
      </audio>
    </div> 
    <div > 
      <table> 
        <tr> 
          <td> 
              <router-link :to="{ path: previousPage}" tag="button">◀</router-link> 
            </td>
            <td> 
              <router-link :to="{ path: nextPage}" tag="button">▶</router-link> 
            </td>
        </tr>
      </table> 
    </div>
    <div> </div> <!-- empty grid -->
    <div> </div> <!-- empty grid -->
  </article>
  
  <span> <a :href="jsonDynamic[4]['Source']"> Audio Avots. </a> 
              {{ jsonDynamic[4]['Author'] }}.
              {{ jsonDynamic[4]['Country'] }}
        </span> 
        <br><br>
<PutnsDynamic @image-to-parent="handleImageFromChild">
</PutnsDynamic>




<picture>
  <source  media="(max-width: 500px)" width="450" height="360" :srcset="mainURLSmall" decoding="async"/>
  <source  media="(min-width: 501px)" width="600" height="400" :srcset="mainURL" decoding="async"/>
  <img />
</picture>

<br>
  <span>  
       <a :href="jsonDynamic[0]['Source']"> Avots. </a> 
       {{ jsonDynamic[0]['Author'] }}.
       {{ jsonDynamic[0]['Country'] }}
  </span>
    
  <br><br>
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
  <span>  
       <a :href="jsonDynamic[1]['Source']"> Avots. </a> 
       {{ jsonDynamic[1]['Author'] }}.
       {{ jsonDynamic[1]['Country'] }}
  </span>
  
  <br> 

  <picture>
  <source  media="(max-width: 500px)" width="450" height="360" :srcset="secondURLSmall" decoding="async" loading="lazy" />
  <source  media="(min-width: 501px)" width="600" height="400" :srcset="secondURL" decoding="async" loading="lazy"/>
  <img />
  </picture>
  <br>
  <span>  
       <a :href="jsonDynamic[2]['Source']"> Avots. </a> 
       {{ jsonDynamic[2]['Author'] }}.
       {{ jsonDynamic[2]['Country'] }}
  </span>
<br>
  <picture>
  <source  media="(max-width: 500px)" width="450" height="360" :srcset="thirdURLSmall" decoding="async" loading="lazy" />
  <source  media="(min-width: 501px)" width="600" height="400" :srcset="thirdURL" decoding="async" loading="lazy"/>
  <img />
</picture>

<br>
  <span>  
       <a :href="jsonDynamic[3]['Source']"> Avots. </a> 
       {{ jsonDynamic[3]['Author'] }}.
       {{ jsonDynamic[3]['Country'] }}
  </span>

<br> 

</template>

<script setup>

import { ref, onMounted } from 'vue';
import { useRoute} from 'vue-router';
import PutnsDynamic from  '../components/PutnsDynamic.vue'


const route = useRoute();
const birdId = route.params.id;
import jsonData from  "../assets/putni/source/source_putnsAllCompressed.json";



const jsonDynamic = jsonData[birdId];

let audioLink = "";
let mainURL = "";
let firstURL = "";
let secondURL = "";
let thirdURL = "";
let mainURLSmall = "";
let firstURLSmall = "";
let secondURLSmall = "";
let thirdURLSmall = "";
let received = false;
function handleImageFromChild(childAudioLink, childMainURL, childFirstURL, childSecondURL, 
        childThirdURL, childMainURLSmall, childFirstURLSmall, childSecondURLSmall, childThirdURLSmall){
  audioLink += childAudioLink;
  mainURL += childMainURL;
  firstURL += childFirstURL;
  secondURL +=childSecondURL;
  thirdURL += childThirdURL;
  mainURLSmall+=childMainURLSmall;
  firstURLSmall+=childFirstURLSmall;
  secondURLSmall+=childSecondURLSmall;
  thirdURLSmall+=childThirdURLSmall;
  received = true; 
}

const listItems = ref({});


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

.navButtons{
  font-size:20px;
}

.gridLayout{
  display:grid;
  grid-template-columns: 250px 35px;
  grid-template-rows: 50px;
  justify-content: center;
  align-items:center;
  column-gap:0px;
  row-gap:0px;
}

.gridLayout .child{
  align-self:flex-start;
}
.container {
  display: flex;
  justify-content: baseline;
  align-items: center;
  gap:10px;
  flex-direction:column;
}

.container .child{
  align-self:flex-end;
}

 a{

    text-decoration: none; 
 
   
}
a:hover{
    background-color: rgb(159, 153, 153);
}

</style>