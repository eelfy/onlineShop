import cn from './StuffBlock.module.scss'

interface StuffBlockProps {
  name: string;
  description: string;
  price: string
}

export const StuffBlock = (
  {
    name,
    description,
    price,
  }: StuffBlockProps
) => {
  return <div className={cn.wrapper}>
    <div className={cn.image}></div>

    <div className={cn.field}>
      <h2 className={cn.brandName}>{name}</h2>
      <span className={cn.description}>{description}</span>
    </div>

    <span className={cn.description}>{price}</span>
  </div>
}