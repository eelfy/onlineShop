import classNames from 'classnames'
import cn from './HeaderSubMenu.module.scss'
import { CSSProperties } from 'react';
import { HeaderBrandText } from '../HeaderBrandText';
import { SubCategories } from '../../shared/lib';

interface HeaderSubMenuProps {
  items: [string, SubCategories | number][] | [string, number][];
  isVisible: boolean,
  style?: CSSProperties,
  className?: string
  onBrandClick: (arg: SubCategories | [string, number]) => void
}

export const HeaderSubMenu = ({ isVisible, items, style, className, onBrandClick }: HeaderSubMenuProps) => {
  return <div style={style} className={classNames(cn.subHeader, isVisible && cn.visible, className)}>
    <div></div>

    <div className={cn.subHeaderNavigation}>
      {items.map(([key, value], index) => {
        const onBrandClickHandler = () => {
          if (typeof value === 'number') {
            return onBrandClick([key, value])
          }
          return onBrandClick(value)
        }
        return <HeaderBrandText onClick={onBrandClickHandler} key={index}>{key}</HeaderBrandText>
      })}
    </div>

    <div></div>
  </div>
}