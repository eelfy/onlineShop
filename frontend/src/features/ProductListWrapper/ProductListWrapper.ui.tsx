import { BaseGetProductsParams, ProductResponse } from "../../shared/lib"
import { NotFound } from "../../entities/NotFound"
import { CustomSort, StuffList } from "../StuffList"

interface ProductListWrapperProps {
  limit: number
  updateProducts: (params: BaseGetProductsParams) => void,
  products?: ProductResponse;
  customSort?: CustomSort;
  isLoading: boolean;
  currentPage: number;
  setCurrentPage: (val: number) => void
}

export const ProductListWrapper = ({
  updateProducts,
  products,
  limit,
  customSort,
  isLoading,
  currentPage,
  setCurrentPage
}: ProductListWrapperProps) => {

  if (isLoading) return <NotFound isLoading />

  return products && Boolean(products?.products?.length)
    ? <StuffList
      limit={limit}
      products={products}
      updateProducts={updateProducts}
      customSort={customSort}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
    : <NotFound isLoading={isLoading} />
}