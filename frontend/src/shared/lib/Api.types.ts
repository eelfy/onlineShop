export type SubCategories = Record<string, number>

export type Categories = Record<string, SubCategories>

export enum SortOrder {
  NAME = "NAME",
  PRICE_ASC = "PRICE_ASC",
  PRICE_DESC = "PRICE_DESC",
  CREATED = "CREATED",
}

interface BaseGetProductsParams {
  limit: number
  offset: number
  ordered: SortOrder
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
  photo1_url: string
}

export interface ProductsSearchParams extends BaseGetProductsParams {
  category_id: number
}

export interface ProductsInCategoryParams extends BaseGetProductsParams {
  cname: string
}

export interface SearchProductsParams extends BaseGetProductsParams {
  search: string
}

export interface ProductResponse {
  total_count: number,
  products: Product[]
}


export interface MakeOrderBody {
  name: string,
  surname: string,
  phone: string,
  mail: string,
  products_id: number[]
}