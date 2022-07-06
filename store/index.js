export const state = () => ({
  user: null,
  auth: false,
})

export const getters = {

  auth(state) {
    return state.auth
  },

  user(state) {
    if (state.user) return state.user
    else return null
  },
}

export const actions = {

  // async nuxtServerInit ({ commit, dispatch}) {
  //   console.log('Nuxt init');
  // },

  saveAUTH({ commit, dispatch }, auth) {
    console.log('[STORE ACTIONS] - saveAUTH')
    if (auth){
      commit('saveAUTH', auth)
    } else {
      localStorage.removeItem('token');
      commit('saveAUTH', false)
      commit('saveUSER', null);
    }
  },

  saveUSER({ commit }, user) {
    console.log('[STORE ACTIONS] - saveUSER')
    commit('saveUSER', user)
  },

  logout({ commit }) {
    console.log('[STORE ACTIONS] - logout')
    localStorage.removeItem('token');
    commit('saveAUTH', false)
    commit('saveUSER', null);
    // window.location.reload();
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
}
