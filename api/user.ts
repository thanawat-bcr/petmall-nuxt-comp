export default function user(axios: any) {

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
    getUserProfile,
  }
}