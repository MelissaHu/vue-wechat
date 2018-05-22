<template>
  <div>
      <wc-header :MainTitle="chat"></wc-header>
      <div>
       <!-- <wc-chat></wc-chat> -->
       <wc-test></wc-test>
      </div>
    
      
  </div>



</template>
<script>
import Header from '../common/header'
import Footer from '../common/footer'
import Chat from './chat'
import Test from './test'
import { CellSwipe,CellGroup,Cell } from 'vant';
export default {
  name: 'App',
  components:{WcTest:Test,WcFooter:Footer,WcHeader:Header,WcChat:Chat,VanCellSwipe:CellSwipe,VanCellGroup:CellGroup,VanCell:Cell},
  data(){
    return{
      chat:'微信'
    }
  }
}

</script>
