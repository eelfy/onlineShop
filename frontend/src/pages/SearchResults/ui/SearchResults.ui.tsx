import { Search } from "../../../entities/Search"
import { StuffList } from "../../../features/StuffList"
import cn from './SearchResults.module.scss'

export const SearchResults = () => {
  return <div className={cn.wrapper}>
    <div className={cn.search}>
      <h2>Результат поиска</h2>
      <Search />
    </div>
    <StuffList />
  </div>
}