<template>
    <div class="wc-switch-cell">
     
      <ul>
        <li @click="show = !show">
          <transition name="slide-fade">
          <div class="main-context">
           <div class="fl cell-img"><img src="http://tb1.bdstatic.com/tb/cms/ngmis/file_1453447545023.jpg" alt=""></div>
           <div class="cell-text">
              <div class="cell-name">上海前端交流群1 <span class="time fr">下午4:30</span></div>
              <p>扣费标准 <span class="fr mute"><i>铃</i></span></p>
           </div>
           </div>
           </transition>
           <div class="del" v-if="show">删除</div>
        </li>
         <li>
          <div class="main-context">
           <div class="fl cell-img"><img src="http://tb1.bdstatic.com/tb/cms/ngmis/file_1453447545023.jpg" alt=""></div>
           <div class="cell-text">
              <div class="cell-name">上海前端交流群2 <span class="time fr">下午4:30</span></div>
              <p>扣费标准 <span class="fr mute"><i>铃</i></span></p>
           </div>
           </div>
        </li>
      </ul>
     
    </div>
</template>

<script>
export default {
  data:function(){
    return {
     show:true
    }
   
  }
}
</script>


<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
