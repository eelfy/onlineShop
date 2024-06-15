import { useParams } from "react-router-dom"

import { useCallback, useEffect, useState } from "react"
import { BaseGetProductsParams, ProductResponse, SortOrder } from "../../shared/lib"
import { Api } from "../../shared/api/Api"

import cn from './CategoryPage.module.scss'
import { ProductListWrapper } from "../../features/ProductListWrapper"

const limit = 30

export const CategoryPage = () => {
  const { categoryName } = useParams()
  const [products, setProducts] = useState<ProductResponse>()

  const [name, category_id] = categoryName ? categoryName.split('.') : []

  const updateProducts = useCallback((params: BaseGetProductsParams) => {
    Api.getProducts({
      ...params,
      category_id: Number(category_id)
    }).then(products => {
      setProducts(products)
    })
  }, [category_id])

  useEffect(() => {
    if (!category_id) return;

    updateProducts({
      limit,
      offset: 0,
      ordered: SortOrder.CREATED
    })

  }, [category_id, updateProducts])


  return <div className={cn.wrapper}>
    <h2 className={cn.title}>{name}</h2>
    <ProductListWrapper products={products} updateProducts={updateProducts} limit={limit} />
  </div>
}