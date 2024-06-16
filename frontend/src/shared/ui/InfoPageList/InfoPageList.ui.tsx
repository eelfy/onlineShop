import cn from './InfoPageList.module.scss'
import { InfoPageItem } from './InfoPageList.types'

export const InfoPageList = ({ items }: { items: InfoPageItem[] }) => {
  return <div className={cn.wrapper}>
    {items.map(({ title, content }, index) => (
      <div className={cn.block} key={index}>
        <div className={cn.title}>{title}</div>
        <div className={cn.text}>{content}</div>
      </div>
    ))}
  </div>
}