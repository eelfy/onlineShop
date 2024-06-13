import { useParams } from "react-router-dom"
import { Search, SearchSize } from "../../../entities/Search"
import { ProductResponse, SortOrder } from "../../../shared/lib"
import cn from './SearchResults.module.scss'
import { useEffect, useState } from "react"
import { Api } from "../../../shared/api/Api"
import { ProductListWrapper } from "../../../features/ProductListWrapper"

const limit = 30

export const SearchResults = () => {
  const { text } = useParams()
  const [searchValue, setSearchValue] = useState(text ?? '');
  const [products, setProducts] = useState<ProductResponse>()
  console.log('products: ', products);

  useEffect(() => {
    if (!text) return;

    Api.getSearch({
      search: text,
      limit,
      offset: 0,
      ordered: SortOrder.CREATED
    }).then((products) => {
      setProducts(products)
    })
  }, [text])

  const onSearch = () => {
    if (!searchValue.trim().length) return

    Api.getSearch({
      search: searchValue,
      limit,
      offset: 0,
      ordered: SortOrder.CREATED
    }).then((products) => {
      setProducts(products)
    })
  }

  return <div className={cn.wrapper}>
    <div className={cn.search}>
      <h2>Результат поиска</h2>
      <Search
        value={searchValue}
        setValue={setSearchValue}
        size={SearchSize.M} onSearch={onSearch} />
    </div>
    <ProductListWrapper products={products} setProducts={setProducts} limit={limit} />
  </div>
}