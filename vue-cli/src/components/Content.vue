<template>
  <div>
    <span>
      <input type="text" :value="data1" @input="updateData1" placeholder="firstValue">
      <input type="text" :value="data2" @input="updateData2" placeholder="secondValue">
      <ul>
        <li><button @click="plusvalue()">+</button></li>
        <li><button @click="minusvalue()">-</button></li>
      </ul>    
    </span>
    {{this.$store.getters.plusvalue}}
    {{this.$store.getters.minusvalue}}
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    data:()=>{
      return {

      }
    },
    methods: {
      plusvalue(){
        console.log('플러스')
        console.log(this.data1)
        this.$store.commit('plusdata3commit', this.plusdata3)
        this.$store.commit('plusdata4commit', this.plusdata4)
      },
      minusvalue(){
        console.log('마이너스')
        this.$store.commit('minusdata3commit', this.minusdata3)
        this.$store.commit('minusdata4commit', this.minusdata4)
      },
      updateData1(e){
        this.$store.commit('updateData1', e.target.value)
      },
      updateData2(e){
        this.$store.commit('updateData2', e.target.value)
      }
    },
    computed: {
      ...mapState(['data1','data2','plusdata3','plusdata4','minusdata3','minusdata4'])
    }
}
</script>

<style>
li {
  list-style: none;
  display:inline-block;
}
</style>