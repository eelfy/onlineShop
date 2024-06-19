import { Api } from "../api/Api"

export const noop = () => {
  // 
}

export const getImageUrlForBackground: typeof Api.getImageUrl = (id) => `url(${Api.getImageUrl(id)})`

export const convertNumberToSum = (number: number) => number.toLocaleString("ru-RU").split(',')[0] + ' ₽'
