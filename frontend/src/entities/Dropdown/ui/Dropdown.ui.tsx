import { useState } from "react";
import { Icon, IconName } from "../../../shared/ui"

import cn from './Dropdown.module.scss'
import classNames from "classnames";

interface DropdownProps {
  icon: IconName;
  withSeparator?: boolean;
  title: string;
  content: string
}

export const Dropdown = ({ icon, withSeparator = true, title, content }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(prev => !prev)

  return <div className={cn.wrapper}>
    <div className={cn.top} onClick={toggleOpen}>
      <div className={cn.title}>
        <Icon size={20} name={icon} />
        <span className={cn.titleText}>{title}</span>
      </div>

      <Icon width={14} heigh={10} name={IconName.ArrowDown} isRotated={isOpen} />
    </div>


    <span className={classNames(cn.content, isOpen && cn.contentOpen)}>{content}</span>


    {withSeparator && (<div className={cn.separator} />)}
  </div>
}