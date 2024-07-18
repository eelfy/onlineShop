import classNames from 'classnames';
import { StuffBlockSize } from '../lib/StuffBlock.types';
import cn from './StuffBlock.module.scss'
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../shared/routes';
import { ImageId, Product, convertNumberToSum, getImageUrlForBackground } from '../../../shared/lib';

interface StuffBlockProps extends Pick<Product, 'article_number'> {
  name: string;
  brand: string;
  min_price: number;
  stuffSize?: string;
  size?: StuffBlockSize
  withDivider?: boolean
  image: ImageId
  id: number
  isTextAlignCenter?: boolean
  isStatic?: boolean
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
    brand,
    min_price,
    stuffSize,
    size = StuffBlockSize.M,
    withDivider,
    image,
    id,
    article_number,
    isTextAlignCenter = true,
    isStatic,
  }: StuffBlockProps
) => {
  const navigate = useNavigate()
  const onClickHandler = () => {
    navigate(`${Routes.Product}/${article_number ?? id}`)
  }

  const convertedPrice = convertNumberToSum(min_price)

  const renderImage = () => {
    return (
      <div style={{
        backgroundImage: getImageUrlForBackground(image)
      }} className={classNames(cn.image, sizeToCn[size])}></div>
    )
  }

  if (size === StuffBlockSize.L) return <div className={cn.dividerWrapper} onClick={onClickHandler}>
    <div className={cn.wrapperL}>
      <div className={cn.left}>
        {renderImage()}

        <div className={cn.field}>
          <span className={cn.name}>{name} {brand}</span>
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
          <span className={cn.name}>{name} {brand}</span>
          <span className={cn.right}>От {convertedPrice}</span>
        </div>
      </div>
    </div>
  </div>

  const align = isTextAlignCenter ? 'center' : 'left'
  return <div className={classNames(cn.wrapperM, isStatic && cn.static)} onClick={onClickHandler}>
    {renderImage()}

    <div className={cn.field}>
      <h2 style={{
        textAlign: align
      }} className={classNames(cn.ellipsis, cn.brandName)}>{name}</h2>
      <span style={{
        marginTop: '5px',
        textAlign: align
      }} className={classNames(cn.ellipsis, cn.description)}>{brand}</span>
    </div>

    <span style={{
      marginTop: '20px',
      textAlign: align,
      fontWeight: 600
    }} className={cn.brand}>От {convertedPrice}</span>

  </div>
}