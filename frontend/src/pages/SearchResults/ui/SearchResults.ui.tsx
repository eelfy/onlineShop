import { useParams } from "react-router-dom"
import { Search, SearchSize } from "../../../entities/Search"
import { BaseGetProductsParams, ProductResponse, SortOrder } from "../../../shared/lib"
import cn from './SearchResults.module.scss'
import { useCallback, useEffect, useState } from "react"
import { Api } from "../../../shared/api/Api"
import { ProductListWrapper } from "../../../features/ProductListWrapper"
import { CustomSort } from "../../../features/StuffList"
import { useBoolean } from "usehooks-ts"

const limit = 30

export const SearchResults = () => {
  const { text } = useParams()
  const [searchValue, setSearchValue] = useState(text ?? '');
  const [products, setProducts] = useState<ProductResponse>()
  const [sort, setSort] = useState(SortOrder.CREATED)
  const { value: isLoading, setFalse: stopLoading, setTrue: startLoading } = useBoolean(true)

  const updateProducts = useCallback((params: BaseGetProductsParams) => {
    startLoading()
    Api.getSearch({
      ...params,
      query: searchValue,
    }).then(products => {
      setProducts(products)
    }).finally(() => stopLoading())
  }, [searchValue, startLoading, stopLoading])

  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    if (!text) return
    setSearchValue(text)
  }, [text]);

  useEffect(() => {
    updateProducts({
      limit,
      offset: 0,
      ordered: SortOrder.CREATED
    })
  }, [])

  const onSearch = () => {
    if (!searchValue.trim().length) return
    setCurrentPage(1)
    updateProducts({
      limit,
      offset: 0,
      ordered: sort
    })
  }

  const customSort: CustomSort = {
    active: sort,
    update: (sort) => {
      setSort(sort)
      updateProducts({
        limit,
        offset: 0,
        ordered: sort
      })
    }
  }

  return <div className={cn.wrapper}>
    <div className={cn.search}>
      <h2>Результат поиска</h2>
      <Search
        value={searchValue}
        setValue={setSearchValue}
        size={SearchSize.M} onSearch={onSearch} />
    </div>
    <ProductListWrapper
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      isLoading={isLoading}
      customSort={customSort}
      products={products}
      updateProducts={updateProducts}
      limit={limit}
    />
  </div>
}