import { Icon, IconName } from '../../../shared/ui'
import { SearchSize } from '../Search.types'
import cn from './Search.module.scss'

interface SearchProps {
  size: SearchSize

  onSearch: () => void;
  onCrossClick?: () => void
}

export const Search = ({ size, onSearch, onCrossClick }: SearchProps) => {

  if (size === SearchSize.S) {
    return <div className={cn.wrapperS}>
      <input className={cn.input} type='text' placeholder='Поиск' />

      <div className={cn.icons}>
        <Icon name={IconName.Search} onClick={onSearch} />
        <Icon name={IconName.Cross} onClick={onCrossClick} />
      </div>
    </div>
  }

  if (size === SearchSize.M) {
    return <div className={cn.wrapper}>
      <input className={cn.input} type='text' placeholder='Поиск' />
      <button className={cn.button} onClick={onSearch}>Найти</button>
    </div>
  }
}