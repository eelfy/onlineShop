import { useState } from 'react';
import cn from './ItemPreview.module.scss'
import classNames from 'classnames';

interface ItemPreviewProps {
  images: string[]
  activeImage: string
}

export const ItemPreview = ({ images, activeImage }: ItemPreviewProps) => {
  const [active, setActive] = useState(activeImage);

  return <div className={cn.wrapper}>
    <div
      style={{
        backgroundImage: `url(${active})`
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
              backgroundImage: `url(${image})`
            }}
            className={classNames(
              cn.image,
              isActive && cn.active
            )} />
        })}
    </div>
  </div>
}