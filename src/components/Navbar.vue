<template>

    <nav>
        <ul>
            <li><router-link to="/">Sākums</router-link></li>
            <li><router-link to="/saraksts">Putnu Saraksts</router-link></li>
        </ul>
    </nav>



  

</template>

<script setup>



</script>

<style>

nav{
    width:100%;
    font-family: Arial;
    background-color:  #333;
}
nav ul {
    box-sizing: border-box;
    top: 0;
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
    margin-top: 0;
}
nav ul li{
    display: inline-block;
    background-color:#333;
}
nav a{
    display: block;
    padding: 0 10px;
    color: #fff;
    line-height: 60px;
    font-size: 20px;
    text-decoration: none;
}
/* Hide Dropdown by Default*/
nav ul ul {
    display: none;
    position: absolute;
    top: 60px;
}
/* hover */
nav a:hover{
    background-color: #000000;
}
/* Display Dropdown on Hover */
nav ul li:hover > ul {
    display: inherit;
}
/* Fisrt Tier Dropdown */
nav ul ul li{
    left:-55px;
    width: 190px;
    float: none;
    display: list-item;
    position: relative;

}

/* ============ Second, Third and More Tiers ===========*/
nav ul ul ul li {
    position: relative;
    top: -60px;
    left: 190px;
    width: 250px;
}


.buttonDrop{
 float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Apply background color to the first level when hovering the second level */
nav ul li:hover > ul {
    display: inherit;
}

/* Background color for the first level when hovering the second level */
nav ul li:hover {
    background-color:  #000000; 
}

</style>