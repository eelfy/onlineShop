import { ReactNode } from "react";
import { Icon, IconName } from "../../../shared/ui"

import cn from './Dropdown.module.scss'

interface DropdownProps {
  icon: IconName;
  withBorder: boolean;
  title: string;
  content: string
}

export const Dropdown = ({ icon, withBorder = true, title, content }: DropdownProps) => {
  return <div className={cn.wrapper}>
    <div className={cn.top}>
      <div className={cn.tile}>
        <Icon size={20} name={icon} />
        <span className={cn.titleText}>{title}</span>
      </div>


    </div>

    <div className={cn.contentWrapper}>
      <span>{content}</span>
    </div>

    <div className={cn.separator} />
  </div>
}