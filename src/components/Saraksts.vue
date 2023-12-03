<template>
<br> 


<div > 

   <span> Meklēšana: </span> <input v-model="searchText" @input="searchTextUpdated">
    <br><br> 

<table >
    <tr>
        <th> ID </th>
        <th> Name </th>
        <th> Link </th>
    </tr>
    <tr v-for="item in itemSearched.items" >
        <td> {{ item.id }}</td>
        <td> {{ item.name }}</td>
        <td> {{ item.link }}</td>
    </tr>
</table>

<br>

<!--
    <div> 
        <table> 
            <tr> 
                <th> ID </th>
                <th> Putns</th>
            </tr>
            <tr>
                <td> 1</td>
                <td> <router-link to="/putns/1">Baltā Cielava</router-link> </td> 
            </tr>
            <tr>
                <td> 2</td>
                <td> <router-link to="/putns/2">Paugurknābja gulbis</router-link></td>
            </tr>
            <tr>
                <td> 3</td>
                <td> <router-link to="/putns/3">Ziemeļu gulbis</router-link> </td>
            </tr>
            <tr>
                <td> 4</td>
                <td> <router-link to="/putns/4">Meža pīle</router-link> </td>
            </tr>
            <tr>
                <td> 5</td>
                <td> <router-link to="/putns/5">Ķīvīte</router-link> </td>
            </tr>
            <tr>
                <td> 6</td>
                <td> <router-link to="/putns/6">Zivju gārnis</router-link> </td>
            </tr>
            <tr>
                <td> 7</td>
                <td> <router-link to="/putns/7">Dzērve</router-link> </td>
            </tr>
            <tr>
                <td> 8</td>
                <td> <router-link to="/putns/8">Sudrabkaija</router-link> </td>
            </tr>
            <tr>
                <td> 9</td>
                <td> <router-link to="/putns/9">Lielais ķīris</router-link> </td>
            </tr>
            <tr>
                <td> 10</td>
                <td> <router-link to="/putns/10">Peļu klijāns</router-link> </td>
            </tr>
            <tr>
                <td> 11</td>
                <td> <router-link to="/putns/11">Vistu vanags</router-link> </td>
            </tr>
            <tr>
                <td> 12</td>
                <td> <router-link to="/putns/12">Dižraibais dzenis</router-link> </td>
            </tr>
            <tr>
                <td> 13</td>
                <td> <router-link to="/putns/13">Melnā dzilna</router-link> </td>
            </tr>
            <tr>
                <td> 14</td>
                <td> <router-link to="/putns/14">Lauku balodis</router-link> </td>
            </tr>
            <tr>
                <td> 15</td>
                <td> <router-link to="/putns/15">Pilsētas balodis</router-link> </td>
            </tr>
            <tr>
                <td> 16</td>
                <td> <router-link to="/putns/16">Mājas zvirbulis</router-link> </td>
            </tr>
            <tr>
                <td> 17</td>
                <td> <router-link to="/putns/17">Lauku zvirbulis</router-link> </td>
            </tr>
            <tr>
                <td> 18</td>
                <td> <router-link to="/putns/18">Bezdelīga</router-link> </td>
            </tr>
            <tr>
                <td> 19</td>
                <td> <router-link to="/putns/19">Mājas čurkste</router-link> </td>
            </tr>
            <tr>
                <td> 20</td>
                <td> <router-link to="/putns/20">Svīre</router-link> </td>
            </tr>
        </table>
    </div>

    <div>
        <table> 
            <tr> 
                <th> ID </th>
                <th> Putns</th>
            </tr>
            <tr>
                <td> 21</td>
                <td> <router-link to="/putns/21">Melnais mežastrazds</router-link> </td>
            </tr>
            <tr>
                <td> 22</td>
                <td> <router-link to="/putns/22">Sarkanrīklīte</router-link></td>
            </tr>
            <tr>
                <td> 23</td>
                <td> <router-link to="/putns/23">Svilpis</router-link> </td>
            </tr>
            <tr>
                <td> 24</td>
                <td> <router-link to="/putns/24">Paceplītis</router-link> </td>
            </tr>
            <tr>
                <td> 25</td>
                <td> <router-link to="/putns/25">Zeltgalvītis</router-link> </td>
            </tr>
            <tr>
                <td> 26</td>
                <td> <router-link to="/putns/26">Zilzīlīte</router-link> </td>
            </tr>
            <tr>
                <td> 27</td>
                <td> <router-link to="/putns/27">Lielā zīlīte</router-link> </td>
            </tr>
            <tr>
                <td> 28</td>
                <td> <router-link to="/putns/28">Erickiņš</router-link> </td>
            </tr>
            <tr>
                <td> 29</td>
                <td> <router-link to="/putns/29">Melnais mušķērājs</router-link> </td>
            </tr>
            <tr>
                <td> 30</td>
                <td> <router-link to="/putns/30">Dzilnītis</router-link> </td>
            </tr>
            <tr>
                <td> 31</td>
                <td> <router-link to="/putns/31">Mājas strazds</router-link> </td>
            </tr>
            <tr>
                <td> 32</td>
                <td> <router-link to="/putns/32">Sīlis</router-link> </td>
            </tr>
            <tr>
                <td> 33</td>
                <td> <router-link to="/putns/33">Pelēkā vārna</router-link> </td>
            </tr>
            <tr>
                <td> 34</td>
                <td> <router-link to="/putns/34">Krauķis</router-link> </td>
            </tr>
            <tr>
                <td> 35</td>
                <td> <router-link to="/putns/35">Krauklis</router-link> </td>
            </tr>
            <tr>
                <td> 36</td>
                <td> <router-link to="/putns/36">Žagata</router-link> </td>
            </tr>
            <tr>
                <td> 37</td>
                <td> <router-link to="/putns/37">Brūnā čakste</router-link> </td>
            </tr>
            <tr>
                <td> 38</td>
                <td> <router-link to="/putns/38">Zaļžubīte</router-link> </td>
            </tr>
            <tr>
                <td> 39</td>
                <td> <router-link to="/putns/39">Žubīte</router-link> </td>
            </tr>
            <tr>
                <td> 40</td>
                <td> <router-link to="/putns/40">Dzeltenā stērste</router-link> </td>
            </tr>
        </table>


    </div>
