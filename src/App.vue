<template>

  <div id="app">
  <router-view></router-view>
    <div id="notification">  
        <ComNotification 
          :isCloseNotification="isCloseNotification" 
          @update:isCloseNotification="closeF"
        />
    </div>
    <!-- <ComLogin /> -->
  </div>
</template>


<script>
// import ComLogin from './Components/Login.vue'
import ComNotification from './Components/Notification.vue'


export default {
  data(){
    return {
      isCloseNotification: true,
    }
  }
  ,
  methods:{
    closeF(){
      this.isCloseNotification = false
    }
  },
  components:{
    // ComLogin,
    ComNotification
  }
};
</script>


<style>
 #notification{
  
 }
</style>
