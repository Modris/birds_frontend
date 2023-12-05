<template>

    <nav>
        <div> <router-link to="/">Sākums</router-link> </div>
        <div class = "flexbox"> 
            <div><router-link to="/saraksts">Putnu Saraksts</router-link></div>
            <div><router-link to="/spele">Atmiņas Spēle</router-link></div>
        </div>
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
    overflow:wrap;
}
.flexbox{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    overflow:wrap;
}
@media (min-width:400px){
    .flexbox{
        flex-direction:row;
    }
}
nav a{
    display: block;
    padding:10px;
    color: #fff;
    line-height: 30px;
    font-size: 20px;
    text-decoration: none;
}

nav a:hover{
    background-color: #086e27;
}


</style>