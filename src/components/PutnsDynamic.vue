<!--/putns/1 -> /putns/40 folders. It will choose which images to display 
dynamically based on routerId.

This Component DEPENDS on Putns.vue component. More specifically the :id section so it can choose
putns1-40 folder. -->

<template>

</template>

<script setup>

import { ref, onBeforeMount } from 'vue';
import { useRoute} from 'vue-router';


const emit = defineEmits(['image-to-parent'])

onBeforeMount( () => {
    emit('image-to-parent',audioLink, mainURL, firstURL, secondURL, thirdURL  )
})
emits: ['image-to-parent']

const route = useRoute();
const birdId = route.params.id;
const audioLink = "../src/assets/putni/putns"+birdId+"/audio.mp3";
const mainURL = "../src/assets/putni/putns"+birdId+"/main_resize_large.webp"
const firstURL = "../src/assets/putni/putns"+birdId+"/1_resize_large.webp"
const secondURL = "../src/assets/putni/putns"+birdId+"/2_resize_large.webp"
const thirdURL = "../src/assets/putni/putns"+birdId+"/3_resize_large.webp"



</script>

<style>

</style>