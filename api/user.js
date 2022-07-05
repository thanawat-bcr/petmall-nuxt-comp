import { useContext } from '@nuxtjs/composition-api'

export const userApi = () => {
  const { $api } = useContext()

  // const fetchUser = async (userId) => {
  //   const res = await $api.get(`user/${userId}`)

  //   return res
  // }

  const isCreated = async () => {
    const res = await $api.get('user/isCreated')

    return res
  }

  return {
    // fetchUser,
    isCreated,
  }
}