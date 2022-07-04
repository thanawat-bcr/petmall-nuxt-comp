
export const actions = {

  async nuxtServerInit () {
    console.log('Nuxt init')
  },
  printOut(ctx, payload) {
    console.log(payload);
  }
}
