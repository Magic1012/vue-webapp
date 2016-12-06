import Vue from 'vue'

const state = {
  user: {

  }
}
const mutations = {
    login(state, user) {
        // 从一个对象中解析出字符串
        sessionStorage.setItem('user', JSON.stringify(user))
        // ES6语法，从一个对象复制所有的属性到另一个对象，返回state对象
        Object.assign(state, user)
    },
    logout(state) {
        sessionStorage.removeItem('user')
        Object.keys(state).forEach(k => Vue.delate(state, k))
        Object.assign(state, {})
    }
}

const actions = {
    login({ commit }, user) {
        commit('login', user)
    },
    logout({ commit }) {
        commit('logout')
    }
}

export default {
    state,
    mutations,
    actions
}
