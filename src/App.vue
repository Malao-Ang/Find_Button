<template>
<body>
  <Nav/>
  <router-view v-slot="{Component}">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
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
/* transition */
.route-enter-from{
  opacity: 0;
  transform: translateY(100px);
}

.route-enter-active{
  transition: all 0.3s ease-out;
}
.route-leave-to{
  opacity: 0;
  transform: translateY(-100px);
}
.route-leave-active{
    transition: all 0.3s ease-in;

}
</style>
