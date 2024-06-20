import classNames from 'classnames'
import cn from './Loader.module.scss'

export const Loader = ({ isFullSize }: { isFullSize?: boolean }) => {
  return <div className={classNames(isFullSize && cn.fullSize)}>
    <div className={cn.loader} />
  </div>
}