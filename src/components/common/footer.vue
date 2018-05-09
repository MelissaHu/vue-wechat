<template>
   <div style="border-top:1px solid #d2d2d2;">
   <van-tabbar v-model="active">
   <van-tabbar-item icon="wc-chat">微信</van-tabbar-item>
   <van-tabbar-item icon="wc-contact">通讯录</van-tabbar-item>
   <van-tabbar-item icon="find">发现</van-tabbar-item>
   <van-tabbar-item icon="me">我</van-tabbar-item>
</van-tabbar>
   </div>
</template>
<script>
import { Tabbar,TabbarItem} from 'vant';
export default {
    components:{
        VanTabbar:Tabbar,VanTabbarItem:TabbarItem},
  data() {
    return {
      active: 0
    }
  }
}
</script>
