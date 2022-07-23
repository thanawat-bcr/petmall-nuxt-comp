export default function product(axios: any) {

  async function getMockProducts() {
    try {
      const res = await axios.get('/product/products/en_us');
      if (res?.status === 200) return res.data;
    } catch (e) {
      console.error('[api/product] getProducts', e);
      throw e;
    }
    return null;
  };

  return {
    getMockProducts,
  }
}