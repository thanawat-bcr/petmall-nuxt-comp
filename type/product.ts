export const DEFAULT_PRODUCT = {
  _id: '0000',
  name: '',
  imageUrl: null,
  price: 0,
  maxDisPricePercent: 0,
  featured: false,
  sold: 0,
};

export interface Product {
  _id: string,
  name: string,
  brand?: string,
  shop?: string,
  imageUrl: string,
  price: number,
  maxDisPricePercent: number,
  featured: boolean,
  sold: number,
} 

export interface Variant {
  _id: string,
  name: string,
  price: number,
  disprice: number,
  remain: number,
  images: Array<string>,
}
export interface Item {
  _id: string,
  name: string,
  brand?: string,
  shop?: string,
  featured: boolean,
  sold: number,
  description: string,
  images: Array<string>,
  animals: Array<string>,
  categories: Array<string>,
  variants: Array<Variant>,
}