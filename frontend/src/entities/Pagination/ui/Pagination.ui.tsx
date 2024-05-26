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
    <Icon width={7} heigh={14} onClick={onPrev} name={IconName.PrevArrow} />

    <div>{current} / {total}</div>

    <Icon width={7} heigh={14} onClick={onNext} name={IconName.NextArrow} />
  </div>
}