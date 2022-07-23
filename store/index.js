import { User, DEFAULT_USER } from '@/type/user';

export const state = 
() => ({
  user: DEFAULT_USER,
  auth: false,
  email: '',
})

export const getters = {

  auth(state) {
    return state.auth;
  },

  user(state) {
    return state.user;
  },

  email(state) {
    return state.email;
  },
}

export const actions = {

  // async nuxtServerInit ({ commit, dispatch}) {
  //   console.log('Nuxt init');
  // },

  saveAUTH({ commit, dispatch }, auth) {
    console.log('[STORE ACTIONS] - saveAUTH', auth)
    if (auth){
      commit('saveAUTH', auth)
    } else {
      localStorage.removeItem('token');
      commit('saveAUTH', false)
      commit('saveUSER', DEFAULT_USER);
    }
  },

  saveUSER({ commit }, user) {
    console.log('[STORE ACTIONS] - saveUSER', user)
    commit('saveUSER', user)
  },

  saveEMAIL({ commit }, email) {
    console.log('[STORE ACTIONS] - saveEMAIL', email)
    commit('saveEMAIL', email)
  },

  logout({ commit }) {
    console.log('[STORE ACTIONS] - logout')
    localStorage.removeItem('token');
    commit('saveAUTH', false)
    commit('saveUSER', DEFAULT_USER);
  }
}


export const mutations = {
  saveAUTH (state, auth) {
    console.log('[STORE MUTATIONS] - saveAUTH:', auth)
    state.auth = auth
  },
  saveUSER (state, user) {
    console.log('[STORE MUTATIONS] - saveUSER:', user)
    state.user = user
  },
  saveEMAIL (state, email) {
    console.log('[STORE MUTATIONS] - saveEMAIL:', email)
    state.email = email
  },
}
