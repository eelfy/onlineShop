import classNames from 'classnames';
import { StuffBlockSize } from '../lib/StuffBlock.types';
import cn from './StuffBlock.module.scss'

interface StuffBlockProps {
  name: string;
  description: string;
  price: string
  stuffSize?: string;
  size?: StuffBlockSize
  withDivider?: boolean
}

const sizeToCn = {
  [StuffBlockSize.S]: cn.sizeS,
  [StuffBlockSize.M]: cn.sizeM,
  [StuffBlockSize.L]: cn.sizeL
}

export const StuffBlock = (
  {
    name,
    description,
    price,
    stuffSize,
    size = StuffBlockSize.M,
    withDivider
  }: StuffBlockProps
) => {
  if (size === StuffBlockSize.L) return <div className={cn.dividerWrapper}>
    <div className={cn.wrapperL}>
      <div className={cn.left}>
        <div className={classNames(cn.image, sizeToCn[size])}></div>

        <div className={cn.field}>
          <span className={cn.name}>{name} {description}</span>
          <span className={cn.size}>{stuffSize}</span>
        </div>
      </div>

      <span className={cn.right}>От {price}</span>
    </div>

    {withDivider && <div className={cn.divider}></div>}
  </div>
  return <div className={cn.wrapper}>
    <div className={classNames(cn.image, sizeToCn[size])}></div>

    <div className={cn.field}>
      <h2 className={cn.brandName}>{name}</h2>
      <span className={cn.description}>{description}</span>
    </div>

    <span className={cn.description}>От {price}</span>
  </div>
}