import { useRef, useState } from "react"
import { Pagination } from "../../../entities/Pagination"
import { Sort } from "../../../entities/Sort"
import { ProductResponse, SortOption, SortOrder } from "../../../shared/lib"
import { StuffBlock } from "../../StuffBlock"

import cn from './StuffList.module.scss'
import { Api } from "../../../shared/api/Api"
import { useParams } from "react-router-dom"

const OPTIONS: SortOption[] = [
  { title: 'Новинки', value: SortOrder.CREATED },
  { title: 'По убыванию цены', value: SortOrder.PRICE_ASC },
  { title: 'По возрастанию цены', value: SortOrder.PRICE_DESC }
]

export const StuffList = ({ products, setProducts, limit }: {
  products: ProductResponse,
  setProducts: (prod: ProductResponse) => void
  limit: number
}) => {
  const { brandName } = useParams()
  const [activeSort, setActiveSort] = useState<SortOrder>(SortOrder.CREATED)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const ref = useRef<HTMLDivElement>(null)


  const onUpdateSort = (sort: SortOption['value']) => {
    setActiveSort(sort)

    if (!brandName) return;

    setCurrentPage(1)

    Api.getProductsInCategory({
      cname: brandName,
      limit,
      offset: 0,
      ordered: sort
    }).then((products) => {
      setProducts(products)
    })
  }

  const smoothScroll = () => ref.current?.scrollIntoView({ behavior: "smooth" })

  const onPaginationNext = () => {
    if (!brandName || !products) return;

    const page = currentPage === (products.total_count / limit) - 1
      ? products.total_count
      : currentPage + 1

    setCurrentPage(page)

    Api.getProductsInCategory({
      offset: page * limit + 1,
      cname: brandName,
      limit,
      ordered: activeSort
    }).then((products) => {
      setProducts(products)
      smoothScroll()
    })
  }

  const onPaginationPrev = () => {
    if (!brandName) return;

    const page = currentPage === 2 ? 1 : currentPage - 1
    setCurrentPage(page)

    Api.getProductsInCategory({
      offset: page * limit + 1,
      cname: brandName,
      limit,
      ordered: activeSort
    }).then((products) => {
      setProducts(products)
      smoothScroll()
    })
  }


  return <div className={cn.list}>
    <div className={cn.sort} ref={ref}>
      <Sort activeSort={activeSort} options={OPTIONS} onClick={onUpdateSort} />
    </div>

    <div className={cn.items}>
      {products.products.map(product => {
        return <StuffBlock
          name={product.brand}
          description={product.name}
          price={String(product.min_price)}
          imageUrl={product.photo1_url}
          productId={product.id}
        />
      })}
    </div>

    <Pagination onNext={onPaginationNext} onPrev={onPaginationPrev} current={currentPage} total={Math.ceil(products.total_count / limit)} />
  </div>
}