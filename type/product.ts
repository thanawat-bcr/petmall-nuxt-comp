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
  images: Array<string>,
  categories: Array<string>,
  animals: Array<string>,
  feature: boolean,
  description: string,
  sold: number,
  variants: Array<Variant>,
}
export const DEFAULT_ITEM = {
	_id: "1",
	name: "Tutorism's Item",
	brand: "Tutorism",
	shop: "Tutorism",
	images: [],
	categories: [],
	animals: [],
	feature: false,
	description: "Tutorism Test Product Item",
	sold: 100,
	variants: [
		{
			_id: "1-001",
			disprice: 200,
			images: [],
			name: "Variant 001",
			price: 1000,
			remain: 40,
		},
		{
			_id: "1-002",
			disprice: 70,
			images: [],
			name: "Variant 002",
			price: 770,
			remain: 0,
		},
		{
			_id: "1-003",
			disprice: 0,
			images: [],
			name: "Variant 003",
			price: 900,
			remain: 2,
		},
	]
};