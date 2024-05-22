import cn from './Search.module.scss'

// interface SearchProps {
//   some?: unknown
// }

export const Search = () => {
  return <div className={cn.wrapper}>
    <input className={cn.input} type='text' placeholder='Поиск' />
    <button className={cn.button}>Найти</button>
  </div>
}