import { ImageId } from "./Api.types"

export interface CacheProduct {
  id: number,
  size: string
  brand: string
  name: string
  price: number
  image: ImageId
}