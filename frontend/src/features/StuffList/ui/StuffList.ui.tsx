import { Pagination } from "../../../entities/Pagination"
import { Sort } from "../../../entities/Sort"
import { SortOption } from "../../../shared/lib"
import { StuffBlock } from "../../StuffBlock"

import cn from './StuffList.module.scss'

const OPTIONS: SortOption[] = [
  { title: 'Новинки', value: '1' },
  { title: 'По убыванию цены', value: '2' },
  { title: 'По возрастанию цены', value: '3' }
]


export const StuffList = () => {
  return <div className={cn.list}>
    <div className={cn.sort}>
      <Sort options={OPTIONS} />
    </div>

    <div className={cn.items}>
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
    </div>

    <Pagination onNext={() => console.log()} onPrev={() => console.log()} current={1} total={10} />
  </div>
}