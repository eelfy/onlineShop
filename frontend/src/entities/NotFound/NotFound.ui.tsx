import cn from './NotFound.module.scss'

export const NotFound = ({ title = 'Ничего не найдено' }: { title?: string }) => {
  return <div className={cn.wrapper}>
    <h1>{title}</h1>
  </div>
}