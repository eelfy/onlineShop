import { ProductResponse } from "../../shared/lib"
import { NotFound } from "../../entities/NotFound"
import { StuffList } from "../StuffList"

export const ProductListWrapper = ({
  setProducts,
  products,
  limit
}: {
  limit: number
  setProducts: (products: ProductResponse) => void,
  products?: ProductResponse
}) => {
  return products && Boolean(products.products.length)
    ? <StuffList
      limit={limit}
      products={products}
      setProducts={setProducts}
    />
    : <NotFound />

}