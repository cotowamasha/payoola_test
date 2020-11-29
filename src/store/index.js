import Vue from 'vue'
import Vuex from 'vuex'
import data from '../../db.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    pageNumber: 0,
    count: 9,
    toBig: 0
  },
  mutations: {
    GET_DATA_LIST (state) {
      state.list = data
    },
    SET_PAGE_COUNT (state, num) {
      state.pageNumber = num
    },
    NEXT_PAGE (state) {
      state.pageNumber++
    },
    PREV_PAGE (state) {
      state.pageNumber--
    },
    SORT_LIST (state) {
      if (state.toBig) {
        state.toBig = 0
        state.list = state.list.sort((a, b) => {
          a = a.date.split('.')
          a = [a[1], a[0]].concat(a.splice(2, a.length)).join('.')
  
          b = b.date.split('.')
          b = [b[1], b[0]].concat(b.splice(2, b.length)).join('.')
  
          return new Date(a) - new Date(b)
        })
      } else {
        state.toBig = 1
        state.list = state.list.sort((a, b) => {
          a = a.date.split('.')
          a = [a[1], a[0]].concat(a.splice(2, a.length)).join('.')
  
          b = b.date.split('.')
          b = [b[1], b[0]].concat(b.splice(2, b.length)).join('.')
  
          return new Date(b) - new Date(a)
        })
      }
    }
  },
  getters: {
    getPaginationData: state =>  {
      const start = state.pageNumber * state.count,
        end = start + state.count;
      return state.list.slice(start, end);
    },
    getPagesCount: state => {
      return Math.ceil(state.list.length/state.count)
    }
  }
})
