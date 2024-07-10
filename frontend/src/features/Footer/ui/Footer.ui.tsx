import { useNavigate } from 'react-router-dom'
import { Routes } from '../../../shared/routes'
import cn from './Footer.module.scss'
import { Logo } from '../../../shared/ui'
import { Socials } from '../../../entities/Socials'
import { observer } from 'mobx-react-lite'

export const Footer = observer(() => {
  const navigate = useNavigate()
  return <footer className={cn.wrapper}>
    <div className={cn.footerTop}>
      <div className={cn.about}>
        <div>
          <h1 className={cn.header}>Информация</h1>

          <div className={cn.brands}>
            <div className={cn.brandsColumn}>
              <div onClick={() => navigate(Routes.Delivery)} className={cn.brandCell}>Доставка и оплата</div>
              <div onClick={() => navigate(Routes.Terms)} className={cn.brandCell}>Условия предоставления услуг</div>
              <div onClick={() => navigate(Routes.Refund)} className={cn.brandCell}>Обмен и возврат</div>
              <div onClick={
                () => window.open('https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTM4NjA4MzUwMjg4ODY4?igsh=MWs5dXZxZjNqbjBodQ==', '_blank')
              } className={cn.brandCell}>Отзывы</div>
            </div>
          </div>
        </div>
      </div>

      <div className={cn.socials}>
        <Logo />

        <Socials />

        {/* <span className={cn.madeBy}>made by <a href='https://rightshift.dev' target='_blank' className={cn.madeByLink}>right.shift</a></span> */}
        <div className={cn.footerBottom}>
          <span className={cn.rights}>© 2023 Ramster Shop. All Rights Reserved</span>
        </div>
      </div>
    </div>
  </footer>
})