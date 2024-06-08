export type SubCategories = Record<string, number>

export type Categories = Record<string, SubCategories>

export interface Banner {
  id: number,
  name: string
}