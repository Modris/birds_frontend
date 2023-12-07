

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
    <button class="bn41" @click="$emit('someEvent'); randomize();">Sākt Jaunu Spēli</button>
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

.bn41 {

background: radial-gradient(328px at 2.9% 15%, rgb(191, 224, 251) 0%, rgb(232, 233, 251) 25.8%, rgb(252, 239, 250) 50.8%, rgb(234, 251, 251) 77.6%, rgb(240, 251, 244) 100.7%);
color: #004953;
border-radius: 6px;
  box-sizing: border-box;
  height: 40px;
  font-size: 20px;
  font-weight: 600;
  padding: 4px;
  text-decoration: none;
  text-align:center;
  width: 225px;
}

</style>