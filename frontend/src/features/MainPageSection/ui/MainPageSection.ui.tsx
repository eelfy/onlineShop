import { useNavigate } from 'react-router-dom'
import { StuffSlider } from '../../StuffSlider'
import cn from './MainPageSection.module.scss'
import { Routes } from '../../../shared/routes'
import { Button, ButtonType } from '../../../shared/ui/Button'

interface MainPageSectionProps {
  title: string
}

export const MainPageSection = ({ title }: MainPageSectionProps) => {
  const navigate = useNavigate()
  const onTitleClick = () => {
    navigate(`${Routes.Brand}/${title}`)
  }
  return <div className={cn.wrapper}>
    <h2 className={cn.title}>{title}</h2>

    <StuffSlider cname={title} />

    <div className={cn.button}>
      <Button
        onClick={onTitleClick}
        type={ButtonType.Dark}
        text='Посмотреть все'
        borderRadius='20px'
        height='100%'
      />
    </div>
  </div>
}