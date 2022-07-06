export default function ({ $axios, app, store }, inject) {
  const api = $axios.create()

  api.onRequest((config) => {
    console.log(`Making request to ${config.url}`)
    config.headers.common['Authorization'] = `Bearer ${store.getters['token']}`;
  })

  api.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    const errorText = code
      ? `A request failed with status code ${code}`
      : `A network error occurred`

    console.error(errorText)
  })

  api.onResponse((res) => {
    return res.data
  })

  inject('api', api)
}