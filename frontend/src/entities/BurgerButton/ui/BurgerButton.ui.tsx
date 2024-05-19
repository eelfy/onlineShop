import { useState } from "react"
import cn from './BurgerButton.module.scss'
import classNames from "classnames"

interface BurgerButtonProps {
  onClick: () => void;
}

export const BurgerButton = ({ onClick }: BurgerButtonProps) => {
  const [isActive, setIsActive] = useState(false)

  const toggleActive = () => {
    setIsActive((prev) => !prev)
    onClick();
  }

  return <div
    onClick={toggleActive}
    className={classNames(cn.buttonWrapper, isActive && cn.buttonWrapperActive)}
  >
    <label className={cn.burgerButton} >
      <div></div>
      <div></div>
      <div></div>
    </label>

  </div>
}