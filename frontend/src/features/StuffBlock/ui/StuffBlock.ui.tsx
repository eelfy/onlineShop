import classNames from 'classnames';
import { StuffBlockSize } from '../lib/StuffBlock.types';
import cn from './StuffBlock.module.scss'
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../shared/routes';
import { ImageId, convertNumberToSum, getImageUrlForBackground } from '../../../shared/lib';

interface StuffBlockProps {
  name: string;
  description: string;
  price: number;
  stuffSize?: string;
  size?: StuffBlockSize
  withDivider?: boolean
  imageId: ImageId
  productId: number
}

const sizeToCn = {
  [StuffBlockSize.S]: cn.sizeS,
  [StuffBlockSize.SM]: cn.sizeSM,
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
    imageId, productId
  }: StuffBlockProps
) => {
  const navigate = useNavigate()
  const onClickHandler = () => {
    navigate(`${Routes.Product}/${productId}`)
  }

  const convertedPrice = convertNumberToSum(price)

  const renderImage = () => {
    return (
      <div style={{
        backgroundImage: getImageUrlForBackground(imageId)
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

      <span className={cn.right}>От {convertedPrice}</span>
    </div>

    {withDivider && <div className={cn.divider}></div>}
  </div>

  if (size === StuffBlockSize.SM) return <div className={cn.dividerWrapper} onClick={onClickHandler}>
    <div className={cn.wrapperL}>
      <div className={cn.left}>
        {renderImage()}
        <div className={cn.field}>
          <span className={cn.name}>{name} {description}</span>
          <span className={cn.right}>От {convertedPrice}</span>
        </div>
      </div>
    </div>
  </div>

  return <div className={cn.wrapper} onClick={onClickHandler}>
    {renderImage()}

    <div className={cn.field}>
      <h2 className={cn.brandName}>{name}</h2>
      <span style={{
        marginTop: '5px'
      }} className={cn.description}>{description}</span>
    </div>

    <span style={{
      marginTop: '20px',
      fontWeight: 600
    }} className={cn.description}>От {convertedPrice}</span>

  </div>
}