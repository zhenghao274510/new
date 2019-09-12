<template>
  <div id="app">

    <foot-share v-if="$route.meta.showshare"></foot-share>
    <router-view/>
  </div>
</template>

<script>
import footShare from './components/public/foot'
// import shareMa from './components/public/erwma'
export default {
  name: 'App',
  components:{
    footShare,
    // shareMa
  }
  
}
</script>

<style>
@import url('../static/css/commont.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
