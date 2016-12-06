<template>
  <div class="page page-index">
    <div class="content">
      <div id="banner">
        <mt-swipe :auto="0">
          <mt-swipe-item v-for="banner in bannerList">
            <router-link to="/">
            <!--<img src="../assets/images/index/banner.png">-->
              <img :src="banner.picPath">
            </router-link>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="aui-flex-col aui-flex-middle text-center">
        <div class="aui-flex-item-3">
          <img src="../assets/images/index/home_icon_reserve.png" />
          <p>预约借款</p>
        </div>
        <div class="aui-flex-item-3">
          <img src="../assets/images/index/home_icon_data.png" />
          <p>平台数据</p>
        </div>
        <div class="aui-flex-item-3">
          <img src="../assets/images/index/home_icon_safety.png" />
          <p>安全保障</p>
        </div>
        <div class="aui-flex-item-3">
          <img src="../assets/images/index/home_icon_invitation.png" />
          <p>邀请有礼</p>
        </div>
      </div>
      <div class="data-info">
        <h4>平台累计投资金额(元)</h4>
        <h2 class="main-color font-arial">{{ investTotal | currency('',2)}}</h2>
        <router-link :to="{path: '/login'}">
          <div class="btn-log main-btn-bg">注册/登录</div>
        </router-link>
      </div>
      <div class="newbid">
        <h4 class="aui-border-b">新客专享 <span class="aui-border-l">放心首选</span></h4>
        <ul>
          <li class="bid-con" v-for="item in newerBidList">
            <router-link :to="{name:'investDetail', params: {projectId: item.projectId}}">
            <h3>{{ item.projectName | hideBorrowName(24) }} <span class="main-border-color main-color">新客</span></h3>
            <div class="bid-info clearfix">
              <div class="apr-part pull-left">
                <h1 class="apr main-color">{{ item.apr.toFixed(2) }}<b>%</b></h1>
                <p>预期年化收益率</p>
              </div>
              <div class="time-part pull-left">
                <p>起投  <b>{{ item.lowestAccount }}元</b></p>
                <p v-if="item.timeTypec == 0">期限  <b>{{ item.timeLimit }}个月</b></p>
                <p v-if="item.timeType == 1">期限  <b>{{ item.timeLimit }}天</b></p>
              </div>
            </div>
            <div class="circle-area">
              <circle-progress :percent="item.remainAccount | scalesFun(item.account)" :diameter="90" :text-size="18" text-color="#f60" foreground-color="#F95A28" backgroundColor="#fff" text-format="{percent}" :line-width="4"></circle-progress>
            </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="newbid recommand">
        <h4 class="aui-border-b">理财精选 <span class="aui-border-l">推荐购买</span></h4>
        <ul>
          <li class="bid-con" v-for="item in recommandBidList">
            <router-link :to="{name:'investDetail', params: {projectId: item.projectId}}">
            <h3>{{ item.projectName | hideBorrowName(24) }}</h3>
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
      </div>
    </div>
  </div>
</template>

<script>
  import CircleProgress from '../components/ProgressCircle'
  import { bannerAjax, investTotalAjax, recommandProjectAjax } from '../ajax.config'
export default {
  name: 'page-index',
  data () {
    return {
      bannerList: [],
      scales: 0,
      investTotal: 0,
      newerBidList:[],
      recommandBidList: []
    }
  },
  mounted(){
    this.$http.jsonp(bannerAjax).then((res) => {
      this.bannerList = res.body.resData.list;
    })
    this.$http.jsonp(investTotalAjax, {emulateHTTP: true}).then((res) => {
      this.investTotal = res.body.resData.investTotal;
    })
    this.$http.jsonp(recommandProjectAjax).then((res) => {
      // console.log(res)
      this.newerBidList = res.body.resData.novicelist;
      this.recommandBidList = res.body.resData.choicelist;

    })
  },
  components: {
    CircleProgress
  }
}
</script>

<style scoped>

  .mint-swipe {
    height: 1.64rem;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }

  .mint-swipe-item {
    line-height: 1.64rem;
    background:#ccc center no-repeat;
    background-size: contain;
    display:block;
    height:100%;
    img {
      width: 100%;
    }
  }
  .aui-flex-col {height: .9rem;background:#fff;}
  .aui-flex-item-3 img {width: .31rem;}
  .aui-flex-item-3 p {color: #333; font-size: .14rem; margin-top: .05rem;}
  .data-info {margin-top: .1rem;height: .9rem; padding:.15rem;background:#fff;position: relative;}
  .data-info h4 {font-size: .14rem; color:#666; line-height: 1;}
  .data-info h2 {font-size: .28rem;margin-top: .1rem;}
  .data-info .btn-log {width: 1.03rem;color:#fff;text-align:center;font-size: .16rem; line-height: .33rem; position: absolute;right:.15rem;top:50%;border-radius:.33rem; margin-top:-.18rem;}
  .newbid {background:#fff;margin-top: .1rem;}
  .newbid h4 {line-height:.4rem;padding-left:.15rem; color: #333;}
  .newbid h4 span {color:#999;margin-left: .03rem; padding-left: .08rem;font-size: .12rem;}
  .bid-con {height: 1.34rem;padding:.15rem .15rem .18rem 0;margin-left:.15rem; background:#fff;position: relative;border-bottom: 1px solid #c8c7cc;}
  .bid-con h3 {font-size: .15rem; color:#333;}
  .bid-con h3 span {width: .35rem; line-height: .14rem; border-radius: .14rem; border-width: 1px; border-style: solid; display: inline-block; margin-left: .05rem; font-size: .11rem; text-align:center;}
  .bid-con:last-child {border-bottom: 0;}
  .bid-info { margin-top: .28rem; }
  .apr-part .apr {font-size: .31rem; font-family: Arial; margin:-.05rem 0 .03rem 0; line-height:1;}
  .apr-part p {color:#666;}
  .apr-part .apr b {font-size: .16rem;}
  .circle-area {position: absolute; right: .1rem; top: .15rem;}
  .time-part {font-size: .14rem; color: #666; margin-left: .75rem;}
  .time-part p:first-child {margin-bottom: .1rem;}
</style>
