<template>
<br> <br> 

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

  <br> 
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



</template>

<script setup>

import { ref } from 'vue';
import { useRoute} from 'vue-router';

const listItems = ref({});

const route = useRoute();
const birdId = route.params.id;

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



</style>