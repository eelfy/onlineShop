import classNames from 'classnames'
import cn from './Button.module.scss'
import { Icon, IconName } from '../../Icon'
import { ButtonType } from '../Button.types'


interface ButtonProps {
  text: string
  type?: ButtonType
  icon?: IconName
  onClick: () => void;
}

const typeToCn = {
  [ButtonType.Dark]: cn.buttonDark,
  [ButtonType.Light]: cn.buttonLight,
}

export const Button = ({ type = ButtonType.Light, text, icon, onClick }: ButtonProps) =>
  <button onClick={onClick} className={classNames(cn.button, typeToCn[type])}>
    <div className={cn.content}>
      {icon && <Icon name={icon} />}
      {text}
    </div>
  </button>