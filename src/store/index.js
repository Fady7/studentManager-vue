import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    size: 5,
    totalPage: '',
    nowPage: 1,
    list: [],
    showModal: false,
    setStu: {},
    searchValue: '',
    cont: 0
  },
  mutations: {
    setList(state, list) {
      state.list = list;
    },
    setTotalPage(state, cont) {
      state.totalPage = Math.ceil(cont / state.size);
      state.cont = cont;
    },
    setEditStu(state, stu) {
      state.setStu = stu;
    },
    setShowModal(state, bool) {
      state.showModal = bool;
    },
    setNowPage(state, n) {
      if (n == -1 && state.nowPage > 1) {
        state.nowPage--;
      } else if (n == 0 && state.nowPage < state.totalPage) {
        state.nowPage++;
      } else if (n != 0 && n != -1) {
        state.nowPage = n;
      }
    },
    setSearchValue(state, v) {
      state.searchValue = v;
    }
  },
  actions: {
    getStuList({
      commit,
      state
    }) { ////////////
      api.findByPage(state.nowPage, state.size)
        .then(data => {
          commit('setList', data.data.data.findByPage);
          commit('setTotalPage', data.data.data.cont)
        })
    },
    updateStu({
      commit,
      state
    }, options) {
      return api.upDateStu(options).then(data => {
        if (data.data.status == 'success') {
          commit('setShowModal', false);
          Object.assign(state.setStu, options)
          return {
            type: 'success',
            msg: data.data.msg,
            duration: 2000
          }
        } else {
          return {
            type: 'fail',
            msg: data.data.msg,
            duration: 2000
          }
        }
      }).catch(err => {
        console.log(err)
      })
    },
    turnPage({
      dispatch,
      commit,
      state
    }, n) {
      commit('setNowPage', n);
      if (state.searchValue) {
        dispatch('search', {
          search: state.searchValue,
          page: state.nowPage,
          size: state.size,
          sex: -1
        })
      } else {
        dispatch('getStuList')
      }
    },
    searchStu({
      dispatch,
      state,
      commit
    }) {
      //点击搜索
      commit('setNowPage', 1);
      if (state.searchValue) {
        dispatch('search', {
          search: state.searchValue,
          page: 1,
          size: state.size,
          sex: -1
        })
      } else {
        dispatch('getStuList')
      }

    },
    search({
      commit,
      state
    }, options) { //翻页
      api.searchStu(options).then(data => {
        commit('setList', data.data.data.searchList);
        commit('setTotalPage', data.data.data.cont);
      });
    },
    delStu({
      dispatch,
      commit,
      state
    }, sNo) {
      api.delStu(sNo).then(() => {
        if (state.totalPage == Math.ceil((state.cont - 1) / state.size)) {
          dispatch('turnPage', state.nowPage)
        } else {
          dispatch('turnPage', -1)
        }
      })
    }
  },
  modules: {}
})