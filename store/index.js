import { userApi } from '@/api/user';

export const state = () => ({
  user: null,
  token: null,
})

export const getters = {

  token(state) {
    if (state.token) return state.token
    else return null
  },

  user(state) {
    if (state.user) return state.user
    else return null
  },

  isAuthenticated(state) {
    return !!state.token
  }
}

export const actions = {

  async nuxtServerInit ({ commit, dispatch}) {
    console.log('Nuxt init');
    const token = localStorage.getItem('token');
    if (token) commit('saveTOKEN', token)
  },

  saveTOKEN({ commit }, token) {
    console.log('[STORE ACTIONS] - saveTOKEN')
    commit('saveTOKEN', token)
  },

  saveUSER({ commit }, user) {
    console.log('[STORE ACTIONS] - saveUSER')
    commit('saveUSER', user)
  },

  logout({ commit }) {
    console.log('[STORE ACTIONS] - logout')
    localStorage.removeItem('token');
    commit('saveTOKEN', null);
    commit('saveUSER', null);
    // window.location.reload();
  }
}


export const mutations = {
  saveTOKEN (state, token) {
    console.log('[STORE MUTATIONS] - saveTOKEN:', token)
    state.token = token
  },
  saveUSER (state, user) {
    console.log('[STORE MUTATIONS] - saveUSER:', user)
    state.user = user
  },
}
