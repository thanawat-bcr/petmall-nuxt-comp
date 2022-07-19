export const DEFAULT_FILTER = {
  animals: [],
  categories: [],
  price: { from: 0, to: 0 },
};

export interface Filter {
  animals?: Array<string>,
  categories?: Array<string>,
  price: { from: number, to: number },
} 