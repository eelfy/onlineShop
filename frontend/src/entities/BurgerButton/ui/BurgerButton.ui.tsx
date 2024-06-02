import cn from './BurgerButton.module.scss'
import classNames from "classnames"

interface BurgerButtonProps {
  onClick: () => void;
  isActive: boolean;
}

export const BurgerButton = ({ onClick, isActive }: BurgerButtonProps) => {
  return <div
    onClick={onClick}
    className={classNames(cn.buttonWrapper, isActive && cn.buttonWrapperActive)}
  >
    <label className={cn.burgerButton} >
      <div></div>
      <div></div>
      <div></div>
    </label>

  </div>
}