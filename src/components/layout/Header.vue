<template>
  <header>
    <h1><router-link to="/"><img alt="Vue logo" src="../../assets/logo3.png" width="100"></router-link></h1>
    <div class="menuWrap">
      <ul class="menu">
        <li><router-link to="/login">외부API</router-link></li>
        <li><router-link to="/hello">HelloAPI</router-link></li>
        <li><router-link to="/board/list">게시판</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
    name: "Header",
}
</script>

<style scoped>
header{width:100%; text-align:center; position:relative; height:100px; border-bottom:1px solid #C4A4B0}
img{ padding:10px 10px;float:right;}
header h1{position:absolute; top:0; left:50px;}
header ul.menu:after{display:block; clear:both; content:'';}
header ul.menu{position:absolute; top:20px; right:50px;}
header ul.menu li{float:left; padding:10px 20px; list-style:none; font-weight: bold;}

a{text-decoration:none; color:#333;}
</style>