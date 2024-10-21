<template>

  <StartView msg="Starting..."/>
  <!-- <router-view/> -->
</template>

<script>
  import StartView from './views/startView/StartView.vue';

  export default {
    name:"App",
    components: {
      StartView
    }
  }
</script>

<style>
/* 全局样式 */
body, #app {
  text-align: center;
  margin: 0;
  padding: 0;
  background-color: #ffffff; /* 你想要的背景颜色 */
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard syntax */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}


</style>
