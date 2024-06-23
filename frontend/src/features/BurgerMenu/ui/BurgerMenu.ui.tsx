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
  category: [string, SubCategories | number]
}) => {
  const isSimple = typeof subCategories === 'number'
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const navigateToCategoryPage = ([brand, id]: [string, number]) => {
    navigate(`${Routes.Category}/${brand}.${id}`)
    onCloseAllNavigate()
  }

  const toggleOpen = (arg: [string, SubCategories | number]) => {
    if (typeof arg[1] === 'number') return navigateToCategoryPage([arg[0], arg[1]])
    return setIsOpen(prev => !prev);
  }

  return <div className={cn.item}>
    <div className={cn.parent} onClick={() => toggleOpen([categoryName, subCategories])}>
      {categoryName}

      <div className={classNames(isOpen && cn.rotated)}>
        <Icon width={12} heigh={19} name={IconName.NextArrow} />
      </div>

    </div>

    {!isSimple && (
      <div className={classNames(cn.child, isOpen && cn.open)}>
        {Object.entries(subCategories).map((arg, index) => {
          return <div key={index} onClick={() => {
            navigateToCategoryPage(arg)
          }}>
            {arg[0]}
          </div>
        })}
      </div>
    )}
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