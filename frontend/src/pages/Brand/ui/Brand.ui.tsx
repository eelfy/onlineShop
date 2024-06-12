import { useParams } from "react-router-dom"
import cn from './Brand.module.scss'

import { useEffect, useState } from "react"
import { ProductResponse, SortOrder } from "../../../shared/lib"
import { Api } from "../../../shared/api/Api"
import { ProductListWrapper } from "../../../features/ProductListWrapper"

const limit = 30

export const Brand = () => {
  const { brandName } = useParams()
  const [products, setProducts] = useState<ProductResponse>()

  useEffect(() => {
    if (!brandName) return;

    Api.getProductsInCategory({
      cname: brandName,
      limit,
      offset: 0,
      ordered: SortOrder.CREATED
    }).then((products) => {
      setProducts(products)
    })
  }, [brandName])

  return <div className={cn.wrapper}>
    <h2 className={cn.title}>{brandName}</h2>
    <ProductListWrapper products={products} setProducts={setProducts} limit={limit} />
  </div>
}