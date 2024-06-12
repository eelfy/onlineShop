import { useParams } from "react-router-dom"

import { useEffect, useState } from "react"
import { ProductResponse, SortOrder } from "../../shared/lib"
import { Api } from "../../shared/api/Api"

import cn from './CategoryPage.module.scss'
import { ProductListWrapper } from "../../features/ProductListWrapper"

const limit = 30

export const CategoryPage = () => {
  const { categoryName } = useParams()
  const [products, setProducts] = useState<ProductResponse>()

  const [name, category_id] = categoryName ? categoryName.split('.') : []

  useEffect(() => {
    if (!category_id) return;

    Api.getProducts({
      category_id: Number(category_id),
      limit,
      offset: 0,
      ordered: SortOrder.CREATED
    }).then((products) => {
      setProducts(products)
    })
  }, [category_id])

  return <div className={cn.wrapper}>
    <h2 className={cn.title}>{name}</h2>
    <ProductListWrapper products={products} setProducts={setProducts} limit={limit} />
  </div>
}