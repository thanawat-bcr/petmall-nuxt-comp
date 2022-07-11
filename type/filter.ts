export const DEFAULT_FILTER = {
  animals: [],
  categories: [],
  price: { from: 0, to: 0 },
};

export interface Filter {
  animals?: Array<String>,
  categories?: Array<String>,
  price: { from: Number, to: Number },
} 