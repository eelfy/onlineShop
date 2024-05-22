import classNames from "classnames"
import { ICONS } from "../Icon.config"
import { IconName } from "../lib/Icons.types"
import cn from './Icon.module.scss'

interface IconProps {
  name: IconName
  onClick?: () => void
  size?: number
}

export const Icon = ({ name, onClick, size = 25 }: IconProps) => {
  return <img
    onClick={onClick}
    className={classNames(onClick && cn.clickable)}
    src={ICONS[name].icon}
    alt={ICONS[name].alt}
    style={{
      width: size,
      height: size
    }}
  />
}