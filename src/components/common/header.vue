<template>     
         <van-nav-bar :title="MainTitle">
         <van-icon name="wcAdd" slot="right" />
        </van-nav-bar>
</template>

<script>
import {NavBar,Icon} from 'Vant'
export default {
    components:{
        VanNavBar:NavBar,VanIcon:Icon
    },
   props:['MainTitle'],
   data(){
       return{
        which_to_show:"chat"
       }
   }
  
}
</script>


<style scoped>
  .qq-header{
    height: 46px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: center;
    line-height: 46px;
    background: #38f!important;
  }
</style>