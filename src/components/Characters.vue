<template lang="html">
  <div>
    <input class="search" placeholder="Search..." type="text" v-on:change="this.handler"/>
    <div class="card-container">
      <div class="card" :key="character.id" v-for="character in characters">
        <h3 class="title">{{character.name}}</h3>
        <img class="image" :src="character.thumbnail.path+'/portrait_medium.jpg'">
        <router-link :to="{ name:'character', params:{id: character.id} }">
          <button class="view">
            View
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Characters',
  mounted () {
    this.$store.dispatch('resetCharacters')
  },
  methods: {
    handler: function (e) {
      this.$store.dispatch('getCharacterByName', e.target.value)
    }
  },
  computed: {
    ...mapState({
      characters: state => state.characters
    })
  }
}
</script>

<style scoped lang="css">
.card-container {
  display: flex;
  flex-wrap: wrap;
  max-height: 100vh;
  justify-content: center;
}

.search {
  flex: 100% 0 0;
  height: 5vh;
  width: 40%;
  text-align: center;
  margin-bottom: 1vh;
}

.card {
  flex: 25% 0 0;
  height: 35%;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 1vh;
}

.image {
  margin: auto;
}

.view {
  flex: 1;
  border: 1px solid black;
  color: black;
  background-color: white;
  border-radius: 5px;
  padding: 1vh;
  width: 50%;
  margin-top: 1vh;
}
</style>
