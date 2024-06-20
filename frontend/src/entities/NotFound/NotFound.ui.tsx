import { Loader } from '../../shared/ui'
import cn from './NotFound.module.scss'

export const NotFound = ({ title = 'Ничего не найдено', isLoading }: { title?: string, isLoading?: boolean }) => {
  return <div className={cn.wrapper}>
    {isLoading ? <Loader /> : <h1>{title}</h1>}
  </div>
}