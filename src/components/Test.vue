<template>
    <br><br>
    <div class="angry-grid">
  <div class="spanAll">testaaaaa;</div>
  <div class="bottomLeft">testaaaaa;</div>
  <div class="bottomRight">testaaaaa;</div>
</div>
</template>

<style>
.angry-grid {
   display: grid; 
   grid-template-columns: 29% 29% 29%;
   grid-template-rows: 20% 20% 20%;
   row-gap:150px;
   justify-content: center;
}
.spanAll {

   background-color: #E9B55B; 
   grid-row-start: 1;
   grid-column-start: 1;

   grid-row-end: 4;
   grid-column-end: 4;
}

.bottomLeft{
 grid-area:3/1 /3/1;
 background-color:Green;
}
.bottomRight{
  grid-area:3/3 /3/3;
 background-color:Green;
}
</style>