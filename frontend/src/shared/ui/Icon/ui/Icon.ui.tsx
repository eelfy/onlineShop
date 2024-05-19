import classNames from "classnames"
import { ICONS } from "../Icon.config"
import { IconNames } from "../lib/Icons.types"
import cn from './Icon.module.scss'

interface IconProps {
  name: IconNames
  onClick?: () => void
}

export const Icon = ({ name, onClick }: IconProps) => {
  return <img
    onClick={onClick}
    className={classNames(cn.icon, onClick && cn.clickable)}
    src={ICONS[name].icon}
    alt={ICONS[name].alt}
  />
}