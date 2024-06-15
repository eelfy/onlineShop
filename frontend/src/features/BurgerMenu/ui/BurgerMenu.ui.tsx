import { useState } from 'react';
import { Socials } from '../../../entities/Socials';
import { Icon, IconName } from '../../../shared/ui';
import cn from './BurgerMenu.module.scss'
import classNames from 'classnames';
import { Categories, SubCategories } from '../../../shared/lib';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../shared/routes';


interface BurgerMenuProps {
  items: Categories
  onCloseAllNavigate: () => void
}

const BurgerItemElement = ({
  category: [categoryName, subCategories],
  onCloseAllNavigate,
}: {
  onCloseAllNavigate: BurgerMenuProps['onCloseAllNavigate']
  category: [string, SubCategories]
}) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(prev => !prev)

  return <div className={cn.item}>
    <div className={cn.parent} onClick={toggleOpen}>
      {categoryName}

      <div className={classNames(isOpen && cn.rotated)}>
        <Icon width={12} heigh={19} name={IconName.NextArrow} />
      </div>

    </div>

    <div className={classNames(cn.child, isOpen && cn.open)}>
      {Object.entries(subCategories).map(([brand, id], index) => {
        return <div key={index} onClick={() => {
          navigate(`${Routes.Category}/${brand}.${id}`)
          onCloseAllNavigate()
        }}>
          {brand}
        </div>
      })}
    </div>
  </div>
}

export const BurgerMenu = ({ items, onCloseAllNavigate }: BurgerMenuProps) => {
  return <div className={cn.wrapper}>
    <div className={cn.items}>
      {
        Object.entries(items).map((item, index) => {
          return <BurgerItemElement category={item} key={index} onCloseAllNavigate={onCloseAllNavigate} />
        })
      }
    </div>

    <div className={cn.socials}>
      <Socials isBlack />
    </div>

  </div>
}