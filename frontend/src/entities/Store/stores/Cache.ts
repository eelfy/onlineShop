import { CacheProduct } from "../../../shared/lib";

class Cache<T> {
  private cacheId: string;

  constructor(cacheId: string) {
    this.cacheId = cacheId
  }

  getItems = (): T | null => {
    const rawCache = sessionStorage.getItem(this.cacheId)

    if (!rawCache) return null

    return JSON.parse(rawCache)
  }

  setItem = (newItems: T) => {
    sessionStorage.setItem(this.cacheId, JSON.stringify(newItems))
  }
}

export const CardCache = new Cache<CacheProduct[]>('bag')
