<template>
  <div>
    <span>
      <input type="text" v-model="data1" placeholder="firstValue">
      <input type="text" v-model="data2" placeholder="secondValue">
      <ul>
        <li><button @click="plusvalue()">+</button></li>
        <li><button @click="result()">=</button></li>
        <li><button @click="minusvalue()">-</button></li>
      </ul>    
    </span>
    {{this.$store.state.data1}}
  </div>
</template>

<script>
export default {
    data:()=>{
      return {
        
      }
    },
    methods: {
      plusvalue(){
        console.log('플러스')
        return this.$store.getters.plusvalue;
      },
      minusvalue(){
        console.log('마이너스')
      },
      result(){
        console.log('결과')
      }
    },
    computed: {
      data1: {
        get (){
          const stateData1 = this.$store.state.data1
          return stateData1
        },
        set (value1){
          this.$store.commit('updateData1',value1)
        }
      },
      data2: {
        get (){
          const stateData2 = this.$store.state.data2
          return stateData2
        },
        set (value2){
          this.$store.commit('updateData2',value2)
        }
      }
    }
}
</script>

<style>
li {
  list-style: none;
  display:inline-block;
}
</style>