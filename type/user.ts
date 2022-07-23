export const DEFAULT_USER = {
  displayName: '',
	email: '',
	imgUrl: '',
	gender: '',
	birthdate: '1000-01-01',
	cart: 0,
};

export interface User {
  displayName: string,
	email: string,
	imgUrl: string,
	gender: string,
	birthdate: string,
	cart: number,
} 