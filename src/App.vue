<template>
  <div >
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <rd-footer v-if="$route.path =='/' || $route.path =='/index' || $route.path =='/invest' || $route.path =='/toast' || $route.path =='/demo' "></rd-footer>
  </div>
</template>

<script>

import RdFooter from './views/footer.vue'
  export default {
    data(){
      return {
        transitionName: 'slide-right'
      }
    },
    // dynamically set transition based on route change
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        const toPath = to.path.split('/')[1];
        const fromPath = from.path.split('/')[1];
        let toPath_flag = 0;
        let fromPath_flag = 0;
        if(toPath == 'index' || toPath == 'invest' || toPath == 'toast' || toPath == 'demo'){
          toPath_flag = 1
        }
        if(fromPath == 'index' || fromPath == 'invest' || fromPath == 'toast' || fromPath == 'demo'){
          fromPath_flag = 1
        }

        if(toPath_flag * fromPath_flag){
          this.transitionName = 'fade'
        }
        else{
          console.log(toDepth, fromDepth)
          this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
        }

      }
    },
    components: { RdFooter }
  }
</script>

<style>
@reset-global mobile;
@import './assets/css/app.css';

html, body {
  background-color: #fafafa;
  -webkit-overflow-scrolling: touch;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
}

a {
  color: inherit;
}
.page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  z-index: 1;
  background: $page-bg;
}
.content {
  margin-bottom: 50px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.page-back {
  display: inline-block;
  position: absolute 12px * * 10px;
  width: 40px;
  height: 40px;
  text-align: center;
  i {
    font-size: 24px;
    line-height: 40px;
  }
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #fff;
  color: $main-color;
}
.fade-enter-active, .fade-leave-active {
  transition: all .2s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.slide-right-enter-active,.slide-left-enter-active,.slide-right-leave-active,.slide-left-leave-active {
  transition: all .6s;
}
.slide-right-enter, .slide-left-leave-active {
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-enter, .slide-right-leave-active{
  transform: translateX(-100%);
}


</style>
