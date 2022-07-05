// Reflect the token config in plugin axios.ts, but for composition API

import { default as axiosLib, AxiosRequestConfig } from 'axios';
// import { useAxios as vueUseUseAxios } from '@vueuse/integrations';

const BASE_URL = 'https://petmall_api.sopet.co/'

const instance = axiosLib.create({
  baseURL: BASE_URL,
})

instance.interceptors.request.use((config) => {
  config.headers.common['Authorization'] = `Bearer ${process.browser ? localStorage.getItem('token') : ''}`;
  config.headers.common['access-control-allow-origin'] = `*`;
  return config;
});

instance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  // if (error.response.status === 401) {
  //   if (process.browser) localStorage.removeItem(tokenName);
  // }
  return error.response;
});

export const axios = instance;

export async function logout() {
  try {
    const response = await instance.post(
      BASE_URL + '/logout'
    );
    if (response.status === 200) {
      console.log('[logout] successful')
      if (process.browser) localStorage.removeItem('token');

      instance.interceptors.request.use((config) => {
        config.headers.common['Authorization'] = null;
        return config;
      });
    }
  } catch (error: any) {
    console.error('[logout] Error');
  }
}