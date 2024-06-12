import { Icon, IconName } from '../../../shared/ui'
import { SearchSize } from '../Search.types'
import cn from './Search.module.scss'

interface SearchProps {
  size: SearchSize

  value: string;
  setValue: (value: string) => void;
  onSearch: () => void;
  onCrossClick?: () => void
}

export const Search = ({
  size, onSearch, onCrossClick,
  value,
  setValue

}: SearchProps) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  if (size === SearchSize.S) {
    return <div className={cn.wrapperS}>
      <input value={value} onChange={onChangeHandler} className={cn.input} type='text' placeholder='Поиск' />

      <div className={cn.icons}>
        <Icon name={IconName.Search} onClick={onSearch} />
        <Icon name={IconName.Cross} onClick={onCrossClick} />
      </div>
    </div>
  }

  if (size === SearchSize.M) {
    return <div className={cn.wrapper}>
      <input value={value} onChange={onChangeHandler} className={cn.input} type='text' placeholder='Поиск' />
      <button className={cn.button} onClick={onSearch}>Найти</button>
    </div>
  }
}