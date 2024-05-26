import classNames from "classnames"
import { ICONS } from "../Icon.config"
import { IconName } from "../lib/Icons.types"
import cn from './Icon.module.scss'

interface IconProps {
  name: IconName
  onClick?: () => void
  size?: number
  width?: number
  heigh?: number
  isRotated?: boolean
}

export const Icon = ({
  name,
  onClick,
  size = 25,
  width,
  heigh,
  isRotated
}: IconProps) => {
  return <img
    onClick={onClick}
    className={classNames(onClick && cn.clickable, isRotated && cn.iconRotated)}
    src={ICONS[name].icon}
    alt={ICONS[name].alt}
    style={{
      width: width ?? size,
      height: heigh ?? size
    }}
  />
}