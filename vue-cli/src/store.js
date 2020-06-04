import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
    //state
    state: {
        header: 'Header',
        data1: '',
        data2: '',
        realdata1:'',
        realdata2:''
    },
    //mutations
    mutations: {
        updateData1(state, data1) {
            state.data1 = data1
        },
        updateData2(state, data2) {
            state.data2 = data2
        }
    },
    //actions
    actions:{
        
    },
    //getters
    getters:{
        plusvalue: (state,realdata1,realdata2) => {
            console.log(Number(state.data1) + Number(state.data2))
            realdata1 = Number(state.data1)
            realdata2 = Number(state.data2)

            const num = realdata1 + realdata2
            console.log(num)
            return num
        }
    }
})