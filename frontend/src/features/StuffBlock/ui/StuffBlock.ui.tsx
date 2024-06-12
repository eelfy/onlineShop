import classNames from 'classnames';
import { StuffBlockSize } from '../lib/StuffBlock.types';
import cn from './StuffBlock.module.scss'
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../shared/routes';

interface StuffBlockProps {
  name: string;
  description: string;
  price: string
  stuffSize?: string;
  size?: StuffBlockSize
  withDivider?: boolean
  imageUrl?: string
  productId?: number
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
    withDivider,
    imageUrl, productId
  }: StuffBlockProps
) => {
  const navigate = useNavigate()
  const onClickHandler = (e) => {
    navigate(`${Routes.Product}/${productId}`)
  }

  const renderImage = () => {
    return (
      <div style={{
        backgroundImage: `url(${imageUrl})`
      }} className={classNames(cn.image, sizeToCn[size])}></div>
    )
  }

  if (size === StuffBlockSize.L) return <div className={cn.dividerWrapper} onClick={onClickHandler}>
    <div className={cn.wrapperL}>
      <div className={cn.left}>
        {renderImage()}

        <div className={cn.field}>
          <span className={cn.name}>{name} {description}</span>
          <span className={cn.size}>{stuffSize}</span>
        </div>
      </div>

      <span className={cn.right}>От {price}</span>
    </div>

    {withDivider && <div className={cn.divider}></div>}
  </div>

  return <div className={cn.wrapper} onClick={onClickHandler}>
    {renderImage()}

    <div className={cn.field}>
      <h2 className={cn.brandName}>{name}</h2>
      <span className={cn.description}>{description}</span>
    </div>

    <span className={cn.description}>От {price} ₽</span>
  </div>
}