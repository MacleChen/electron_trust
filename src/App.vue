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
  margin-top: 10px;
  height: 10px;
  border-top: 1px solid #eaebee; /* 分割线颜色和宽度 */
  margin-left: 10px;
  margin-right: 10px;
}

.dividerLittle {
  height: 0px;
  border-bottom: 1px solid #eaebee; /* 分割线颜色和宽度 */
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
    justify-content: left;
    align-items: top; 
}

.content_hcenter_vtop {
    display: flex;
    justify-content: center;
    align-items: flex-start; 
}

.content_hcenter_vbottom {
    display: flex;
    justify-content: center;
    align-items: flex-end; 
}

.global_main_blue_text_color {
  color: #0400f4;
}

.global_main_light_gray_bg_color {
  color: #f4f4f6;
}

.global_main_black_text_color {
  color: #21262f;
}

/* 全局的字体样式 */
.global_big_primary_black_text_style {
  font-size: 16px;
  font-weight: bold;
  color: #21262f;
}

.global_primary_black_text_style {
  font-size: 14px;
  font-weight: bold;
  color: #21262f;
}

.global_primary_gray_text_style {
  font-size: 14px;
  font-weight: bold;
  color: #868d9a;
}

.global_desciption_text_style {
  font-size: 12px;
  font-weight: 100;
  color: #868d9a;
}

.global_primary_blue_text_style {
  font-size: 14px;
  font-weight: bold;
  color: #0400f4;
}

.global_tip_gold_text_style {
  font-size: 10px;
  font-weight: 300;
  color: #d0a137;
}

.global_input_error_tip_text_style {
  font-size: 10px;
  font-weight: 300;
  color: red;
}

.global_flag_gray_text_style {
  background-color: #e2e2e2;
  border-radius: 3px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  font-size: 9px;
  font-weight: bolder;
  color: #868d9a;
}

.global_primary_button_div_style {
  background-color: #0400f4;
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
}

.custom-password-input .van-password-input__item {
  /* 设置您想要的背景颜色 */
  border: #f0f0f0 solid 1px;
  border-radius: 3px;
}

.no-border {
  border: none;
  outline: none;
  /* 根据需要添加其他样式，比如背景颜色等 */
}

.wors_last_ellipsis_three_points {
  text-overflow: ellipsis; 
  line-clamp: 1; 
  overflow: hidden;
  white-space: nowrap;
}


input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none;
  margin: 0; 
}
input[type=number] {
    -moz-appearance:textfield;
}
</style>
