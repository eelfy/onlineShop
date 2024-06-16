export type SubCategories = Record<string, number>

export type Categories = Record<string, SubCategories>

export enum SortOrder {
  NAME = "NAME",
  PRICE_ASC = "PRICE_ASC",
  PRICE_DESC = "PRICE_DESC",
  CREATED = "CREATED",
}

export interface BaseGetProductsParams {
  limit: number
  offset: number
  ordered: SortOrder
}

export interface Banner {
  id: number,
  name: string
}

export type ImageId = number

export interface Product {
  id: number
  category_id: number,
  name: string,
  brand: string,
  min_price: number,
  sizes: string[]
  images: ImageId[]
}

export interface ProductsSearchParams extends BaseGetProductsParams {
  category_id: number
}

export interface ProductsInCategoryParams extends BaseGetProductsParams {
  cname: string
}

export interface SearchProductsParams extends BaseGetProductsParams {
  query: string
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
  messanger_name: string,
  products_id: number[]
}