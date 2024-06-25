import { useRef, useState } from "react"
import { Pagination } from "../../../entities/Pagination"
import { Sort } from "../../../entities/Sort"
import { BaseGetProductsParams, ProductResponse, SortOption, SortOrder } from "../../../shared/lib"
import { StuffBlock } from "../../StuffBlock"

import cn from './StuffList.module.scss'
import { CustomSort } from "../StuffList.types"

const OPTIONS: SortOption[] = [
  { title: 'Новинки', value: SortOrder.CREATED },
  { title: 'По убыванию цены', value: SortOrder.PRICE_DESC },
  { title: 'По возрастанию цены', value: SortOrder.PRICE_ASC }
]

interface StuffListProps {
  products: ProductResponse,
  updateProducts: (params: BaseGetProductsParams) => void
  limit: number,
  customSort?: CustomSort;
  currentPage: number;
  setCurrentPage: (val: number) => void
}

export const StuffList = ({
  products,
  updateProducts,
  limit,
  customSort,
  currentPage,
  setCurrentPage
}: StuffListProps) => {
  const [activeSort, setActiveSort] = useState<SortOrder>(customSort?.active ?? SortOrder.CREATED)

  const ref = useRef<HTMLDivElement>(null)

  const onUpdateSort = (sort: SortOrder) => {
    setActiveSort(sort)

    if (customSort) {
      return customSort.update(sort)
    }
    setCurrentPage(1)
    updateProducts({
      limit,
      offset: 0,
      ordered: sort
    })
  }

  const scrollToTop = () => ref.current?.scrollIntoView()

  const lastPage = Math.ceil(products.total_count / limit)

  const updatePagination = (page: number) => {
    if (page === currentPage) return

    setCurrentPage(page)
    const offset = (page - 1) * limit

    updateProducts({
      offset,
      limit,
      ordered: activeSort
    })
    scrollToTop()
  }

  const onPaginationNext = () => {
    if (!products) return;
    const page = currentPage >= lastPage - 1
      ? lastPage
      : currentPage + 1

    updatePagination(page)
  }

  const onPaginationPrev = () => {
    const page = currentPage <= 2 ? 1 : currentPage - 1

    updatePagination(page)
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
          price={product.min_price}
          imageId={product.images[0]}
          productId={product.id}
          key={product.id}
        />
      })}
    </div>

    <Pagination onNext={onPaginationNext} onPrev={onPaginationPrev} current={currentPage} total={lastPage} />
  </div>
}