export const DEFAULT_PAGINATION = {
  currentPage: 1,
  perPage: 10,
  totalPage: 1,
};

export interface Pagination {
  currentPage: number,
  perPage: number,
  totalPage: number,
} 