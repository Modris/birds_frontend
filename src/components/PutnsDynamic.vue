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
    emit('image-to-parent',audioLink, mainURL, firstURL, secondURL, thirdURL, mainURLSmall, firstURLSmall, secondURLSmall, thirdURLSmall  )
})
emits: ['image-to-parent']

const route = useRoute();
const birdId = route.params.id;
const audioLink = "../src/assets/putni/putns"+birdId+"/audio.mp3";
const mainURL = "../src/assets/putni/putns"+birdId+"/main_resize_medium.webp"
const firstURL = "../src/assets/putni/putns"+birdId+"/1_resize_medium.webp"
const secondURL = "../src/assets/putni/putns"+birdId+"/2_resize_medium.webp"
const thirdURL = "../src/assets/putni/putns"+birdId+"/3_resize_medium.webp"

const mainURLSmall = "../src/assets/putni/putns"+birdId+"/main_resize_small.webp"
const firstURLSmall = "../src/assets/putni/putns"+birdId+"/1_resize_small.webp"
const secondURLSmall = "../src/assets/putni/putns"+birdId+"/2_resize_small.webp"
const thirdURLSmall = "../src/assets/putni/putns"+birdId+"/3_resize_small.webp"

</script>

<style>

</style>