<template>

<div id="container">
    <nav>
        <ul>
            <li><a href="#">Sākums</a></li>
            <li><a href="#">Zvirbuļi ▼</a>
            <!-- First Tier Drop Down -->
            <ul>
 
                <li><a href="#">Pilsētā ►</a>
            	<!-- Second Tier Drop Down -->
                <ul>
                    <li> <router-link to="/putns/16">Mājas zvirbulis</router-link></li>
                    <li><router-link to="/putns/3">Ziemeļu gulbis</router-link></li>

                    <li><router-link to="/putns/4">Meža pīle</router-link> </li>
                </ul>
                </li>

                <li><a> Laukos ► </a>
                    <ul>
                        <li> <router-link to="/putns/16">Mājas zvirbulis</router-link></li>
                        <li><router-link to="/putns/3">Ziemeļu gulbis</router-link></li>

                        <li><router-link to="/putns/4">Meža pīle</router-link> </li>
                    </ul>
                </li>
                
              
                <li><a>Mežā ►</a>
                    <ul>
                        <li> <router-link to="/putns/16">Mājas zvirbulis</router-link></li>
                        <li><router-link to="/putns/3">Ziemeļu gulbis</router-link></li>

                        <li><router-link to="/putns/4">Meža pīle</router-link> </li>
                    </ul>
                
                </li>

            </ul>
            </li>
   <!-- End of component -->
            <li><a href="#">WordPress</a>
            <!-- First Tier Drop Down -->
            <ul>
                <li><a href="#">Themes</a></li>
                <li><a href="#">Plugins</a></li>
                <li><a href="#">Tutorials</a></li>
            </ul>        
            </li>
      <!-- End of component -->

            <li><a href="#">WordPress</a>
            <!-- First Tier Drop Down -->
            <ul>
                <li><a href="#">Themes</a></li>
                <li><a href="#">Plugins</a></li>
                <li><a href="#">Tutorials</a></li>
            </ul>        
            </li>
   <!-- End of component -->
            <li><a href="#">WordPress</a>
            <!-- First Tier Drop Down -->
            <ul>
                <li><a href="#">Themes</a></li>
                <li><a href="#">Plugins</a></li>
                <li><a href="#">Tutorials</a></li>
            </ul>        
            </li>


        </ul>
    </nav>
    </div><!--End HTML Code-->


  

</template>

<script setup>

</script>

<style>

 /* Navbar container */
 .navbar {
  overflow: hidden;
  background-color: #333;
  font-family: Arial;
}

/* Links inside the navbar */
.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

nav{
    background-color: #1289dd;
}
nav ul {
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
}
nav ul li{
    display: inline-block;
    background-color: #1289dd;
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
    width: 170px;
    float: none;
    display: list-item;
    position: relative;

}

/* ============ Second, Third and More Tiers ===========*/
nav ul ul ul li {
    position: relative;
    top: -60px;
    left: 170px;
}


.buttonDrop{
 float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

</style>