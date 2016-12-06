import Vue from 'vue'

import VueResource from 'vue-resource'

import { domain } from '../ajax.config'

Vue.use(VueResource)

Vue.http.options.root = '/root'

const loadingData = {
  show: false
}
export default function (type, url, data, succ, err) {
  loadingData.show = true
  let path = domain + url
  Vue.http[type](path, data).then((response) => {
    setTimeout(() => {
      succ(response.body)
      loadingData.show = false
    }, 500)
  }, function (response) {
    alert('服务器繁忙,请重试!')
    loadingData.show = false
  })
}
