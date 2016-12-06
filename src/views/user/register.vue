<template>
  <div class="page">
    <loading v-if="false"></loading>
    <div class="content">
      <mt-header class="bar-nav" title="注册" >
        <mt-button slot="left" icon="back" v-back-link></mt-button>
        <router-link to="/login" slot="right">
          <mt-button>登录</mt-button>
        </router-link>
      </mt-header>
      <div class="form-area">
        <form action="">
          <ul>
            <li class="margin-t-20">
              <rd-field type="tel"  :attr="{maxlength: 11}" label="手机号码" placeholder="请输入手机号码"></rd-field>
            </li>
            <li>
              <mt-field type="tel" v-model="codeVal" :attr="{maxlength: 6}" label="验证码" placeholder="请输入手机验证码">
                <p class="yzm main-color aui-border-l ellipsis">发送验证码</p>
              </mt-field>
            </li>
            <li>
              <mt-field type="password" v-model="pwdVal" :attr="{maxlength: 16}" label="登录密码" placeholder="设置登录密码 8-16位数字及字母组成"></mt-field>
            </li>
            <li>
              <mt-field type="tel" v-model="inviteVal" :attr="{maxlength: 11}" label="邀请人" placeholder="请输入邀请人手机号(选填)"></mt-field>
            </li>
          </ul>
          <div class="btn-con">
            <div class="protocol-box">
          <span @click="switchImg">
            <span v-if="switch_status">
              <input type="hidden" name="protocol" value="1">
              <img src="../../assets/images/public/protocol_s.png" />
            </span>
            <span v-else>
              <input type="hidden" name="protocol" value="0">
              <img  src="../../assets/images/public/protocol_n.png" />
            </span>
          </span>
              我已阅读并同意<a class="protocol main-color">《注册服务协议》</a></div>
            <mt-button @click.native.prevent="checkForm" class="main-btn-bg" type="danger" size="large">注册</mt-button>

          </div>
        </form>

      </div>

    </div>
  </div>

</template>

<script>
  import Loading from '../../components/Loading.vue'
  import RdField from '../../components/FieldInput.vue'
  import validator from '../../mixins/formValidator'
  // 需js引入覆盖第三方的样式
  require('../../assets/css/modify-mint.css')

  export default {
    data(){
      return {
        active: false,
        currentValue: this.value,
        switch_status: true
      }
    },
    props:{

    },
    mixins: [validator],
    methods: {
      switchImg () {
        this.switch_status = !this.switch_status
      },
      test(){
        console.log(this.phoneVal)
      },

      checkForm: function (e) {
        // if(e) e.preventDefault()
        if(this.regexPhone(this.phoneVal) && this.regexPwd(this.pwdVal)){
          this.$http.jsonp(loginAjax,{ id: '', pwd: '', mobileType: 3}).then((res) => {
            console.log(res)
          })
        }
      }
    },
    watch: {

    },
    components: { Loading, RdField }
  }
</script>

<style scoped>

  .bar-nav .title {  font-size:18px; }
  .mint-cell::after {border-top: 0;}
  .btn-con {padding:0 .15rem;margin-top: .35rem;}
  .mint-button:not(.is-disabled):active::after {  }
  .protocol-box img {width: .14rem;  vertical-align: -2px;}
  .form-area ul li .yzm {padding-left:.15rem; top: .07rem;line-height: .3rem;width: .9rem;background:#fff;}
</style>
