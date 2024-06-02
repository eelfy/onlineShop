import { useState } from 'react';
import { Socials } from '../../../entities/Socials';
import { Icon, IconName } from '../../../shared/ui';
import cn from './BurgerMenu.module.scss'
import classNames from 'classnames';

interface BurgerItem {
  name: string;
  items?: BurgerItem[]
}

interface BurgerMenuProps {
  items: BurgerItem[]
}

const BurgerItemElement = ({ name, items }: BurgerItem) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(prev => !prev)

  return <div className={cn.item}>
    <div className={cn.parent} onClick={toggleOpen}>
      {name}

      <div className={classNames(isOpen && cn.rotated)}>
        <Icon width={12} heigh={19} name={IconName.NextArrow} />
      </div>

    </div>

    <div className={classNames(cn.child, isOpen && cn.open)}>
      {items?.map((item, index) => {
        return <div key={index}>
          {item.name}
        </div>
      })}
    </div>
  </div>
}

export const BurgerMenu = ({ items }: BurgerMenuProps) => {
  return <div className={cn.wrapper}>
    <div className={cn.items}>
      {
        items.map((item, index) => {
          return <BurgerItemElement {...item} key={index} />
        })
      }
    </div>

    <div className={cn.socials}>
      <Socials isBlack />
    </div>

  </div>
}