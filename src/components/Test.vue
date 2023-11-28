<template>
    
    <h3> Testing how to plug in components </h3>
    
    <li v-for="transaction in transactions" :key="transaction.id"> 
    {{transaction.text}} <span> {{ transaction.amount }}  </span>
    </li>
</template>

<script setup>

import {defineProps} from 'vue'

const props = defineProps({
    transactions:{
        type: Array,
        required: true,
    }
})

</script>