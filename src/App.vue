<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
          <img alt="Marvel Logo" src="./assets/logo.png" width="150px" />
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

</style>
