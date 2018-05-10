<template>
<div style="margin-top:70px;">
    <div class="left-delete">
        <div class="move" @touchstart="_touchStart" @touchmove="_touchMove" @touchend="_touchEnd" :style="txtStyle">
        <ul>
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
        <div class="deleteIcon" :style="zIndex"  @click.prevent="deleteItem(index)"></div>
    </div>
    </div>
</template>

<script>
    export default {
        props: {
            index: Number
        },
        data() {
            return {
                startX: 0,       //触摸位置
                  moveX: 0,       //滑动时的位置
                  disX: 0,       //移动距离
                  txtStyle: '',
                delWidth: 200,
                top: '',
                zIndex: 'z-index:-1',
            }
        },
        methods: {
            _touchStart: function(ev) {
                ev = ev || event;
                if(ev.touches.length == 1){
                    // 手指按下的时候记录按下的位置
                    this.startX = ev.touches[0].clientX;
                    console.log(this.startX)
                }
            },
            _touchMove: function(ev) {
                ev = ev || event;
                if(ev.touches.length == 1) {
                    // 滑动过程中的实时位置
                    this.moveX = ev.touches[0].clientX
                    // 滑动过程中实时计算滑动距离
                    this.disX = this.startX - this.moveX;
                    // console.log('disX==>',this.disX)
                    // 如果是向右滑动或者只是点击，不改变滑动位置
                    if(this.disX < 0 || this.disX == 0) {
                        // console.log('没有移动');
                        this.txtStyle = "transform:translateX(0rem)";
                    }else if (this.disX > 0) {
                        this.txtStyle = "transform:translateX(-" + this.disX/100 + "rem)";
                        if (this.disX >= this.delWidth/100) {
                            this.txtStyle = "transform:translateX(-" + this.delWidth/100 + "rem)";
                            this.zIndex = "z-index:" + 10 + "rem";
                        }
                    }
                }
            },
            _touchEnd: function(ev) {
                if (event.changedTouches.length == 1) {
                    this.startX = 0;
                    this.zIndex = "z-index:" + -1 + "rem";
                    console.log(event.changedTouches[0].clientX)
                    // 手指移动结束后的水平位置
                    let endX = event.changedTouches[0].clientX;
                    // 触摸开始与结束,手指移动的距离
                    this.disX = this.startX - endX;
                    //如果距离小于删除按钮的1/2，不显示删除按钮
                }
            },
            deleteItem: function(index) {
               alert("123");
                this.$emit('deleteItem', index);
            }
        }
    }
</script>

<style>
    .left-delete{
        width:100%;
        height:100%;
        position:relative;
        z-index:2;
        background: green;
    }
    .move{
        position: relative;
    }
    .deleteIcon{
        width: 2rem;
        height:100%;
        position: absolute;
        right:0;
        top:0;
        background:red;
        background-size: contain;
    }
</style>
