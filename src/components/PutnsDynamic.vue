<!--/putns/1 -> /putns/40 folders. It will choose which images to display 
dynamically based on routerId.

This Component DEPENDS on Putns.vue component. More specifically the :id section so it can choose
putns1-40 folder. -->

<template>
<!-- 
        <img name="test" :src="mainURL"/>

        <img name="test2" :src="firstURL"/>
    -->
</template>

<script setup>

import { ref, onMounted } from 'vue';
import { useRoute} from 'vue-router';

const emit = defineEmits('image-to-parent')
onMounted( () => {
    emit('image-to-parent', mainURL, firstURL, secondURL, thirdURL)
})
const route = useRoute();
const birdId = route.params.id;

const mainURL = "../src/assets/putni/putns"+birdId+"/main_resize_medium.webp"
const firstURL = "../src/assets/putni/putns"+birdId+"/1_resize_medium.webp"
const secondURL = "../src/assets/putni/putns"+birdId+"/2_resize_medium.webp"
const thirdURL = "../src/assets/putni/putns"+birdId+"/3_resize_medium.webp"

</script>

<style>

</style>