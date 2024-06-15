import { Banner, Categories, ImageId, MakeOrderBody, Product, ProductResponse, ProductsInCategoryParams, ProductsSearchParams, SearchProductsParams } from "../lib/Api.types"

export const ApiUrl = import.meta.env.VITE_API

export const Api = {
  getProducts(params: ProductsSearchParams): Promise<ProductResponse> {
    // @ts-expect-error hmf
    const search = new URLSearchParams(params)
    return fetch(`${ApiUrl}/products?${search}`).then(r => r.json())
  },

  getCategories(): Promise<Categories> {
    return fetch(`${ApiUrl}/categories`).then(r => r.json())
  },

  getBanners(): Promise<Banner[]> {
    return fetch(`${ApiUrl}/banners`).then(r => r.json())
  },

  getProduct(pid: number): Promise<Product> {
    // @ts-expect-error hmf
    const search = new URLSearchParams({ pid })

    return fetch(`${ApiUrl}/product?${search}`).then(r => r.json())
  },

  getProductsInCategory(params: ProductsInCategoryParams): Promise<ProductResponse> {
    // @ts-expect-error hmf
    const search = new URLSearchParams(params)

    return fetch(`${ApiUrl}/products-in-category?${search}`).then(r => r.json())
  },

  makeOrder(body: MakeOrderBody) {

    return fetch(`${ApiUrl}/order`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(r => r.json())
  },

  getSearch(params: SearchProductsParams): Promise<ProductResponse> {
    // @ts-expect-error hmf
    const search = new URLSearchParams(params)

    return fetch(`${ApiUrl}/search?${search}`).then(r => r.json())
  },

  getImageUrl(id: ImageId) {
    return `${ApiUrl}/photo/${id}`
  }
} 
