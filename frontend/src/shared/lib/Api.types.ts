export type SubCategories = Record<string, number>

export type Categories = Record<string, SubCategories | number>

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
  name: string,
  link: string | null
}

export type ImageId = number

export interface Product {
  article_number?: string,
  id: number
  category_id: number,
  category_name: string,
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

export interface ProductOrder {
  product_id: number;
  size: string
}


export interface MakeOrderBody {
  name: string,
  surname: string,
  phone: string,
  mail: string,
  messanger_name: string,
  products: ProductOrder[]
}