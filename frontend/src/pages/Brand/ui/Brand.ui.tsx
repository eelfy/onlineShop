import { useParams } from "react-router-dom"
import cn from './Brand.module.scss'

import { useCallback, useEffect, useState } from "react"
import { BaseGetProductsParams, ProductResponse, SortOrder } from "../../../shared/lib"
import { Api } from "../../../shared/api/Api"
import { ProductListWrapper } from "../../../features/ProductListWrapper"
import { useBoolean } from "usehooks-ts"

const limit = 30

export const Brand = () => {
  const { brandName } = useParams()
  const [products, setProducts] = useState<ProductResponse>()
  const { value: isLoading, setFalse: stopLoading, setTrue: startLoading } = useBoolean()


  const updateProducts = useCallback((params: BaseGetProductsParams) => {
    if (!brandName) return;
    startLoading()

    Api.getProductsInCategory({
      ...params,
      cname: brandName,
    }).then(products => {
      setProducts(products)
    }).finally(() => stopLoading())
  }, [brandName, startLoading, stopLoading])


  useEffect(() => {
    if (!brandName) return;
    updateProducts({
      limit,
      offset: 0,
      ordered: SortOrder.CREATED
    })

  }, [brandName, updateProducts])

  return <div className={cn.wrapper}>
    <h2 className={cn.title}>{brandName}</h2>
    <ProductListWrapper isLoading={isLoading} products={products} updateProducts={updateProducts} limit={limit} />
  </div>
}