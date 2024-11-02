<template>
  <StartView msg="Starting..."/>
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
img {
  -webkit-user-drag: none;    /* 禁止全局拖动 */
  cursor: default;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

::-webkit-scrollbar {
  position: absolute;
  width: 0.1px;
  height: 0.1px;
}
::-webkit-scrollbar-button {
  width: 8px;
  height: 0;
}
::-webkit-scrollbar-track {
  background: 0 0;
}
::-webkit-scrollbar-thumb {
  background: #61a8df;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #37dace;
}
::-webkit-scrollbar-thumb:active {
  background-color: #17bbaf;
}

.divider {
  border-top: 1px solid #ccc; /* 分割线颜色和宽度 */
  margin-left: 10px;
  margin-right: 10px;
}

.ended_cell_bottom_cell_ellipsis {
  white-space: nowrap; /* 确保文本在一行内显示 */
  overflow: hidden; /* 超出容器部分的文本隐藏 */
  text-overflow: ellipsis; /* 超出部分显示为省略号 */
  max-width: 100%; /* 最大宽度限制 */
}

.content_hleft_vcenter {
    display: flex;
    justify-content: left;
    align-items: center; 
}


.content_hcenter_vcenter {
    display: flex;
    justify-content: center;
    align-items: center; 
}

.content_hright_vcenter {
    display: flex;
    justify-content: flex-end;
    align-items: center; 
}

.content_hleft_vtop {
    display: flex;
    justify-content: flex-end;
    align-items: top; 
}

</style>
