import { SortOrder } from "../../shared/lib";

export interface CustomSort {
  active: SortOrder,
  update: (sort: SortOrder) => void
}