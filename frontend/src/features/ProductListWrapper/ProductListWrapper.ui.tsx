import { BaseGetProductsParams, ProductResponse } from "../../shared/lib"
import { NotFound } from "../../entities/NotFound"
import { CustomSort, StuffList } from "../StuffList"

interface ProductListWrapperProps {
  limit: number
  updateProducts: (params: BaseGetProductsParams) => void,
  products?: ProductResponse;
  customSort?: CustomSort;
  isLoading: boolean
}

export const ProductListWrapper = ({
  updateProducts,
  products,
  limit,
  customSort,
  isLoading
}: ProductListWrapperProps) => {
  if (isLoading) return <NotFound isLoading />

  return products && Boolean(products?.products?.length)
    ? <StuffList
      limit={limit}
      products={products}
      updateProducts={updateProducts}
      customSort={customSort}
    />
    : <NotFound isLoading={isLoading} />
}