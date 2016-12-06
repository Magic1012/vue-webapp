<template>
  <div class="page-tabbar">
    <rd-footer :value="activeType" fixed @click.native="handle()">
      <footer-item id="index" >
        <img slot="icon" src="../assets/images/public/tabbar/tab_home_n.png">
        <img slot="iconActive" src="../assets/images/public/tabbar/tab_home_s.png">
        <div class="mint-tab-item-label">首页</div>
      </footer-item>
      <footer-item id="invest" >
        <img slot="icon" src="../assets/images/public/tabbar/tab_product_n.png">
        <img slot="iconActive" src="../assets/images/public/tabbar/tab_product_s.png">
        <div class="mint-tab-item-label">投资</div>
      </footer-item>
      <footer-item id="toast">
        <img slot="icon" src="../assets/images/public/tabbar/tab_me_n.png">
        <img slot="iconActive" src="../assets/images/public/tabbar/tab_me_s.png">
        <div class="mint-tab-item-label">我的</div>
      </footer-item>
      <footer-item id="demo">
        <img slot="icon" src="../assets/images/public/tabbar/tab_asset_n.png">
        <img slot="iconActive" src="../assets/images/public/tabbar/tab_asset_s.png">
        <div class="mint-tab-item-label">更多</div>
      </footer-item>
    </rd-footer>
  </div>
</template>

<script>

  import RdFooter from '../components/tabbar/Tabbar'
  import FooterItem from '../components/tabbar/TabItem'
  // import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'page-tabbar',
    data () {
      return {
        activeType: 'index'
      }
    }, // store 针对多个组件使用才合适，不然就大材小用了
//    computed: {
//      ...mapGetters({
//        activeType: 'activeType'
//      })
//    },
//    computed: mapGetters([
//      'activeType'
//    ]),
    mounted() {
      self = this
      this.$on("rd-tabItem-click", (id) => {
        this.$router.push(`/${id}`)
        self.$data.activeType = id + ''
        sessionStorage.setItem('activeType', id)
        // this.$store.dispatch('changeActiveType', id)
      })
      let routeName = this.$route.path.split('/')[1];
      if(routeName == ''){
        this.activeType = 'index';
        sessionStorage.setItem('activeType', 'index')
      }
      let se_activeType  = sessionStorage.getItem('activeType')
      if(se_activeType ){
        this.activeType = se_activeType;
      }
    },
    watch: {
      '$route': function(to, from){
//        if(to.name == 'home'){
//          this.activeType = 'index';
//          sessionStorage.setItem('activeType', 'index')
//        }
//        else {
//          this.activeType = to.name;
//          sessionStorage.setItem('activeType', to.name)
//        }
      }
    },
    methods: {
      handle(){
        // console.log(this.activeType)
      }
    },
    components: { RdFooter, FooterItem }
  }
</script>

<style scoped>
  @import "../assets/scss/var.scss";
  .mint-tabbar {background: #fff;}
  .mint-tabbar > .mint-tab-item.is-selected {
    background-color: #fff;
    color: $main-color;
  }

</style>
