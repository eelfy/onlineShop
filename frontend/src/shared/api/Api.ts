import { Banner, Categories } from "../lib/Api.types"

export const ApiUrl = import.meta.env.VITE_API

export const Api = {
  async getProducts() {
    return fetch(`${ApiUrl}/product`)
  },


  getCategories(): Promise<Categories> {
    return fetch(`${ApiUrl}/categories`).then(r => r.json())
  },

  getBanners(): Promise<Banner[]> {
    return fetch(`${ApiUrl}/banners`).then(r => r.json())
  },
} 