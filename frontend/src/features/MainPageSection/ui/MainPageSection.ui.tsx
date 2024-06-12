import { useNavigate } from 'react-router-dom'
import { StuffSlider } from '../../StuffSlider'
import cn from './MainPageSection.module.scss'
import { Routes } from '../../../shared/routes'

interface MainPageSectionProps {
  title: string
}

export const MainPageSection = ({ title }: MainPageSectionProps) => {
  const navigate = useNavigate()
  const onTitleClick = () => {
    navigate(`${Routes.Brand}/${title}`)
  }
  return <div className={cn.wrapper}>
    <h2 onClick={onTitleClick} className={cn.title}>{title}</h2>
    <StuffSlider cname={title} />
  </div>
}