<template>
<br> 
<div >
<!-- Teting jsonDynamic with birdId. it works. commented for tomorrow coding.
  <div v-if="jsonDynamic != null"> 
      <span>  Main Author: {{ jsonDynamic[0]['Author'] }}</span><br>
      <span>  Source: {{ jsonDynamic[0]['Source'] }}</span><br>
      <span>  Date: {{ jsonDynamic[0]['Date'] }}</span><br>
      <span>  Location: {{ jsonDynamic[0]['Location'] }}</span><br>
      <span>  Country: {{ jsonDynamic[0]['Country'] }}</span><br>
      <br> <br> 

      <span>  1 Author: {{ jsonDynamic[1]['Author'] }}</span><br>
      <span>  Source: {{ jsonDynamic[1]['Source'] }}</span><br>
      <span>  Date: {{ jsonDynamic[1]['Date'] }}</span><br>
      <span>  Location: {{ jsonDynamic[1]['Location'] }}</span><br>
      <span>  Country: {{ jsonDynamic[1]['Country'] }}</span><br>
      <br> <br> 
      <span>  2 Author: {{ jsonDynamic[2]['Author'] }}</span><br>
      <span>  Source: {{ jsonDynamic[2]['Source'] }}</span><br>
      <span>  Date: {{ jsonDynamic[2]['Date'] }}</span><br>
      <span>  Location: {{ jsonDynamic[2]['Location'] }}</span><br>
      <span>  Country: {{ jsonDynamic[2]['Country'] }}</span>
      <br> <br> 
      <span>  3 Author: {{ jsonDynamic[3]['Author'] }}</span> <br> 
      <span>  Source: {{ jsonDynamic[3]['Source'] }}</span> <br>
      <span>  Date: {{ jsonDynamic[3]['Date'] }}</span> <br>
      <span>  Location: {{ jsonDynamic[3]['Location'] }}</span> <br>
      <span>  Country: {{ jsonDynamic[3]['Country'] }}</span> <br>
      <br> <br> 

      <span>  Audio Author: {{ jsonDynamic[4]['Author'] }}</span> <br> 
      <span>  Source: {{ jsonDynamic[4]['Source'] }}</span> <br>
      <span>  Date: {{ jsonDynamic[4]['Date'] }}</span> <br>
      <span>  Location: {{ jsonDynamic[4]['Location'] }}</span> <br>
      <span>  Country: {{ jsonDynamic[4]['Country'] }}</span> <br>
      <br> 

  </div>
--> 
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

import { ref, onMounted } from 'vue';
import { useRoute} from 'vue-router';
import PutnsDynamic from  '../components/PutnsDynamic.vue'


const route = useRoute();
const birdId = route.params.id;
import jsonData from  "../assets/putni/source/source_putnsAllCompressed.json";

console.log(jsonData)

const jsonDynamic = jsonData[birdId];
console.log(jsonDynamic)
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

.box {
  display: flex;
  justify-content: space-between;
}

</style>