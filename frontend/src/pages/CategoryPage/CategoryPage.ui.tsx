import { useParams } from "react-router-dom"

import { useCallback, useEffect, useState } from "react"
import { BaseGetProductsParams, ProductResponse, SortOrder } from "../../shared/lib"
import { Api } from "../../shared/api/Api"

import cn from './CategoryPage.module.scss'
import { ProductListWrapper } from "../../features/ProductListWrapper"
import { useBoolean } from "usehooks-ts"
import { CustomSort } from "../../features/StuffList"
import { PageWrapper } from "../../shared/ui"

const limit = 30

export const CategoryPage = () => {
  const { categoryName } = useParams()
  const [products, setProducts] = useState<ProductResponse>()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { value: isLoading, setFalse: stopLoading, setTrue: startLoading } = useBoolean(true)
  const [sort, setSort] = useState(SortOrder.CREATED)

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
    const ordered = SortOrder.CREATED
    updateProducts({
      limit,
      offset: 0,
      ordered
    })
    setSort(ordered)
    setCurrentPage(1)
  }, [category_id, updateProducts])

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

  return <PageWrapper className={cn.wrapper}>
    <h2 className={cn.title}>{name}</h2>
    <ProductListWrapper
      isLoading={isLoading}
      products={products}
      updateProducts={updateProducts}
      limit={limit}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      customSort={customSort}
    />
  </PageWrapper>
}