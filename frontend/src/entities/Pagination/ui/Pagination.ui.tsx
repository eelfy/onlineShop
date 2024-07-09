import { Icon, IconName } from '../../../shared/ui'
import cn from './Pagination.module.scss'

interface PaginationProps {
  onNext: () => void,
  onPrev: () => void,
  current: number,
  total: number
}

export const Pagination = ({
  onNext,
  onPrev,
  current,
  total,
}: PaginationProps) => {
  return <div className={cn.wrapper}>
    <div className={cn.iconWrapper} onClick={onPrev} >
      <Icon width={7} heigh={14} name={IconName.PrevArrow} />
    </div>

    <div>{current} / {total}</div>

    <div className={cn.iconWrapper} onClick={onNext} >
      <Icon width={7} heigh={14} name={IconName.NextArrow} />
    </div>
  </div>
}