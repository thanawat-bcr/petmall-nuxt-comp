export default function user(axios: any) {

  async function getAuth() {
    try {
      const res = await axios.get('/auth');
      if (res?.status === 200) return true;
    } catch (e) {
      console.error('[api/user] getUserProfile', e);
      throw e;
    }
    return null;
  }
  
  async function getUserProfile() {
    try {
      const res = await axios.get('/user/me');
      if (res?.status === 200) return res.data;
    } catch (e) {
      console.error('[api/user] getUserProfile', e);
      throw e;
    }
    return null;
  }

  return {
    getAuth,
    getUserProfile,
  }
}