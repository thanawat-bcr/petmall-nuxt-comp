import { axios } from '@/use/useAxios'

import user from '@/api/user'

export const {
  getAuth,
  getIsCreated,
  getProfile,
  updateProfile,
} = user(axios);
