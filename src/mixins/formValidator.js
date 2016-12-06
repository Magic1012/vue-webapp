export default {
  methods: {
    regexUserName (value = '') {
      if (/^(?![0-9]+$)[0-9A-Za-z]{4,16}$/.test(value) == false) {
        this.$toast('用户名由英文字母、数字组成，且不能为纯数字')
        return;
      }
    },
    regexPwd (value = '') {
      if (value == '') {
        this.$toast('请输入密码')
        return;
      }
      if (/^(?![^a-zA-Z]+$)(?!\D+$).{8,16}$/.test(value) == false) {
        this.$toast('密码格式错误')
        return;
      }
      return true;
    },
    regexPhone (value = '') {
      if (value == '') {
        this.$toast('请输入手机号')
        return;
      }
      if(value.length == 11 && /(13\d|14[57]|15\d|17[0135678]|18\d)\d{8}$/.test(value)){
        return true;
      }else {
        this.$toast({message:'请输入正确的手机号'})
        return ;
      }
    },

  }
}
