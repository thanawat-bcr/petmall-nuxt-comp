export default function product(axios: any) {

  async function getProducts(filter: any = {}, paginate: any) {
    try {
      const body = {
        ...filter,
        lang: "en_us",
        pagination: paginate,
      }
      const res = await axios.post('/product/products', body);
      if (res?.status === 200) return res.data;
    } catch (e) {
      console.error('[api/product] getProducts', e);
      throw e;
    }
    return null;
  };

  return {
    getProducts,
  }
}