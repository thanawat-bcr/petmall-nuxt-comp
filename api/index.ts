import { axios } from '@/use/useAxios'

import user from '@/api/user'

export const {
  getUserProfile,
} = user(axios);
