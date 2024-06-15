import { useState } from 'react';
import cn from './ItemPreview.module.scss'
import classNames from 'classnames';
import { ImageId, Product, getImageUrlForBackground } from '../../shared/lib';

interface ItemPreviewProps {
  images: Product['images']
  activeImage: ImageId
}

export const ItemPreview = ({ images, activeImage }: ItemPreviewProps) => {
  const [active, setActive] = useState(activeImage);

  return <div className={cn.wrapper}>
    <div
      style={{
        backgroundImage: getImageUrlForBackground(active)
      }}
      className={cn.bigImage} />

    <div className={cn.previews}>
      {
        images.map((image, index) => {
          const isActive = image === active
          return <div
            onClick={() => setActive(image)}
            key={index}
            style={{
              backgroundImage: getImageUrlForBackground(image)
            }}
            className={classNames(
              cn.image,
              isActive && cn.active
            )} />
        })}
    </div>
  </div>
}