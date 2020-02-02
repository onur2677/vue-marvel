<template lang="html">
    <div class="character-detail">
        <div class="name">
            {{character.name}}
        </div>
        <div class="image">
            <img :src="img" >
        </div>
        <div class="description">
            {{character.description || 'No Description'}}
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Character',
  mounted () {
    this.$store.dispatch('getCharacterById', this.$route.params.id)
  },
  computed: {
    ...mapState({
      character: state => state.character,
      img: state => state.img
    })
  }
}
</script>

<style scoped lang="css">
.character-detail {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin: auto;
}

.name {
  flex: 100% 0 0;
  font-size: 2em;
  margin-bottom: 1vh;
}
.description {
  flex: 75% 0 0;
  text-align: justify;
}
.image {
  flex: 25% 0 0;
}
</style>
