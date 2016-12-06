<template>
  <div class="page page-invest">
    <div class="content">
      <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <div class="aui-flex-col aui-flex-middle text-center">
          <div class="aui-flex-item-3">
            <p>直投</p>
          </div>
          <div class="aui-flex-item-3">
            <p>活期</p>
          </div>
          <div class="aui-flex-item-3">
            <p>定期</p>
          </div>
          <div class="aui-flex-item-3">
            <p>变现通</p>
          </div>
          <div class="aui-flex-item-3">
            <p>转让</p>
          </div>
        </div>
        <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
          <li class="bid-con" v-for="item in productList">
            <router-link :to="{name:'investDetail', params: {projectId: item.projectId}}">
            <h3 :id="item.projectId">{{ item.projectName | hideBorrowName(24) }}</h3>
            <div class="bid-info clearfix">
              <div class="apr-part pull-left">
                <h1 class="apr main-color">{{ item.apr.toFixed(2) }}<b>%</b></h1>
                <p>预期年化收益率</p>
              </div>
              <div class="time-part pull-left">
                <p>起投  <b>{{ item.lowestAccount }}元</b></p>
                <p v-if="item.timeType == 0">期限  <b>{{ item.timeLimit }}个月</b></p>
                <p v-if="item.timeType == 1">期限  <b>{{ item.timeLimit }}天</b></p>
              </div>
            </div>
            <div class="circle-area">
              <circle-progress :percent="item.remainAccount | scalesFun(item.account)" :diameter="90" :text-size="18" text-color="#f60" foreground-color="#F95A28" backgroundColor="#fff" text-format="{percent}" :line-width="4"></circle-progress>
            </div>
            </router-link>
          </li>
      </ul>
        <p v-show="loading" class="page-infinite-loading">
          加载中...
        </p>
    </div>

  </div>
</template>

<script>

  import CircleProgress from '../../components/ProgressCircle'
  import { productListAjax } from '../../ajax.config'

export default {
  name: 'page-invest',
  data () {
    return {
      productList: [],
      scales: 74,
      loading: false,
      allLoaded: false,
      wrapperHeight: 0,
      reqKeys: {
        page: 1,
        status: -1
      }
    }
  },
  mounted() {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    this.$http.jsonp(productListAjax, {'page.page': 1}).then((res) => {
      this.productList = res.body.resData.list
    })

  },
  methods: {
    loadMore() {
      this.loading = true;
       setTimeout(() => {
        this.$http.jsonp(productListAjax, {'page.page': 2}).then((res) => {
          this.productList.concat(res.body.resData.list)
        })
        // console.log(this.productList)
        this.loading = false;
       }, 500);
    }
  },
  components: {
    CircleProgress
  }
}
</script>

<style scoped>

  .aui-flex-col {height: .45rem;background:#fff;margin-bottom: .1rem;}
  .aui-flex-item-3 {width: 20%;}
  .aui-flex-item-3 p {color: #333; font-size: .14rem; margin-top: .05rem;}
  .data-info {margin-top: .1rem;height: .9rem; padding:.15rem;background:#fff;position: relative;}
  .data-info h4 {font-size: .14rem; color:#666; line-height: 1;}
  .data-info h2 {font-size: .28rem;margin-top: .1rem;}
  .data-info .btn-log {width: 1.03rem;color:#fff;text-align:center;font-size: .16rem; line-height: .33rem; position: absolute;right:.15rem;top:50%;border-radius:.33rem; margin-top:-.18rem;}
  .newbid {background:#fff;margin-top: .1rem;}
  .newbid h4 {line-height:.4rem;padding-left:.15rem; color: #333;}
  .newbid h4 span {color:#999;margin-left: .03rem; padding-left: .08rem;font-size: .12rem;}
  .bid-con {height: 1.34rem;padding:.15rem .15rem .18rem; background:#fff;position: relative;}
  .bid-con h3 {font-size: .15rem; color:#333;}
  .bid-con h3 span {width: .35rem; line-height: .14rem; border-radius: .14rem; border-width: 1px; border-style: solid; display: inline-block; margin-left: .05rem; font-size: .11rem; text-align:center;}
  .bid-info { margin-top: .28rem; }
  .apr-part .apr {font-size: .31rem; font-family: Arial; margin:-.05rem 0 .03rem 0; line-height:1;}
  .apr-part p {color:#666;}
  .apr-part .apr b {font-size: .16rem;}
  .circle-area {position: absolute; right: .1rem; top: .1rem;}
  .time-part {font-size: .14rem; color: #666; margin-left: .75rem;}
  .time-part p:first-child {margin-bottom: .1rem;}
  /*无限加载组件样式*/
  @component-namespace page {
    @component infinite {
      @descendent wrapper {
        margin-top: -1px;
        overflow: scroll;
      }

      @descendent loading {
        text-align: center;
        height: 50px;
        line-height: 50px;

        div {
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;
        }
      }
    }
  }
</style>
