import { useParams } from "react-router-dom"
import cn from './Brand.module.scss'

import { useCallback, useEffect, useState } from "react"
import { BaseGetProductsParams, ProductResponse, SortOrder } from "../../../shared/lib"
import { Api } from "../../../shared/api/Api"
import { ProductListWrapper } from "../../../features/ProductListWrapper"
import { useBoolean } from "usehooks-ts"
import { CustomSort } from "../../../features/StuffList"

const limit = 30

export const Brand = () => {
  const { brandName } = useParams()
  const [products, setProducts] = useState<ProductResponse>()
  const { value: isLoading, setFalse: stopLoading, setTrue: startLoading } = useBoolean(true)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [sort, setSort] = useState(SortOrder.CREATED)

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
    const ordered = SortOrder.CREATED

    updateProducts({
      limit,
      offset: 0,
      ordered
    })

    setSort(ordered)
    setCurrentPage(1)
  }, [brandName, updateProducts])

  const customSort: CustomSort = {
    active: sort,
    update: (sort) => {
      setCurrentPage(1)
      setSort(sort)
      updateProducts({
        limit,
        offset: 0,
        ordered: sort
      })
    }
  }

  return <div className={cn.wrapper}>
    <h2 className={cn.title}>{brandName}</h2>
    <ProductListWrapper
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      isLoading={isLoading} products={products} updateProducts={updateProducts} limit={limit}
      customSort={customSort}
    />
  </div>
}