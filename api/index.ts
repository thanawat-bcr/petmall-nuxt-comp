import { axios } from '@/use/useAxios'

import user from '@/api/user'
import address from '@/api/address'

export const {
  getAuth,
  getIsCreated,
  getProfile,
  updateProfile,
} = user(axios);

export const {
  getAddresses,
  getAddress,
  getProvinces,
  getDistricts,
  createAddress,
  updateAddress,
  deleteAddress,
} = address(axios);