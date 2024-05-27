import classNames from 'classnames'
import cn from './ItemSize.module.scss'
import { ItemSizeOption } from '../../../shared/lib'

interface ItemSizeProps extends ItemSizeOption {
  isActive?: boolean;
  onChangeActive: (id: ItemSizeOption['id']) => void
}

export const ItemSize = ({
  id,
  size, price, isActive, onChangeActive
}: ItemSizeProps) => {
  return <div onClick={() => onChangeActive(id)} className={classNames(cn.wrapper, isActive && cn.wrapperActive)}>
    <span className={cn.size}>{size}</span>
    <span className={cn.price}>{price}</span>
  </div>
}