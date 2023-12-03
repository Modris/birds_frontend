<template>

    <nav>
        <div> <router-link to="/">Sākums</router-link> </div>
        <div><router-link to="/saraksts">Putnu Saraksts</router-link></div>

    </nav>



  

</template>

<script setup>



</script>

<style>

nav{
    width:100%;
    font-family: Arial;
    background-color:  #333;
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
}

nav a{
    display: block;
    padding: 0 10px;
    color: #fff;
    line-height: 60px;
    font-size: 20px;
    text-decoration: none;
}

nav a:hover{
    background-color: #086e27;
}


</style>