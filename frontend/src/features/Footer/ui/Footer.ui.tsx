import { redirect, useNavigate } from 'react-router-dom'
import { Routes } from '../../../shared/routes'
import cn from './Footer.module.scss'
import { Icon, IconName, Logo } from '../../../shared/ui'
import { Socials } from '../../../entities/Socials'

interface Cell {
  label: string,
  link?: Routes
}

const rawBrands: string[] = ['Adidas', 'Adidas', 'Adidas', 'Adidas', 'AdidasAdidas', 'AdidasAdidasAdidasAdidasAdidasAdidasAdidasAdidasAdidasAdidas', 'Adidas', 'AdidasAdidas', 'AdidasAdidasAdidasAdidas', 'Adidas', 'Adidas', 'Adidas', 'Adidas', 'Adidas']
const columnBrands: Cell[][] = []
let tempBrands: Cell[] = []

rawBrands.forEach((brand, index) => {
  if (index !== 0 && (index % 4 === 0 || index + 1 === rawBrands.length)) {
    columnBrands.push([...tempBrands])
    tempBrands = []
  }

  tempBrands.push({ label: brand })
})

const INFORMATION: Cell[][] = [[
  {
    label: 'Доставка и оплата',
    link: Routes.Payments
  },
  {
    label: 'Обмен и возврат',
    link: Routes.Refund
  },
  {
    label: 'Отзывы',
    link: Routes.Reviews
  },
]]

const FooterBlock = ({
  header,
  columns
}: {
  header: string,
  columns: Cell[][]
}) => {
  const onRedirect = (link?: string) => {
    if (link) {
      redirect(link);
    }
  }

  return (
    <div>
      <h1 className={cn.header}>{header}</h1>

      <div className={cn.brands}>
        {columns.map((column, indexColumn) => {
          return (
            <div className={cn.brandsColumn} key={indexColumn}>
              {
                column.map((cell, indexCell) => {
                  return <div onClick={() => {
                    onRedirect(cell.link)
                  }} className={cn.brandCell} key={indexCell}>{cell.label}</div>
                })
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const Footer = () => {
  return <footer className={cn.wrapper}>
    <div className={cn.footerTop}>
      <div className={cn.about}>
        <div className={cn.brandsVisible}>
          <FooterBlock header='Разделы' columns={columnBrands} />
        </div>
        <FooterBlock header='Информация' columns={INFORMATION} />
      </div>

      <div className={cn.socials}>
        <Logo />

        <Socials />

        <span className={cn.madeBy}>made by <a href='https://rightshift.dev' target='_blank' className={cn.madeByLink}>right.shift</a></span>
      </div>
    </div>
    <div className={cn.footerBottom}>
      <span className={cn.rights}>© 2023 Ramster Shop. All Rights Reserved</span>
    </div>
  </footer>
}