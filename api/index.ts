import { axios } from '@/use/useAxios'

import user from '@/api/user'

export const {
  getAuth,
  getUserProfile,
} = user(axios);
