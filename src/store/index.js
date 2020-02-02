import Vue from 'vue'
import Vuex from 'vuex'
import { getCharacterByName, getCharacterById } from '@/api/marvel'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    character: {},
    img: ''
  },
  mutations: {
    getCharacterByName: async function (state, name) {
      const response = await getCharacterByName(name)
      if (response.status === 200) {
        state.characters = response.data.data.results
      }
    },
    getCharacterById: async function (state, id) {
      const response = await getCharacterById(id)
      if (response.status === 200) {
        state.character = response.data.data.results[0]
        state.img = `${state.character.thumbnail.path}/standard_xlarge.jpg`
      }
    },
    resetCharacters: function (state) {
      state.characters = []
    }
  },
  actions: {
    getCharacterByName: (context, name) => context.commit('getCharacterByName', name),
    getCharacterById: (context, id) => context.commit('getCharacterById', id),
    resetCharacters: context => context.commit('resetCharacters')
  },
  modules: {
  }
})
