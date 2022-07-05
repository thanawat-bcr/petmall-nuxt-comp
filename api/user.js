import { useContext } from '@nuxtjs/composition-api'

export const userApi = () => {
  const { $api } = useContext()

  const getUser = async () => {
    const res = await $api.get(`user/me`)

    return res
  }

  const getIsCreated = async () => {
    const res = await $api.get('user/isCreated')

    return res
  }

  return {
    getUser,
    getIsCreated,
  }
}