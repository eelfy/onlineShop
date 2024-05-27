export interface SortOption {
  title: string;
  value: string
}

export interface ItemSizeOption {
  size: string
  price: string
  id: number
}

export interface HistoryLegendOption {
  title: string,
  redirectTo?: string,
  isCurrent?: boolean
}