<template>
<div class = "box1"> 


    
        <span class="title1"> Pazīmes </span>
 
        <ul> 
            <li v-for="item in listItems"> ❀{{  item }}</li>
        </ul>
  
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute} from 'vue-router';
const route = useRoute();
const birdId = route.params.id;
const listItems = ref({});

/*
async function getData() {
    try{
 // const res = await fetch('http://localhost:8080/details/birds/'+birdId);
 const res = await fetch('https://birds-backend.fly.dev/details/birds/'+birdId);
  const finalRes = await res.json();
  listItems.value = finalRes;
    } catch (error){
        // error not yet handled.
        console.log("Error fetching data from the backend "+error);
    }
    
}
// This only fetched once.
getData(); */

const retry = (fn, retriesLeft = 5, interval = 1000) => {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch(error => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error);
            return;
          }
          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
};
/* retry(() => fetch('https://birds-backend.fly.dev/details/birds/'+birdId)) */ 
retry(() => fetch('https://ziniputnu.lv/api/details/birds/'+birdId))
  .then(response => response.json())
  .then(json =>  listItems.value = json)
  .catch(error => console.log(error));
</script>

<style>
.title1{
    font-size:30px;
    font-style:arial;
    font-weight:bold;
    background-color: #B9D9EB;
    padding: 5px;
}
span + ul {
    margin-top: 0px;
}
.box1{
    font-size:20px;
    display:grid;
    grid-template-columns: 80% ;
    justify-content: center;
    align-items:center;
}

@media (min-width: 750px){
    .box1{
        grid-template-columns: 42%;
    }
}

ul {
    display: flex;
    flex-grow:0;
    list-style-type: none;
    flex-wrap: wrap;    
    gap: 10px;
    height:auto;
    justify-content: center;
    align-items:center;
    background-color: #f2f2f2;
    padding: 5px;
    margin: 5px 0; 
}



</style>