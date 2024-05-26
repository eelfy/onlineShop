import { StuffSlider } from '../../StuffSlider'
import cn from './MainPageSection.module.scss'

interface MainPageSectionProps {
  title: string
}

export const MainPageSection = ({ title }: MainPageSectionProps) => {
  return <div className={cn.wrapper}>
    <h2 className={cn.title}>{title}</h2>
    <StuffSlider />
  </div>
}