-->

</div>





</template>
<script setup>
import {reactive, computed, ref} from 'vue'

let searchText = ref('');

let itemList = reactive({
  items: [
    { id: 1, name: "Baltā Cielava", link: "/putns/1" },
    { id: 2, name: "Paugurknābja gulbis", link: "/putns/2" },
    { id: 3, name: "Ziemeļu gulbis", link: "/putns/3" },
    { id: 4, name: "Meža pīle", link: "/putns/4" },
    { id: 5, name: "Ķīvīte", link: "/putns/5" },
    { id: 6, name: "Zivju gārnis", link: "/putns/6" },
    { id: 7, name: "Dzērve", link: "/putns/7" },
    { id: 8, name: "Sudrabkaija", link: "/putns/8" },
    { id: 9, name: "Lielais ķīris", link: "/putns/9" },
    { id: 10, name: "Peļu klijāns", link: "/putns/10" },
    { id: 11, name: "Vistu vanags", link: "/putns/11" },
    { id: 12, name: "Dižraibais dzenis", link: "/putns/12" },
    { id: 13, name: "Melnā dzilna", link: "/putns/13" },
    { id: 14, name: "Lauku balodis", link: "/putns/14" },
    { id: 15, name: "Pilsētas balodis", link: "/putns/15" },
    { id: 16, name: "Mājas zvirbulis", link: "/putns/16" },
    { id: 17, name: "Lauku zvirbulis", link: "/putns/17" },
    { id: 18, name: "Bezdelīga", link: "/putns/18" },
    { id: 19, name: "Mājas čurkste", link: "/putns/19" },
    { id: 20, name: "Svīre", link: "/putns/20" },
    { id: 21, name: "Melnais mežastrazds", link: "/putns/21" },
    { id: 22, name: "Sarkanrīklīte", link: "/putns/22" },
    { id: 23, name: "Svilpis", link: "/putns/23" },
    { id: 24, name: "Paceplītis", link: "/putns/24" },
    { id: 25, name: "Zeltgalvītis", link: "/putns/25" },
    { id: 26, name: "Zilzīlīte", link: "/putns/26" },
    { id: 27, name: "Lielā zīlīte", link: "/putns/27" },
    { id: 28, name: "Erickiņš", link: "/putns/28" },
    { id: 29, name: "Melnais mušķērājs", link: "/putns/29" },
    { id: 30, name: "Dzilnītis", link: "/putns/30" },
    { id: 31, name: "Mājas strazds", link: "/putns/31" },
    { id: 32, name: "Sīlis", link: "/putns/32" },
    { id: 33, name: "Pelēkā vārna", link: "/putns/33" },
    { id: 34, name: "Krauķis", link: "/putns/34" },
    { id: 35, name: "Krauklis", link: "/putns/35" },
    { id: 36, name: "Žagata", link: "/putns/36" },
    { id: 37, name: "Brūnā čakste", link: "/putns/37" },
    { id: 38, name: "Zaļžubīte", link: "/putns/38" },
    { id: 39, name: "Žubīte", link: "/putns/39" },
    { id: 40, name: "Dzeltenā stērste", link: "/putns/40" }
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