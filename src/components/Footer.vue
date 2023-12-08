<template>
    <footer>
        <div class="White1"> Kontakts: </div>
        <div> <a href="mailto:modris6000@gmail.com"> modris6000@gmail.com </a> </div>
        <div>   <a href="https://www.lob.lv/noderigi/materiali/">www.lob.lv </a> </div>
        <div>  <a href="http://www.putni.lv/"> putni.lv</a>  </div>
        <div>  <a href="https://ebird.org/region/LV?yr=all&m=&rank=hc"> ebird.org </a> </div>
        <div> <a href="https://dabasdati.lv/"> dabasdati.lv</a>  </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>


footer{
    width:100%;
    font-family: Arial;
    background-color: #000000;
background-image: linear-gradient(247deg, #000000 0%, #2c3e50 74%);
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    overflow:wrap;
}

footer a{
    display: block;
    padding:10px;
    color: #fff;
    line-height: 20px;
    font-size: 15px;
    text-decoration: none;
}

footer a:hover{
    background-color: #086e27;
}

.White1{
    color:green;
    font-size: 15px;
}
</style>