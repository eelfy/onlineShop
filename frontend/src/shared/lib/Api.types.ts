export type SubCategories = Record<string, number>

export type Categories = Record<string, SubCategories>

export enum SortOrder {
  NAME = "NAME",
  PRICE_ASC = "PRICE_ASC",
  PRICE_DESC = "PRICE_DESC",
  CREATED = "CREATED",
}

export interface Banner {
  id: number,
  name: string
}

export interface Product {
  id: number
  category_id: number,
  name: string,
  brand: string,
  min_price: number,
  sizes: string[]
  photo1_url: URL
}

export interface ProductsSearchParams {
  limit: number
  offset: number
  ordered: SortOrder
  category_id: number
}

export interface ProductsInCategoryParams extends Omit<ProductsSearchParams, 'category_id'> {
  cname: string
}

export interface ProductResponse {
  total_count: number,
  products: Product[]
}
