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
    emit('image-to-parent',audioLink, mainURL, firstURL, secondURL, thirdURL,
    mainURLMedium,firstURLMedium,secondURLMedium,thirdURLMedium
     )
})
emits: ['image-to-parent']

const route = useRoute();
const birdId = route.params.id;
const audioLink = "/putni/putns"+birdId+"/audio.mp3";
const mainURL = "/putni/putns"+birdId+"/main_resize_large.webp"
const firstURL = "/putni/putns"+birdId+"/1_resize_large.webp"
const secondURL = "/putni/putns"+birdId+"/2_resize_large.webp"
const thirdURL = "/putni/putns"+birdId+"/3_resize_large.webp"

const mainURLMedium = "/putni/putns"+birdId+"/main_resize_medium.webp"
const firstURLMedium = "/putni/putns"+birdId+"/1_resize_medium.webp"
const secondURLMedium = "/putni/putns"+birdId+"/2_resize_medium.webp"
const thirdURLMedium = "/putni/putns"+birdId+"/3_resize_medium.webp"

</script>

<style>

</style>