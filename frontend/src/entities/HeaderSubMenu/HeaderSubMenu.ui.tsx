import classNames from 'classnames'
import cn from './HeaderSubMenu.module.scss'
import { CSSProperties } from 'react';
import { HeaderBrandText } from '../HeaderBrandText';
import { noop } from '../../shared/lib';

interface HeaderSubMenuProps {
  items: string[];
  isVisible: boolean,
  style?: CSSProperties,
  className?: string
}

export const HeaderSubMenu = ({ isVisible, items, style, className }: HeaderSubMenuProps) => {
  return <div style={style} className={classNames(cn.subHeader, isVisible && cn.visible, className)}>
    <div className={cn.subHeaderNavigation}>
      {items.map((item, index) => {
        return <HeaderBrandText onClick={noop} key={index}>{item}</HeaderBrandText>
      })}
    </div>
  </div>
}