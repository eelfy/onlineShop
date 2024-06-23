import { useParams } from "react-router-dom"

import { useCallback, useEffect, useState } from "react"
import { BaseGetProductsParams, ProductResponse, SortOrder } from "../../shared/lib"
import { Api } from "../../shared/api/Api"

import cn from './CategoryPage.module.scss'
import { ProductListWrapper } from "../../features/ProductListWrapper"
import { useBoolean } from "usehooks-ts"

const limit = 30

export const CategoryPage = () => {
  const { categoryName } = useParams()
  const [products, setProducts] = useState<ProductResponse>()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { value: isLoading, setFalse: stopLoading, setTrue: startLoading } = useBoolean(true)

  const [name, category_id] = categoryName ? categoryName.split('.') : []


  const updateProducts = useCallback((params: BaseGetProductsParams) => {
    startLoading()
    Api.getProducts({
      ...params,
      category_id: Number(category_id)
    }).then(products => {
      setProducts(products)
    }).finally(() => stopLoading())
  }, [category_id, startLoading, stopLoading])

  useEffect(() => {
    if (!category_id) return;
    updateProducts({
      limit,
      offset: 0,
      ordered: SortOrder.CREATED
    })
    setCurrentPage(1)
  }, [category_id, updateProducts])


  return <div className={cn.wrapper}>
    <h2 className={cn.title}>{name}</h2>
    <ProductListWrapper
      isLoading={isLoading}
      products={products}
      updateProducts={updateProducts}
      limit={limit}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  </div>
}