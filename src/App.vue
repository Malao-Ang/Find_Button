<template>
<body>
  <Nav/>
  <router-view></router-view>
  <!-- <Home/> -->

</body>
  
</template>
<script>
import Home from '@/views/Start.vue'
import Developer from './views/Developer.vue'
import Nav from './components/nav.vue'
export default {
  components:{
    Home,
    Developer,
    Nav
}
}
</script>
<style>
body {
  height:100vh;
	background-color: rgb(18, 16, 19);
}
#app {
  text-align: center;
  color: #fff;
}
router-link{
  color: rgb(13, 13, 13);
}
</style>
