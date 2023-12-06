

<template>
  <div class="grid">
    <div class="boxes" v-auto-animate="{ duration: 500 }">
      <div
        class="box"
        v-for="number in numbers"
        :key="number"
        v-text="number"
      />
    </div>
  </div>
    <p> 40 sugas. 4 iespējamās bildes katrai sugai. Kopā 240 bildes. </p>
    <button @click="$emit('someEvent'); randomize();">Sākt Jaunu Spēli</button>
</template>

<script setup lang="ts">
import { vAutoAnimate } from '@formkit/auto-animate/vue'
import { ref, defineEmits} from "vue"

const emits = defineEmits(["someEvent"])

emits("someEvent");

const numbers = ref<number[]>(new Array(40).fill("").map((_, i) => i))
const randomize = () => {
  numbers.value.sort(() => (Math.random() > 0.5 ? 1 : -1))
}
</script>

<style scoped>
.grid{
  display:grid;
  grid-template-columns: 70%;
  align-items: center;
  justify-content: center;
}
@media (min-width:650px){
  .grid{
    grid-template-columns:40%;
  }
}
.boxes {
  display: flex;
  flex-wrap: wrap;
  margin: 2em -0.25em 2em -0.25em;
}

.box {
  box-sizing: border-box;
  width: calc(10% - 0.5em);
  margin: 0.25em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875em;
  font-weight: 300;
  aspect-ratio: 1;
  border: 1px solid var(--gray-l);
}
</style>