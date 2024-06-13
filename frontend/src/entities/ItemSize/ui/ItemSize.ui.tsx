import classNames from 'classnames'
import cn from './ItemSize.module.scss'

interface ItemSizeProps {
  name: string;
  isActive?: boolean;
  onChangeActive: (id: string) => void
}

export const ItemSize = ({
  name, isActive, onChangeActive
}: ItemSizeProps) => {
  return <div onClick={() => onChangeActive(name)} className={classNames(cn.wrapper, isActive && cn.wrapperActive)}>
    <span className={cn.size}>{name}</span>
  </div>
}