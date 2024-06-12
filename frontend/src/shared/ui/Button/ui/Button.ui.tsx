import classNames from 'classnames'
import cn from './Button.module.scss'
import { Icon, IconName } from '../../Icon'
import { ButtonType } from '../Button.types'


interface ButtonProps {
  text: string
  type?: ButtonType
  icon?: IconName
  onClick: () => void;
  isDisabled?: boolean
}

const typeToCn = {
  [ButtonType.Dark]: cn.buttonDark,
  [ButtonType.Light]: cn.buttonLight,
}

export const Button = ({ type = ButtonType.Light, text, icon, onClick, isDisabled }: ButtonProps) => {
  const onButtonClick = () => {
    if (isDisabled) return

    onClick()
  }

  return <button onClick={onButtonClick} className={classNames(cn.button, typeToCn[type], isDisabled && cn.disabled)}>
    <div className={cn.content}>
      {icon && <div className={cn.iconWrapper}>
        <Icon name={icon} />
      </div>}
      {text}
    </div>
  </button>
}