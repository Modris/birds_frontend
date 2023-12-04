<template>
<br> 


<div > 

   <span> Meklēšana: </span> <input v-model="searchText" @input="searchTextUpdated" placeholder="pēc vārda">
    <br><br> 

<table >
    <tr>
        <th>  </th>
        <th> Vārds </th>
        <!--<th> Angliski </th> -->
        <th> Saite </th>
    </tr>
    <tr v-for="item in itemSearched.items" >
        <td> {{ item.id }}</td>
        <td> {{ item.name }}</td>
       <!-- <td> {{ item.english_name }}</td> --> 
        <td> <router-link :to="item.link"> Saite </router-link></td>
    </tr>
</table>

<br>

</div>





</template>
<script setup>
import {reactive, computed, ref} from 'vue'

let searchText = ref('');

let itemList = reactive({
  items: [
    { id: 1, name: "Baltā Cielava", english_name: "White Wagtail", link: "/putns/1" },
    { id: 2, name: "Paugurknābja gulbis", english_name: "Mute Swan", link: "/putns/2" },
    { id: 3, name: "Ziemeļu gulbis", english_name: "Whooper Swan", link: "/putns/3" },
    { id: 4, name: "Meža pīle", english_name: "Mallard", link: "/putns/4" },
    { id: 5, name: "Ķīvīte", english_name: "Northern Lapwing", link: "/putns/5" },
    { id: 6, name: "Zivju gārnis", english_name: "Grey Heron", link: "/putns/6" },
    { id: 7, name: "Dzērve", english_name: "Common Crane", link: "/putns/7" },
    { id: 8, name: "Sudrabkaija", english_name: "(European) Herring Gull", link: "/putns/8" },
    { id: 9, name: "Lielais ķīris", english_name: "Black-headed Gull", link: "/putns/9" },
    { id: 10, name: "Peļu klijāns", english_name: "Common Buzzard", link: "/putns/10" },
    { id: 11, name: "Vistu vanags", english_name: "Eurasian Goshawk", link: "/putns/11" },
    { id: 12, name: "Dižraibais dzenis", english_name: "Great Spotted Woodpecker", link: "/putns/12" },
    { id: 13, name: "Melnā dzilna", english_name: "Black Woodpecker", link: "/putns/13" },
    { id: 14, name: "Lauku balodis", english_name: "Common Wood Pigeon", link: "/putns/14" },
    { id: 15, name: "Pilsētas balodis", english_name: "City Pigeon", link: "/putns/15" },
    { id: 16, name: "Mājas zvirbulis", english_name: "House Sparrow", link: "/putns/16" },
    { id: 17, name: "Lauku zvirbulis", english_name: "Eurasian Tree Sparrow", link: "/putns/17" },
    { id: 18, name: "Bezdelīga", english_name: "Barn Swallow", link: "/putns/18" },
    { id: 19, name: "Mājas čurkste", english_name: "Western House Martin", link: "/putns/19" },
    { id: 20, name: "Svīre", english_name: "Common Swift", link: "/putns/20" },
    { id: 21, name: "Melnais mežastrazds", english_name: "Eurasian Blackbird", link: "/putns/21" },
    { id: 22, name: "Sarkanrīklīte", english_name: "European Robin", link: "/putns/22" },
    { id: 23, name: "Svilpis", english_name: "Eurasian Bullfinch", link: "/putns/23" },
    { id: 24, name: "Paceplītis", english_name: "Eurasian Wren", link: "/putns/24" },
    { id: 25, name: "Zeltgalvītis", english_name: "Common Goldcrest", link: "/putns/25" },
    { id: 26, name: "Zilzīlīte", english_name: "Eurasian Blue Tit", link: "/putns/26" },
    { id: 27, name: "Lielā zīlīte", english_name: "Great Tit", link: "/putns/27" },
    { id: 28, name: "Erickiņš", english_name: "Common Redstart", link: "/putns/28" },
    { id: 29, name: "Melnais mušķērājs", english_name: "European Pied Flycatcher", link: "/putns/29" },
    { id: 30, name: "Dzilnītis", english_name: "Eurasian Nuthatch", link: "/putns/30" },
    { id: 31, name: "Mājas strazds", english_name: "Common Starling", link: "/putns/31" },
    { id: 32, name: "Sīlis", english_name: "Eurasian Jay", link: "/putns/32" },
    { id: 33, name: "Pelēkā vārna", english_name: "Hooded Crow", link: "/putns/33" },
    { id: 34, name: "Krauķis", english_name: "Rook", link: "/putns/34" },
    { id: 35, name: "Krauklis", english_name: "Common Raven", link: "/putns/35" },
    { id: 36, name: "Žagata", english_name: "Eurasian Magpie", link: "/putns/36" },
    { id: 37, name: "Brūnā čakste", english_name: "Red-backed Shrike", link: "/putns/37" },
    { id: 38, name: "Zaļžubīte", english_name: "European Greenfinch", link: "/putns/38" },
    { id: 39, name: "Žubīte", english_name: "Common Chaffinch", link: "/putns/39" },
    { id: 40, name: "Dzeltenā stērste", english_name: "Yellowhammer", link: "/putns/40" }
  ]
});

let itemSearched = ref(itemList);

function searchTextUpdated(){
    console.log(searchText.value)
    if(searchText.value === ''){
        return itemSearched = itemList;
    } else { 
        let filter =  itemList.items.filter(item => item.name.toLowerCase().includes(searchText.value.toLowerCase()));
        return itemSearched ={ items: filter};
        }
    }




</script>
<style scoped>
.flexbox{
    display:flex;
    justify-content: center;
    align-items: center;
    gap:0px;
}
th,td{
    padding:4px;
}

table{
    overflow-x:auto;
}

</style>