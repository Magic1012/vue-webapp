<style scoped>
  .page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background:url(../../assets/images/logReg/login_bg.png) no-repeat;
  }
  /*
  .text-center {text-align: center;}
  .content {
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding:20px 15px 0;
  }
  .form-area {background:#fff;border-radius:6px;}
  .form-area img {height: 117.5px;margin-top:50px;}
  .form-area ul { margin-top: 50px; text-align:center;}
  .form-area ul li input { text-align: center; height: 44px; border-radius: 44px; color:#333;width: 298px; margin:0 auto; border: 1px solid #ccc;font-size: 15px;display: inline-block;}
  .form-area ul li:first-child input {margin-bottom: 15px;}
  .login-btn {padding:50px 0 97px;position:relative;}
  .pos-a {position: absolute;bottom:26px;width:100%;padding:0 15px;font-size:14px;box-sizing: border-box;}
  .button.button-fill {width: 298px; margin:auto;color:#fff;text-align:center; font-size:18px;height: 44px; line-height:44px;border-radius: 50px;display:block;}
  */
  .bar-nav {background:transparent;}
  .content {
    position: absolute;
    top: .44rem;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding:.2rem  .15rem 0;
  }
  .form-area {background:#fff;border-radius:6px;}
  .form-area img {height: 1.175rem;margin-top:.5rem;}
  .form-area ul { margin-top: .5rem; text-align:center;}
  .form-area ul li input { text-align: center; height:.44rem; border-radius: 44px; color:#333;width: 2.98rem; margin:0 auto; border: 1px solid #ccc;font-size: 15px;display: inline-block;}
  .form-area ul li:first-child input {margin-bottom: 15px;}
  .login-btn {padding:.5rem 0 .97rem;position:relative;}
  .pos-a {position: absolute;bottom:26px;width:100%;padding:0 15px;font-size:14px;box-sizing: border-box;}
  .button.button-fill {width: 2.98rem; margin:auto;color:#fff;text-align:center; font-size:18px;height:.44rem; line-height:.44rem;border-radius: 50px;display:block;}
</style>


<template>
<div class="page" id="pageLogin">
  <mt-header class="bar-nav" title="">

    <mt-button icon="back" slot="left" v-back-link></mt-button>

  </mt-header>

  <div class="content">
    <div class="form-area" >
      <div class="text-center"><img src="../../assets/images/logReg/login_logo.png" alt="company-logo" /></div>

      <form action="">
        <ul>
          <li class="">
            <input type="text" ref="input" @input="update($event.target.value)" maxlength="11" pattern="/\d*/" v-model="mobile" placeholder="请输入手机号码" id="mobilePhone" name="mobilePhone" />
            <b class="hide clear-text aui-iconfont aui-icon-roundclosefill color-ddd"></b>
          </li>
          <li class="">
            <input type="password" v-model="loginPwd" placeholder="设置登录密码 8-16位数字及字母组成" id="password" name="password" />
            <b class="hide clear-text aui-iconfont aui-icon-roundclosefill color-ddd"></b>
          </li>
        </ul>
      </form>
      <div class="login-btn">
        <a class="button button-fill main-btn-bg" @click="checkForm">登录</a>
        <!-- <mt-button class="button button-fill main-btn-bg" @click.native="handleClick">登录</mt-button> -->
        <div class="clearfix pos-a">
          <span href="getpwd.html" class="pull-left color-666">忘记密码？</span>
          <router-link to="/register"><span class="pull-right main-color">注册新用户</span></router-link>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
  import validator from '../../mixins/formValidator'
  import { loginAjax } from '../../ajax.config'
export default {
  name: 'page-login',
  mixins: [validator],
  methods: {
    checkForm: function () {
      if(this.regexPhone(this.mobile) && this.regexPwd(this.loginPwd)){
        this.$http.jsonp(loginAjax,{ id: '', pwd: '', mobileType: 3}).then((res) => {
          console.log(res)
        })
      }
    },
    update(val){
      var formatVal = val.trim().replace(/\D*/, '')
      this.$refs.input.value = formatVal
    }
  }
}
</script>
