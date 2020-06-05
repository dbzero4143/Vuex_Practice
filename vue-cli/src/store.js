import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
    //state
    state: {
        header: 'Header',
        data1:'',
        data2:'',
        plusdata3:null,
        plusdata4:null,
        minusdata3:null,
        minusdata4:null
    },
    //mutations
    mutations: {
        updateData1 (state,message){
            state.data1 = message
        },
        updateData2 (state,message){
            state.data2 = message
        },
        plusdata3commit(state){
            state.plusdata3 = state.data1
            state.minusdata3 = 0
        },
        plusdata4commit(state){
            state.plusdata4 = state.data2
            state.minusdata4 = 0
        },
        minusdata3commit(state){
            state.minusdata3 = state.data1
            state.plusdata3 = 0;
        },
        minusdata4commit(state){
            state.minusdata4 = state.data2
            state.plusdata4 = 0;
        }
    },
    //actions
    actions:{
        
    },
    //getters
    getters:{
        plusvalue(state) {
            return Number(state.plusdata3)+Number(state.plusdata4)
        },
        minusvalue(state) {
            return Number(state.minusdata3)-Number(state.minusdata4)
        }
    }
})