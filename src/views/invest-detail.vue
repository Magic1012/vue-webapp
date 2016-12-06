
<template>
  <div class="page">
    <mt-header class="bar-nav" title="产品详情" >
      <mt-button slot="left" icon="back" v-back-link></mt-button>
    </mt-header>
    <div class="project-detail">
      <div class="project-name">
        融抵盈-RDY16081605
      </div>
      <div class="project-apr">
        <i class="apr main-color">11.20</i>
        <em class="percent main-color">%</em>
        <span class="project-award">-0.2%</span>
      </div>
      <div class="project-detail-1">
        <span class="start-money">起投金额 100 元</span><span class="project-timelimit">产品期限 25 天</span>
      </div>
      <div class="percent-wra">
        <div class="percent-process" style="width:3.00%;"></div>
      </div>
      <div class="project-detail-2">
        <span class="info-left">已完成 29%</span>
        <span class="info-right">
                剩余可投<i class="balance-account main-color">1,800,56.00</i>元
            </span>
      </div>
    </div>
    <ul class="project-list margin-t-10">
      <li>
        <img src="../assets/images/finance/details_icon_way_of_repayment.png" />
        <span>每月还息到期还本</span>
      </li>
      <li>
        <img src="../assets/images/finance/details_icon_way_of_repayment.png" />
        <span>债权金额<i class="bond-money">1,000,000.00</i>元</span>
      </li>
      <li>
        <img src="../assets/images/finance/details_icon_way_of_repayment.png" />
        <span>投资日开始计息</span>
      </li>
      <li>
        <img src="../assets/images/finance/details_icon_way_of_repayment.png" />
        <span>安全等级为极低风险</span>
      </li>
      <li>
        <img src="../assets/images/finance/details_icon_way_of_repayment.png" />
        <span>投资条件为保守型及以上</span>
      </li>
      <li>
        <img src="../assets/images/finance/details_icon_way_of_repayment.png" />
        <span>剩余时间10小时28分30秒</span>
      </li>
    </ul>
    <ul class="project-detail-3 margin-t-10 margin-b-100">
      <li class="border-b-e2 aui-border-b">
        <a href="#">
          了解项目
          <img src="../assets/images/public/arrow_right.png" class="arrow-right"/>
        </a>
      </li>
      <li class="border-b-d4 aui-border-b">
        <a href="#">
          投资记录
          <img src="../assets/images/public/arrow_right.png" class="arrow-right"/>
        </a>
      </li>
      <li>
        <span>担保机构</span>
        <span class="project-company color-999">浙江中安保集团有限公司</span>
      </li>
    </ul>
    <a class="invest-btn">立即投资</a>
    <div class="invest-btn-countDown">
      <div class="count-down-time">
        11月30日 12:00即将开售
      </div>
      <div class="count-down-remind">
        <div class="alarm-clock">
          <img src="../assets/images/finance/details_icon_reserve.png" />
        </div>
        <div class="remind">
          <p class="remind-title">开售提醒</p>
          <p class="remind-number">20人想买</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>


<style scoped>
  .project-detail{
    float: left;
    width: 100%;
    background: #fff;
  }
  .project-name{
    height: .4rem;
    line-height: .4rem;
    text-align: center;
  }
  .project-apr{
    position: relative;
    text-align: center;
  }
  .apr{
    font-size: .5rem;
  }
  .percent{
    font-size: .2rem;
  }
  .apr,.percent{
    font-family: arial;
  }
  .project-award{
    position: absolute;
    top: .1rem;
    font-size: .2rem;
    color: #48affb;
  }
  .project-detail-1{
    text-align: center;
    margin-top: .15rem;
  }
  .start-money{
    border-right: 1px solid #DDD;
    padding-right: .1rem;
  }
  .project-timelimit{
    padding-left: .1rem;
  }
  .start-money,.project-timelimit{
    color: #666;
  }
  .percent-wra{
    width: 90%;
    height: .04rem;
    background: #F2F4F9;
    float: left;
    margin-top: .3rem;
    margin-left: 5%;
  }
  .percent-process {
    height: .04rem;
    background: #f95a28;
  }
  .project-detail-2{
    padding: 0 5%;
    float: left;
    width: 100%;
    height: .6rem;
    line-height: .6rem;
  }
  .info-left{
    text-align: left;
  }
  .info-right{
    text-align: right;
    float: right;
  }
  .info-left,.info-right{
    color: #999;
  }
  .project-list{
    float: left;
    width: 100%;
    padding: 0 5%;
    background: #fff;
  }
  .project-list li{
    height: .4rem;
    line-height: .4rem;
    color: #999;
  }
  .project-list li img{
    height: .18rem;
    width: .18rem;
    margin-top: .11rem;
    float: left;
    margin-right: .1rem;
  }
  .project-detail-3{
    float: left;
    width: 100%;
    padding: 0 5%;
    background: #fff;
  }
  .project-detail-3 li{
    height: .5rem;
    line-height: .5rem;
  }
  .project-detail-3 li a{
    float: left;
    width: 100%;
  }
  .arrow-right{
    height: .14rem;
    float: right;
    margin-top: .18rem;
  }
  .border-b-e2{
    border-color: #E2E2E2;
  }
  .border-b-d4{
    border-color: #D4D4D4;
  }
  .project-company{
    float: right;
  }
  .invest-btn,.invest-btn-countDown {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
  }
  .invest-btn{
    color: #fff;
    text-align: center;
    font-size: .18rem;
    height: .45rem;
    line-height: .45rem;
    background: #f95a28;
  }
  .invest-btn-countDown{
    height: .5rem;
    display: none;
  }
  .count-down-time{
    width: 60%;
    float: left;
    height: .5rem;
    line-height: .5rem;
    text-align: center;
    background: #fff;
    font-family: arial;
    font-size: .15rem;
  }
  .count-down-remind{
    width: 40%;
    height: .5rem;
    float: left;
    background: #f95a28;
  }
  .alarm-clock{
    float: left;
    width: 30%;
  }
  .alarm-clock img{
    width: .25rem;
    height: .25rem;
    margin-top: .125rem;
    margin-left: .1rem;
  }
  .remind{
    float: left;
    width: 70%;
    height: .5rem;
  }
  .remind p{
    text-align: left;
    font-family: arial;
  }
  .remind-title{
    font-size: .16rem;
    margin-top: .1rem;
    color: #fff;
  }
  .remind-number{
    font-size: .13rem;
    color: #FEE4E0;
  }
</style>
