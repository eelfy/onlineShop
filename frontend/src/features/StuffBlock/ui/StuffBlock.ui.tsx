import classNames from 'classnames';
import { StuffBlockSize } from '../lib/StuffBlock.types';
import cn from './StuffBlock.module.scss'

interface StuffBlockProps {
  name: string;
  description: string;
  price: string
  size?: StuffBlockSize
}

const sizeToCn = {
  [StuffBlockSize.M]: cn.sizeM,
  [StuffBlockSize.S]: cn.sizeS
}

export const StuffBlock = (
  {
    name,
    description,
    price,
    size = StuffBlockSize.M
  }: StuffBlockProps
) => {
  return <div className={cn.wrapper}>
    <div className={classNames(cn.image, sizeToCn[size])}></div>

    <div className={cn.field}>
      <h2 className={cn.brandName}>{name}</h2>
      <span className={cn.description}>{description}</span>
    </div>

    <span className={cn.description}>{price}</span>
  </div>
}